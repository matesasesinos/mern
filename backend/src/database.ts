import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

(async () => {
    try {
        const mongooseOption: ConnectOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASS
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOption);
        console.log('database is connected to: ', db.connection.name);
    } catch (err) {
        console.log(err);
    }
})()