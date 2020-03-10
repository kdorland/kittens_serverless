const mongoose = require('mongoose');
const kittenDB = require('./kitten_db')(mongoose);

const url = (process.env.MONGO_URL || 'mongodb://localhost/kitten_db');
const connect = async () => await mongoose.connect(url, {
    bufferCommands: false,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true});
connect().then(_ => console.log("Connected"));

export async function handler(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;

    const kittens = await kittenDB.getKittens();
    console.log("kittens", kittens);

    return {
        statusCode: 200,
        body: JSON.stringify(kittens)
    };
}