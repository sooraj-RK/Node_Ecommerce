import Express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sessionMiddleware from './middleware/sessionMiddleware.js';
import productsRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
const app= Express();
dotenv.config();

app.use(sessionMiddleware);
mongoose.connect(process.env.MONGODB_URI)
.then(() =>{
  console.log('connected to db');
})
.catch((err) => {
  console.log(err.message);
});

app.use(bodyParser.json());
app.use(sessionMiddleware);

app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);
const port = process.env.PORT  || 5000;

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})