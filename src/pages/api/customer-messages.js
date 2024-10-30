let customerMessages = [
    {
        name: "bry",
        contactNumber: "09282977154",
        email: "santiagobryan@gmail.com",
        message: "Hello",
        platform: "email",
        timestamp: "October 28, 2024 at 1:00 AM",
    },
    {
        name: "alice",
        contactNumber: "09123456789",
        email: "alice@example.com",
        message: "Hi there!",
        platform: "sms",
        timestamp: "October 28, 2024 at 2:00 AM",
    },
    {
        name: "john",
        contactNumber: "09198765432",
        email: "john@example.com",
        message: "Good morning!",
        platform: "whatsapp",
        timestamp: "October 28, 2024 at 3:00 AM",
    },
    {
        name: "jane",
        contactNumber: "09223334455",
        email: "jane@example.com",
        message: "How are you?",
        platform: "email",
        timestamp: "October 28, 2024 at 4:00 AM",
    },
    {
        name: "mike",
        contactNumber: "09112233445",
        email: "mike@example.com",
        message: "Let's meet up!",
        platform: "sms",
        timestamp: "October 28, 2024 at 5:00 AM",
    },
    {
        name: "sara",
        contactNumber: "09224455667",
        email: "sara@example.com",
        message: "See you soon!",
        platform: "whatsapp",
        timestamp: "October 24, 2024 at 6:00 AM",
    },
    {
        name: "tom",
        contactNumber: "09113334455",
        email: "tom@example.com",
        message: "Thanks for your help!",
        platform: "email",
        timestamp: "October 15, 2024 at 7:00 AM",
    },
    {
        name: "lisa",
        contactNumber: "09235566778",
        email: "lisa@example.com",
        message: "Happy to assist!",
        platform: "sms",
        timestamp: "October 23, 2024 at 8:00 AM",
    },
    {
        name: "dave",
        contactNumber: "09114455667",
        email: "dave@example.com",
        message: "Looking forward to it!",
        platform: "whatsapp",
        timestamp: "October 25, 2024 at 9:00 AM",
    },
    {
        name: "emma",
        contactNumber: "09246677889",
        email: "emma@example.com",
        message: "Have a great day!",
        platform: "email",
        timestamp: "October 24, 2024 at 10:00 AM",
    }
];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, contactNumber, email, message, platform, timestamp } = req.body;
        customerMessages.push({ name, contactNumber, email, message, platform, timestamp });
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

