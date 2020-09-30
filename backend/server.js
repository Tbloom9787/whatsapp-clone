import express from 'express';
import mongoose from 'mongoose';

// Config
const app = express();
const port = process.env.PORT || 8000;

// Middleware

// DB Config
const connection_url = 'mongodb+srv://admin:K57HRmKvLqWoPQS2@cluster0.ueg2j.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.get('/', (req,res)=>res.status(200).send('hello world'));

// Listen
app.listen(port, ()=>console.log('Listening on localhost:${port}'));