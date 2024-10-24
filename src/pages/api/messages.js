// src/pages/api/messages.js
export default function handler(req, res) {
    // Sample data
    const messages = [
        { name: 'John Doe', email: 'john@example.com', message: 'Hello!', dateSent: new Date() },
        // ... more messages
    ];

    if (req.method === 'GET') {
        res.status(200).json(messages);
    } 
    else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
