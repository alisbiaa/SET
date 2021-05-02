import React from 'react';

function PlayerNamesModal({showModal,playersList,showModalHandler,nameHandler}) {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-Linen outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h5 className="text-lg font-semibold">
                                        Set player's names
                                    </h5>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none"
                                        onClick={() => showModalHandler(false)}
                                    >

                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex flex-wrap content-center justify-center py-4 h-full">
                                    {playersList.map((player, index) =>
                                        (<input
                                            key={index}
                                            type="text"
                                            className="outline-none rounded-lg text-center mx-1 my-2 h-14"
                                            value={player.name}
                                            required
                                            placeholder={'player : '+parseInt(index+1)}
                                            onChange={(event) => nameHandler(event.target.value, index)}
                                        />)
                                    )}
                                </div>
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => showModalHandler(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>

    );
}

export default PlayerNamesModal;
