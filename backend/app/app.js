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
    
    const { serverType } = req.body;
    console.log(serverType);
    console.log('entre aqui')
    await ProtocolServer.start({ serverType });
    res.status(200).json({ message: `server ${serverType} started` });

});

app.post('/stop-server', async (req, res) => {

    res.status(200).json({ message: 'server stopped' });
});

app.post('/start-client', (req, res) => {});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});