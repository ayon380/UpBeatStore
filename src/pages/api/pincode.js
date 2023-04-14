export default async function handler(req, res) {

  if (req.method == 'POST') {
    const { pincode } = req.body
    console.log(pincode);
    let pins = ["700081", "700082","700083"];
    if (pins.includes(pincode)) {
      return res.status(200).json({ message: 'success' })
    }
    else {
      return res.status(200).json({ message: 'failure' })
    }
  }
  else { return res.status(405).json({ message: 'Method not allowed' }) }
}
