const express = require ('express');
const app = express();

//settings
app.set("port", 5000);
app.use(express.json());

//routes
app.use('/api', require('./routes/products.routes'));




module.exports=app;