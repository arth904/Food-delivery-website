const express = require('express')
const mongodb = require('./db')
const app = express();

const port = 5000;

mongodb();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://food-delivery-website-opal.vercel.app");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})