const mongoose = require('mongoose');
require('dotenv').config();

const ConectarBD =()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("Estamos conectados a mongo DB")    )
    .catch((err)=>console.log(err));
};

module.exports = ConectarBD;