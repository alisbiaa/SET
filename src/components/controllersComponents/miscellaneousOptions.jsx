import React from 'react';

function MiscellaneousOptions({handleMiscellaneousOptions}) {
    return (
        <fieldset className="w-9/12 mt-6 text-lg">
            <legend className="text-xl font-bold mb-2"> Miscellaneous options :</legend>

            <input type="checkbox"
                   name="miscellaneousOption"
                   value="setChecker"
                   onChange={event => handleMiscellaneousOptions(event.target.value)}/> <label> SET checker </label>
            <br/>
            <input type="checkbox"
                   name="miscellaneousOption"
                   value="setShower"
                   onChange={event => handleMiscellaneousOptions(event.target.value)}/> <label> SET shower </label>
            <br/>
            <input type="checkbox"
                   name="miscellaneousOption"
                   value="pull3Cards"
                   onChange={event => handleMiscellaneousOptions(event.target.value)}/> <label> Pull 3 cards </label> <br/>
        </fieldset>
    );
}

export default MiscellaneousOptions;