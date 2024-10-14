import { useState } from 'react';
import { CardComponent } from './components/cardComponent/cardComponent.jsx';
import { NetworkFrameComponent } from './components/networkFrameComponent/networkFrameComponent.jsx';
import './App.css';

function App() {
  const [selectedProtocol, setSelectedProtocol] = useState('');

  const handleProtocolSelect = (protocol) => {
    setSelectedProtocol(protocol);
  };
  console.log(`${selectedProtocol} selected`);

  return (
    <>
      <CardComponent onProtocolSelect={handleProtocolSelect} />
      {selectedProtocol && <NetworkFrameComponent protocol={selectedProtocol} />}
    </>
  );
}

export default App;