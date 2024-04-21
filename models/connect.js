const mongoose = require('mongoose');

exports.mongoconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("mongodb is connected");

    }
    catch(error) {
        console.log(error.message);
    }
}
