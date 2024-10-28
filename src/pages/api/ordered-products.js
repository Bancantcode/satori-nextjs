let orders = []; // container for the ordered products

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { order } = req.body;
        orders.push(order);
        res.status(200).json({ message: 'Order received' });
    } 
    else if (req.method === 'GET') {
        res.status(200).json({ orders });
    } 
    else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
