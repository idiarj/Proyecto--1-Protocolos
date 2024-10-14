import { useState } from 'react';
import PropTypes from 'prop-types';
import './cardComponent.css';
import { constantsProtocolsINFO } from '../../CONSTANTS/protocolsINFO.js';

export const CardComponent = ({ onProtocolSelect }) => {
  const [selectedProtocol, setSelectedProtocol] = useState('');
  const [protocolDescription, setProtocolDescription] = useState('');
  const [connected, setConnected] = useState(false);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProtocol(selectedValue);
    const selectedProtocolInfo = constantsProtocolsINFO.find(protocol => protocol.protocolName === selectedValue);
    setProtocolDescription(selectedProtocolInfo ? selectedProtocolInfo.description : '');
    onProtocolSelect(selectedValue);
  };

  const handleProtocolConnection = async (protocol) => {
    try {
      console.log('Selected Protocol:', protocol);
      const response = await fetch('http://localhost:3000/start-server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverType: protocol }),
      });
      const data = await response.json();
      if(response.ok){
        setConnected(true);
        console.log(connected)
      }
      console.log(data);
    } catch (error) {
      console.error('error en la peticion http', error);
    }
  }

  const handleProtocolDisconnection = async () => {
    try {
      const response = await fetch('http://localhost:3000/stop-server', {
        method: 'POST',
      });
      const data = await response.json();
      if(response.ok){
        setConnected(false);
        console.log('desconectado del servidor del protocolo', selectedProtocol);
      }
      console.log(data);
    } catch (error) {
      console.error('error en la peticion http', error);
    }
  }

  return (
    <div className="card-container">
      <select onChange={handleChange}>
        {constantsProtocolsINFO.map((protocol, index) => (
          <option key={index} value={protocol.protocolName}>
            {protocol.protocolName}
          </option>
        ))}
      </select>
      {selectedProtocol && (
        <div>
          <p>{selectedProtocol}</p>
          <p>{protocolDescription}</p>
          {connected ? (
            <button onClick={handleProtocolDisconnection}>
              Desconectarse de {selectedProtocol}
            </button>
          ) : (
            <button onClick={() => handleProtocolConnection(selectedProtocol)}>
              Conectarse con {selectedProtocol}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

CardComponent.propTypes = {
  onProtocolSelect: PropTypes.func.isRequired,
};