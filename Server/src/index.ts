import express from 'express';
import diaryRouter from './routes/diaries';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

const PORT = process.env.PORT;

app.get('/ping', (_req, res) => {
    console.log('Some pinged here');
    res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});