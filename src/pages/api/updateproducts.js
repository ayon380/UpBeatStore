import Product from "../../../models/Product";
import connectDB from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            for (let i = 0; i < req.body.length; i++) {
                let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i], { new: true });
            }

            res.status(200).json({ message: "Product Updated successfully" })
        } catch (err) {
            res.status(400).json({ message: err.message})
            console.log(err);
        }

    }
    else {
        res.status(400).json({ message: "Invalid Request" })
    }

}
export default connectDB(handler);
