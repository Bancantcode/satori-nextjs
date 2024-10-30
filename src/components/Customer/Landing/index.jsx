import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const index = () => {
  const [customerMessages, setCustomerMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/customer-messages');
      const data = await response.json();
      setCustomerMessages(data.customerMessages);
    };
    fetchMessages();
  }, []);

  const filteredMessages = customerMessages.filter(message => 
    message.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.contactNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.timestamp.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.container}>
        <h1>CUSTOMER DETAILS</h1>
        <div className={styles.interfaces}>
            <input type="text" className={styles.search__input} placeholder="SEARCH" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        {filteredMessages.length === 0 ? (
          <p>No messages available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email Address</th>
                <th>Message</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map((message, index) => (
                <tr key={index}>
                  <td>{message.name}</td>
                  <td>{message.contactNumber}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                  <td>{message.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </section>
  );
}

export default index;