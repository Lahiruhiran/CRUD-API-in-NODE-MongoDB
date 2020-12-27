const express = require('express');

const mongoose = require('mongoose');

const {MONGO_URI} = require('./DbConnection/server')
const ProductRoutes = require('./routes/api/product')
const app = express();

app.use(express.json())

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false})
.then(()=>console.log("Connected...."))
.catch(err => console.log(err))

app.use('/api/products',ProductRoutes);

const Port = process.env.PORT || 5000;
app.listen(Port, ()=> console.log(`Server run at port ${Port}`))