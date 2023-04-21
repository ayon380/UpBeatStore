import Product from "../../../models/Product";
import connectDB from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            for (let i = 0; i < req.body.length; i++) {
                let p = new Product({
                    title: req.body[i].title,
                    slug: req.body[i].slug,
                    description: req.body[i].description,
                    img: req.body[i].img,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    price: req.body[i].price,
                    availQ: req.body[i].availQ,
                });
                await p.save()
            }

            res.status(200).json({ message: "Product added successfully" })
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
