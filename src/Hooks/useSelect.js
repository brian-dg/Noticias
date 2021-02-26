import React, {useState} from 'react';

const useSelect = (stateInitial,options ) => { 
    // state del cuestom Hook
    const [state, actualizarState] = useState(stateInitial);

    const SelectNoticias = () => (
        <select className="browser-default"
        value= {state}
        onChange= {e=>actualizarState(e.target.value)}>
            {options.map(option => (
                <option key={option.value} value= {option.value}>{option.label}</option>
            ))}
        </select>

    )
        return [state,SelectNoticias];
};

export default useSelect;