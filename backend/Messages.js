import mongoose from 'mongoose';

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: String
});

export default mongoose.model('messagContent', whatsappSchema);
