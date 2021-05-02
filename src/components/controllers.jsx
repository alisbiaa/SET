// @flow 
import * as React from 'react';
import Fade from "react-reveal/Fade";


export const Controllers = ({playersList, handleSelectingPlayer, handleQuit, start,miscellaneousOptions}) => {
    return (
        <Fade top when={start}>
            <div className="flex flex-wrap h-full ">
                <div className="flex flex-wrap content-center justify-center py-4 h-3/5 w-full">
                    {playersList.map((player, index) => (
                        <button
                            key={index}
                            className={`w-9/12 h-14 border-2 rounded-lg text-center my-2  ${!player.selected ? 'bg-Isabelline ' : ' bg-AntiqueBrass '} disabled:opacity-50 ${player.disabled ? '' : " hover:opacity-70"} focus:outline-none`}
                            onClick={() => handleSelectingPlayer(player)}
                            disabled={player.disabled}
                        >
                            {player.name}

                            <div>
                                {player.score}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap content-center justify-center py-4 h-1/5 w-full focus:outline-none">
                    {miscellaneousOptions.setChecker ?
                        <button
                            className={`w-9/12 h-14 border-2 rounded-lg text-center my-2`}
                        >
                            SET Checker</button>
                        : null}
                </div>

                <div className="flex flex-wrap content-center justify-center py-4 h-1/5 w-full ">
                    <button
                        className="w-9/12 h-14 rounded-lg text-center my-2 bg-Artichoke"
                        onClick={() => handleQuit()}
                    >
                        Quit
                    </button>
                </div>

            </div>
        </Fade>


    );

};

