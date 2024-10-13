import { useState } from 'react';
import { CardComponent } from './components/cardComponent/cardComponent.jsx';
import { NetworkFrameComponent } from './components/networkFrameComponent/networkFrameComponent.jsx';
import './App.css';

function App() {
  const [selectedProtocol, setSelectedProtocol] = useState('');

  const handleProtocolSelect = (protocol) => {
    setSelectedProtocol(protocol);
  };

  return (
    <>
      <CardComponent onProtocolSelect={handleProtocolSelect} />
      {selectedProtocol && <NetworkFrameComponent />}
    </>
  );
}

export default App;