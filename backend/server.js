import express from 'express';
import mongoose from 'mongoose';
import Messages from './Messages.js';

// Config
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// DB Config
const connection_url = 'mongodb+srv://admin:K57HRmKvLqWoPQS2@cluster0.ueg2j.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.get('/', (req,res)=>res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});


app.post('/messages/new', (req, res) => {
    const message = req.body;

    Messages.create(message, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } 
        else {
            res.status(201).send(data);
        }
    });
});

// Listen
app.listen(port, ()=>console.log('Listening on localhost:${port}'));