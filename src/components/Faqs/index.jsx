'use client'
import { useState } from 'react';
import styles from './style.module.scss';

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Where is Satori located?",
            answer: "Satori is located in CEO Flats, Jupiter St. Bel-Air, Makati City."
        },
        {
            question: "How do you source your coffee beans?",
            answer: "We source our coffee beans using sustainable and direct trade methods."
        },
        {
            question: "Do you host any events or coffee tasting?",
            answer: "Yes, we regularly host events and coffee tasting sessions. Check our website for upcoming events."
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Satori FAQs</h1>
            <div className={styles.accordion}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faq__item}>
                        <button className={`${styles.faq__button} ${activeIndex === index ? styles.active : ''}`} onClick={() => handleToggle(index)}>
                            <span className={styles.faq__number}>{index + 1}</span>
                            <span className={styles.faq__question}>{faq.question}</span>
                            <span className={styles.faq__toggle}>{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className={styles.faq__answer}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
