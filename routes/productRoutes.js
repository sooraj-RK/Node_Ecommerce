import  express  from "express";
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'


const productRouter = express.Router();

productRouter.post('/add', async (req, res) => {
    try {
        const {id, name, price, quantity } = req.body;
        const newProduct = new Product({id, name, price, quantity });
        await newProduct.save();
        res.status(201).json(newProduct);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

// productRouter.post(
//     '/',
//     expressAsyncHandler(async (req, res) => {
//       const newProduct = new Product({
//         name:'sample name',
//         slug:'sample-name',
//         price:'0',
//         stock:'0'
//       });
//       const product = await newProduct.save();
//       res.send({ message: 'Product Created', product });
//     })
//   );


productRouter.get('/all', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  export default productRouter;