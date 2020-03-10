const mongoose = require('mongoose');
const kittenDB = require('./kitten_db')(mongoose);
const url = process.env.MONGO_URL || 'mongodb://localhost/kitten_db';

// Make the connection.
// This will be shared between requests as long as the container is running.
// https://aws.amazon.com/blogs/compute/container-reuse-in-lambda/
const connect = async () => await mongoose.connect(url, {
    bufferCommands: false,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true});
connect().then(_ => console.log("Connected"));

// The actual request handler.
export async function handler(event, context) {
    // Don't wait for everything to finish. Just return this callback.
    context.callbackWaitsForEmptyEventLoop = false;

    await kittenDB.bootstrap();

    return {
        statusCode: 200,
        body: JSON.stringify({msg: "Kittens have been bootstrapped."})
    };
}