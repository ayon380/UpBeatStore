const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
            productID: { type: String, required: true },
            quantity: { type: Number, required: true, default: 1 },
        }
    ],
    address: { type: String, required: true },
    status: { type: String, required: true, default: "pending" },
    amount: { type: Number, required: true },
}, { timestamps: true });
mongoose.models = {};
export default mongoose.model('Order', OrderSchema);