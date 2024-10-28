let customerMessages = [];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { order } = req.body;
        customerMessages.push(order);
        res.status(200).json({ message: 'Message received' });
    } 
    else if (req.method === 'GET') {
        res.status(200).json({ customerMessages });
    } 
    else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

