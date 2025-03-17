import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

let reservas = [];

app.post('/reservas', (req, res) => {
    const reserva = req.body;
    reservas.push(reserva);
    res.status(201).send('Reserva recebida com sucesso!');
});

app.get('/reservas', (req, res) => {
    res.json(reservas);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
