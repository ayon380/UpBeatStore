import Product from "../../../models/Product";
import connectDB from "../../../middleware/mongoose";
const handler = async (req, res) => {
    try {
        let products = await Product.find();
        let p = {}
        for (let item of products) {
            if (item.title in p) {
                if (!p[item.title].color.includes(item.color) && item.availQ > 0) {
                    p[item.title].color.push(item.color)
                }
                if (!p[item.title].size.includes(item.size) && item.availQ > 0) {
                    p[item.title].size.push(item.size)
                }
            } else {
                p[item.title] = JSON.parse(JSON.stringify(item))
                if (item.availQ > 0) {
                    p[item.title].color = [item.color]
                    p[item.title].size = [item.size]
                }
            }
        }

        res.status(200).json({ p })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
        console.log(err);
    }
}
export default connectDB(handler);
