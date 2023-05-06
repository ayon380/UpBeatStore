import Product from "../../../models/Product";
import connectDB from "../../../middleware/mongoose";
const handler = async (req, res) => {
    try {
        let products = []
        if (req.method === "POST") {
            const { category } = req.body
            console.log(category);
            if (category === "all") {
                products = await Product.find({})
            }
            else {
                products =await Product.find({"category":category})
            }
        }
        res.status(200).json({ products: products })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
        console.log(err);
    }
}
export default connectDB(handler);
