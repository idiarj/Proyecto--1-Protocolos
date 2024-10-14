import express from 'express';
import cors from 'cors';

import { ProtocolServer } from '../utils/ProtocolServer.js';
import { ProtocolClient } from '../utils/ProtocolClient.js';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    "origin": "http://localhost:5173",
    "credentials": true
}));

app.post('/start-server', async (req, res) => {
    try {
        const { serverType } = req.body;

        if (!serverType) {
            return res.status(400).json({ message: 'serverType is required' });
        }

        if (!['TCP', 'UDP'].includes(serverType)) {
            return res.status(400).json({ message: 'Invalid serverType' });
        }

        console.log(`Starting server of type: ${serverType}`);
        await ProtocolServer.start({ serverType });
        res.status(200).json({ message: `Server ${serverType} started` });
    } catch (e) {
        console.error(`Error starting server: ${e.message}`);
        res.status(500).json({ message: 'Error al ejecutar el servidor del protocolo', error: e.message });
    }
});

app.post('/stop-server', async (req, res) => {
    await ProtocolServer.kill();
    res.status(200).json({ message: 'server stopped' });
});

app.post('/start-client', async (req, res) => {
    try {
        const { clientType, data } = req.body;
        await ProtocolClient.start({clientType});
        res.status(200).json({ message: `the ${clientType} client was started` }); 
    } catch (error) {
        res.status(500).json({ message: 'Error al ejecutar el cliente del protocolo', error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});