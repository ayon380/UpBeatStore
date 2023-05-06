const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true ,unique: true},
    description: { type: String, required: true },
    category: { type: String, required: true },
    variant: { type: String},
    price: { type: Number, required: true },
    status: { type: String, required: true, default: "pending" }
}, { timestamps: true });
mongoose.models = {};
export default mongoose.model( 'Product', ProductSchema);