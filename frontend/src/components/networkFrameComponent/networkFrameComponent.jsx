import { useState } from 'react';
import './networkFrameComponent.css';

export function NetworkFrameComponent() {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Option:', selectedOption);
        console.log('Input Value:', inputValue);
    };

    return (
        <form className='network-frame' onSubmit={handleSubmit}>
            <div>init</div>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="Save">Save</option>
                <option value="notSave">not Save</option>
            </select>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <div>endData</div>
            <div>close</div>
            <button type="submit">Submit</button>
        </form>
    );
}