import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    "origin": "http://localhost:5173",
    "credentials": true
}));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});