const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        // mongoDB connectin string
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;