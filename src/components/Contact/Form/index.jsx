import { useState } from 'react';
import styles from './style.module.scss';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [platform, setPlatform] = useState('email'); // Default to email

    const handleSubmit = (e) => {
        e.preventDefault();
        if (platform === 'email') {
            window.location.href = '/email-mockup';
        } 
        else {
            window.location.href = '/social-media-mockup';
        }
    };

    return (
        <div className={styles.contactUs}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                    <option value="email">Email Marketing</option>
                    <option value="social-media">Social Media Marketing</option>
                </select>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
