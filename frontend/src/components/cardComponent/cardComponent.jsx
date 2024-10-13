import { useState } from 'react';
import PropTypes from 'prop-types';
import { constantsProtocolsINFO } from '../../CONSTANTS/protocolsINFO.js';

export function CardComponent() {
  const [selectedProtocol, setSelectedProtocol] = useState('');
  const [protocolDescription, setProtocolDescription] = useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProtocol(selectedValue);
    const selectedProtocolInfo = constantsProtocolsINFO.find(protocol => protocol.protocolName === selectedValue);
    setProtocolDescription(selectedProtocolInfo ? selectedProtocolInfo.description : '');
  };

  return (
    <div>
      <select onChange={handleChange}>
        {constantsProtocolsINFO.map((protocol, index) => (
          <option key={index} value={protocol.protocolName}>
            {protocol.protocolName}
          </option>
        ))}
      </select>
      {console.log(selectedProtocol)}
      <>
        {selectedProtocol ? (
          <div>
            <p>Selected Protocol: {selectedProtocol}</p>
            <p>Description: {protocolDescription}</p>
          </div>
        ) : (
          <p>Select a protocol</p>
        )}
      </>
    </div>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};