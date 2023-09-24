import express from 'express';
import router from './router';

const app = express();

app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router());

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});