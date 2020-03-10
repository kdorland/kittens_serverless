const mongoose = require('mongoose');
const kittenDB = require('./kitten_db')(mongoose);

export async function handler(event, context) {
    const url = (process.env.MONGO_URL || 'mongodb://localhost/kitten_db');
    await mongoose.connect(url, {
        bufferCommands: false,
        bufferMaxEntries: 0,
        useNewUrlParser: true,
        useUnifiedTopology: true});
    const kittens = await kittenDB.getKittens();
    console.log("kittens", kittens);
    return {
        statusCode: 200,
        body: JSON.stringify(kittens)
    };
}