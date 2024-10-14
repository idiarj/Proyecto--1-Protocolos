import { useState } from 'react';
import './App.css';
import {CardComponent} from './components/cardComponent/cardComponent.jsx';
import {NetworkFrameComponent} from './components/networkFrameComponent/networkFrameComponent.jsx';

 function App() {
    const [showNetworkFrame, setShowNetworkFrame] = useState(false);

    const handleProtocolSelect = (protocol) => {
        console.log(`Selected protocol: ${protocol}`);
        setShowNetworkFrame(true);
    };

    return (
        <div className="App">
            <CardComponent onProtocolSelect={handleProtocolSelect} />
            {showNetworkFrame && <NetworkFrameComponent />}
        </div>
    );
}

export default App;