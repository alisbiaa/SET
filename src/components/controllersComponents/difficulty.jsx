import React from 'react';

function Difficulty({handleDifficulty}) {
    return (
        <fieldset className="w-9/12  mt-6 text-lg">
            <legend className="text-xl font-bold mb-2"> Difficulty :</legend>
            <input type="radio"
                   name="difficulty"
                   value="starter"
                   onChange={e => handleDifficulty(e)}
            /> <label> Starter </label> <br/>
            <input type="radio"
                   name="difficulty"
                   value="advanced"
                   onChange={e => handleDifficulty(e)}
            /> <label> Advanced </label> <br/>


        </fieldset>
    );
}

export default Difficulty;