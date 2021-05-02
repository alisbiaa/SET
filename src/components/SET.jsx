import React, {Component} from 'react';
import Menu from "./menu";
import SvgComponent from "./svgComponent";
import Status from "./status";
import {createDeck} from "./backend/DeckManager";
import {checkSet,checkSetButton} from "./backend/SetAnalyser";
import {Controllers} from "./controllers";


class SET extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [
                {message:'this is an error message', type: 'error'},
                {message:'this is an error message', type: 'warning'},
                {message:'this is an error message', type: 'success'},
            ],
            selected_cards: [],
            cards_on_board: 12, // usually 12 card till we add 3 more
            deck: [],
            // controllers
            playersNumber: 0,
            playersList: [],
            miscellaneousOptions: {
                setChecker: false,
                setShower: false,
                pull3Cards: false
            },
            difficulty: '',
            start: false,
            // menu
        }// warning, error, success
    }

    handleSelectingCard = (card) => {

        const {selected_cards,playersList} = this.state;
        if (playersList.find(elem => elem.selected === true) === undefined) {
            this.handleNotification('Select a player first.', 'warning', true);
            return;
        }
        const index = selected_cards.indexOf(card);
        if (selected_cards.length < 3) {
            index === -1 ? selected_cards.push(card) : selected_cards.splice(index, 1);
        } else {
            index !== -1 ? selected_cards.splice(index, 1) :
                this.handleNotification('You can NOT select more than 3 cards at a time.', 'warning', true);
        }
        this.setState({selected_cards: selected_cards});
        this.update();

    }
    update = () => {
        const {selected_cards, deck,playersList} = this.state;
        if (!(selected_cards.length === 3)) return;
        const index = playersList.findIndex(elem => elem.selected === true);
        console.log(index);
        const player = playersList[index];
        console.log(player);
        if (checkSet(selected_cards[0], selected_cards[1], selected_cards[2])) {
            this.handleNotification('Correct combination', 'success', true);
            player.score += 1;
            // updating cards
            for (let i = 0; i < 3; i++) {
                const index = deck.indexOf(selected_cards[i]);
                if (deck.length > 12) {
                    deck[index] = deck[12];
                    deck.splice(12, 1);
                } else
                    deck.splice(index, 1);
            }
            this.setState({deck: deck})
            // enabling all players
            for (let i = 0; i < playersList.length; i++)
                playersList[i].disabled = false;

        } else{
            this.handleNotification('Wrong combination', 'error', true);
            player.score -= 1;
            player.disabled = true;
            let check = true;
            playersList.map(player => check && (check = player.disabled));
            if (check) {
                for (let i = 0; i < playersList.length; i++)
                    playersList[i].disabled = false;
            }
        }
        player.selected = false;
        playersList[index] = player;
        this.setState({selected_cards: [],playersList:playersList})
    }

    handleNotification = (message, type, clear = false) => {
        let {notifications} = this.state;
        if (clear) notifications = [];
        const notification = {message: message, type: type};
        notifications.push(notification);
        this.setState({notifications: notifications});
    }


    // controllers handlers :

    nameHandler = (name, index) => {
        let newPlayersList = [...this.state.playersList];
        console.log(index);
        newPlayersList[index] = {name: name, selected: false, score: 0, disabled:false};
        this.setState({playersList: newPlayersList});
    }
    handleMiscellaneousOptions = (option) => {
        const newMiscellaneousOptions = this.state.miscellaneousOptions;
        newMiscellaneousOptions[option] = !newMiscellaneousOptions[option];
        this.setState({miscellaneousOptions: newMiscellaneousOptions});
    }
    handleDifficulty = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    handlePlayersNumber = (event) => {
        const {playersList, playersNumber} = this.state;
        this.setState({playersNumber: parseInt(event.target.value)});
        const difference = parseInt(event.target.value) - playersList.length;
        difference >= 0 ?
            this.setState({
                playersList: [...playersList, ...Array(difference).fill({
                    name: '',
                    selected: false,
                    score: 0,
                    disabled:false,
                })]
            }) :
            this.setState({playersList: playersList.slice(0, playersNumber - 1)});
    }
    startHandler = () => {
        const {playersList, playersNumber, difficulty, start} = this.state;
        const empty_index = playersList.findIndex(player => player.name === '');
        if (playersNumber === 0)
            this.handleNotification('Enter number of players.', 'error', true);
        else if (empty_index !== -1)
            this.handleNotification('Enter players\' names.', 'error', true);
        else if(difficulty==='')
            this.handleNotification('Choose difficulty', 'error', true);

        else {
            this.handleNotification('Game Started', 'success', true);
            this.setState({deck: createDeck(difficulty)})
            this.setState({start: !start});
        }
    }

    // menu controllers :

    handleQuit = () => {
        const {start} = this.state;
        this.setState({
            start: !start,
            selected_cards: [],
            cards_on_board: 12,
            playersList: this.state.playersList.map((player) => {
                player.selected=false;
                player.disabled=false;
                player.score=0;
                return player;
            }),
            deck: [],
            });
        this.handleNotification('Game over', 'warning', true);

    }
    handleSelectingPlayer = (player) => {
        const {playersList} = this.state;
        const index = playersList.indexOf(player);
        if (player.selected) {
            player.selected = false;
            playersList[index] = player;
        } else {
            if (playersList.find(elem => elem.selected === true) !== undefined) {
                this.handleNotification('You can only select one player at a time', 'error', true);
                return;
            } else {
                this.handleNotification(`Player : ${player.name} has been selected.`, 'warning', true);
                player.selected = true;
                playersList[index] = player;
            }
        }
        this.setState({playersList: playersList})
    }
    handleSetCheckerButton = () => {
        checkSetButton(this.state.deck.slice(0, this.state.cards_on_board)) ?
            this.handleNotification('No, there is no SET on the board', 'warning', true) :
            this.handleNotification('Yes, there is a SET on the board', 'warning', true);
    }


    render() {
        const {notifications, playersList, miscellaneousOptions, cards_on_board, start} = this.state;
        return (
            <React.Fragment>
                <div className="row-span-6 border-2 border-ChampagnePink rounded-t-lg bg-ChampagnePink">
                    <span hidden={!start}>
                        <Controllers
                            miscellaneousOptions={miscellaneousOptions}
                            playersList={playersList}
                            handleSelectingPlayer={this.handleSelectingPlayer}
                            handleQuit={this.handleQuit}
                            start={start}
                        />
                    </span>
                    <span hidden={start}>
                        <Menu
                            playersList={playersList}
                            handlePlayersNumber={this.handlePlayersNumber}
                            nameHandler={this.nameHandler}
                            handleMiscellaneousOptions={this.handleMiscellaneousOptions}
                            handleDifficulty={this.handleDifficulty}
                            startHandler={this.startHandler}
                            start={start}
                        />
                    </span>



                </div>
                <Status notifications={notifications}/>
                <div className="col-span-3 row-span-5 ">
                    <div className="flex flex-wrap content-center justify-center h-full">
                        <div className="grid grid-flow-col grid-rows-4 h-full">
                            {
                                this.state.deck.slice(0, cards_on_board).map((card, index) =>
                                        <SvgComponent
                                            key={index}
                                            card={card}
                                            handleSelectingCard={this.handleSelectingCard}
                                            selected={this.state.selected_cards.includes(card)}
                                        />
                                    //{num: n, shape: s, shade: sh, clr: c, index: i}
                                )
                            }
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}


SET.propTypes = {};

export default SET;
