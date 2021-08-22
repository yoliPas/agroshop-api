const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.MONGODB_URI, {
   useNewUrlParser:true,
   useUnifiedTopology:true
})
.then(db=>console.log("db conected"))
.catch(error=> console.log(error));




