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
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            question: "How do you source your coffee beans?",
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            question: "Do you host any events or coffee tasting?",
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            question: "How do you source your coffee beans?",
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            question: "How do you source your coffee beans?",
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Satori FAQs</h1>
            <div className={styles.accordion}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faq__item}>
                        <button className={`${styles.faq__button} ${activeIndex === index ? styles.active : ''}`} onClick={() => handleToggle(index)}>
                            <span className={styles.faq__number}>0{index + 1}</span>
                            <span className={styles.faq__question}>{faq.question}</span>
                            <span className={styles.faq__toggle}>{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className={styles.faq__answer}>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
