const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        var uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.43q0b.mongodb.net/${process.env.MONGO_DATABSE}?retryWrites=true&w=majority`
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        }, (err => {
            if (err) {
                console.log("Connection to database failed ")
                console.log(err)
            }
        }))
        console.log("Connection to database success ...")
    } catch (error) {
        console.log("Error")
    }
}
module.exports = connectDb;







//const mongoose = require('mongoose');
//
//module.exports = () => {
//  mongoose
//    .connect(process.env.MONGODB_URI, {
//      dbName: process.env.DB_NAME,
//      user: process.env.DB_USER,
//      pass: process.env.DB_PASS,
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//      useFindAndModify: false
//    })
//    .then(() => {
//      console.log('Mongodb connected....');
//    })
//    .catch(err => console.log(err.message));
//
//  mongoose.connection.on('connected', () => {
//    console.log('Mongoose connected to db...');
//  });
//
//  mongoose.connection.on('error', err => {
//    console.log(err.message);
//  });
//
//  mongoose.connection.on('disconnected', () => {
//    console.log('Mongoose connection is disconnected...');
//  });
//
//  process.on('SIGINT', () => {
//    mongoose.connection.close(() => {
//      console.log(
//        'Mongoose connection is disconnected due to app termination...'
//      );
//      process.exit(0);
//    });
//  });
//};
