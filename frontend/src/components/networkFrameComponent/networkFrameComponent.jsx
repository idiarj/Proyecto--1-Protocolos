import { useState } from 'react';
import './networkFrameComponent.css';
import { frameOptions } from '../../CONSTANTS/protocolsINFO.js';

export function NetworkFrameComponent() {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [hoveredDescription, setHoveredDescription] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleMouseEnter = (description) => {
        setHoveredDescription(description);
    };

    const handleMouseLeave = () => {
        setHoveredDescription('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log()
        console.log('Selected Option:', selectedOption);
        console.log('Input Value:', inputValue);
    };

    return (
        <div className="network-frame-container">
            <form className='network-frame' onSubmit={handleSubmit}>
                <div>init</div>
                <select value={selectedOption} onChange={handleSelectChange}>
                    {frameOptions.map((option, index) => (
                        <option
                            key={index}
                            value={option.name}
                            onMouseEnter={() => handleMouseEnter(option.description)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {option.name}
                        </option>
                    ))}
                </select>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <div>endData</div>
                <div>close</div>
                <button type="submit">Submit</button>
            </form>
            {hoveredDescription && (
                <div className="description-tooltip">
                    {hoveredDescription}
                </div>
            )}
        </div>
    );
}