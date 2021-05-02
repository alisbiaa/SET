import React from 'react';
import Fade from "react-reveal/Fade";

function SvgComponent({card,handleSelectingCard,selected}) {

    return (
        <Fade top>
            <div
                className={`rounded-lg flex flex-wrap content-center justify-center cursor-pointer`}
            >
                <img className={`h-full  ${selected ? ' border-2 border-red-500' : ''}` }
                     src={`${window.location.origin}/SET/svgs/${card.num}-${card.shape}-${card.shade}-${card.clr}.svg`}
                     alt={`${card.num}-${card.shape}-${card.shade}-${card.clr}`}
                     onClick={() => {
                         handleSelectingCard(card);
                     }}

                />
            </div>
        </Fade>

    );
}

export default SvgComponent;