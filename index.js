require('dotenv').config();

const express = require('express');
const app = express();
  
//connect to Database
const connectDB = require('./DB/connect');

// routers
const customerroute = require('./route/customer');
const productroute = require('./route/product');
const orderroute = require('./route/order');
const cardroute = require('./route/card');
const aggregationroute = require('./route/aggregation');






app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// routes
app.use('/customer', customerroute);
app.use('/product', productroute);
app.use('/order', orderroute);
app.use('/card', cardroute);
app.use('/aggregation', aggregationroute);




const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`DB connected at ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();