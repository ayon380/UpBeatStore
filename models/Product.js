const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true ,unique: true},
    description: { type: String, required: true },
    img: { type: String,required: true},
    category: { type: String, required: true },
    size: { type: String},
    price: { type: Number, required: true },
    color: { type: String},
    status: { type: String, required: true, default: "pending" },
    availQ:{ type: Number, required: true}
}, { timestamps: true });
mongoose.models = {};
export default mongoose.model( 'Product', ProductSchema);