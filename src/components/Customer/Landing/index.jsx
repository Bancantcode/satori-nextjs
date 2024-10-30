import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

const index = () => {
  const [customerMessages, setCustomerMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/customer-messages');
      const data = await response.json();
      setCustomerMessages(data.customerMessages);
    };
    fetchMessages();
  }, []);

  return (
    <section className={styles.container}>
        <h1>CUSTOMER DETAILS</h1>
        {customerMessages.length === 0 ? (
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
              {customerMessages.map((message, index) => (
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