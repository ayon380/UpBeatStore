import Product from "../../../models/Product";
export default async function handler(req, res) {

  if (req.method == 'POST') {
    const { title } = req.body
    // console.log(title);
    let products = await Product.find();
    let p = {}
    for (let item of products) {
      if (item.title == title) {
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
    }

    if (p) {
      return res.status(200).json({ p })
    }
    else {
      return res.status(200).json({ message: 'failure' })
    }
  }
  else { return res.status(405).json({ message: 'Method not allowed' }) }
}
