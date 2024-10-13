import express from 'express';
import cors from 'cors';
import { startServer } from '../utils/startServer.js';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    "origin": "http://localhost:5173",
    "credentials": true
}));

app.post('/start-server', (req, res) => {
    
    const { serverType } = req.body;
    console.log(serverType);
    console.log('entre aqui')
    startServer({ serverType });
    res.status(200).json({ message: `server ${serverType} started` });

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});