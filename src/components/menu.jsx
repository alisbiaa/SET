import React, {useState} from 'react';
import PlayerNamesModal from "./controllersComponents/playerNamesModal";
import MiscellaneousOptions from "./controllersComponents/miscellaneousOptions";
import Difficulty from "./controllersComponents/difficulty";
import Fade from "react-reveal/Fade";

function Menu({
                  playersList, handlePlayersNumber, nameHandler, handleMiscellaneousOptions, handleDifficulty,
                  startHandler, start
              }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <Fade top when={!start}>
            <div className="relative flex flex-wrap content-center justify-center py-4 h-full">
                <input
                    className="w-9/12 h-14 border-2 border-CeladonBlue border-opacity-50 rounded-lg text-center my-2"
                    placeholder="How many player?"
                    type="number"
                    min="2"
                    max="5"
                    onChange={event => handlePlayersNumber(event)}/>
                <button
                    className="w-9/12 h-14 border-2 border-opacity-50 rounded-lg text-center my-2  disabled:opacity-50"
                    onClick={() => setShowModal(true)}
                    disabled={playersList.length < 2}
                >
                    Player's names
                </button>
                <PlayerNamesModal
                    showModal={showModal}
                    showModalHandler={() => setShowModal(false)}
                    playersList={playersList}
                    nameHandler={nameHandler}
                />
                <MiscellaneousOptions
                    handleMiscellaneousOptions={handleMiscellaneousOptions}
                />

                <Difficulty
                    handleDifficulty={handleDifficulty}
                />
                <button
                    className="absolute bottom-4 w-9/12 h-14 rounded-lg text-center  my-2 bg-Artichoke"
                    onClick={() => startHandler()}
                >
                    Start
                </button>
            </div>
        </Fade>
    );
}


export default Menu;
