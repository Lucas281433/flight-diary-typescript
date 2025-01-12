import express from 'express';
import diaryRouter from './routes/diaries';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('Some pinged here');
    res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});