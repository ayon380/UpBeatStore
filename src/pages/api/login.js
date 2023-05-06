import User from "../../../models/user";
import connectDB from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            console.log(req.body);
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                if (user.password === req.body.password) {
                    res.status(200).json({ message: "User Logged in successfully" })
                }
                else {
                    res.status(400).json({ message: "Invalid Email ID or Password" })
                }   

            }
            else {
                res.status(400).json({ message: "User not found" })
            }
        } catch (err) {
            res.status(400).json({ message: err.message })
            console.log(err);
        }

    }
    else {
        res.status(400).json({ message: "Invalid Request" })
    }

}
export default connectDB(handler);
