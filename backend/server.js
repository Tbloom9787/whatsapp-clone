import express from 'express';
import mongoose from 'mongoose';
import Pusher from "pusher";
import Messages from './Messages.js';

// Config
const app = express();
const port = process.env.PORT || 8000;

// Pusher message channel
var pusher = new Pusher({
    appId: '1083531',
    key: '952297ec76be6bbfc245',
    secret: '5c8795a65bf80b596aaf',
    cluster: 'us3',
    encrypted: true
});

// Middleware
app.use(express.json());

// DB Config
const connection_url = 'mongodb+srv://admin:K57HRmKvLqWoPQS2@cluster0.ueg2j.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("Database connected...");

    const msgCollection = db.collection('messageContent');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change);
    });
});

// Routes
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