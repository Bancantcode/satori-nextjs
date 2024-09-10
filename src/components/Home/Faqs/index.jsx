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
            question: "What makes Satori Specialty Coffee different from other coffee brands?",
            answer: "What sets us apart is our relentless dedication to sourcing the highest-quality beans from renowned coffee-growing regions around the world. Our expert roasters carefully craft each batch to bring out the unique flavors and aromas that define our specialty coffee. Beyond just great coffee, we focus on creating memorable moments for our customers, whether it's through a perfectly brewed cup in our cafe or a personalized experience when you order online. We believe that every sip of Satori coffee should be an exceptional experience that goes beyond the ordinary."
        },
        {
            question: "Where do you source your coffee beans from?",
            answer: "We take immense pride in the transparency of our sourcing process. Our coffee beans are meticulously selected from Ethiopia and Brazil, where sustainable farming practices and ethical standards are paramount. We prioritize direct relationships with farmers to ensure fair trade and quality control at every step. By sharing the origin of our beans, we invite you to connect with the story behind each cup, embracing a journey that begins at the source and culminates in the delightful experience you savor with every sip."
        },
        {
            question: "How do you ensure the freshness of your coffee?",
            answer: "Ensuring the freshness of our coffee is a top priority at Satori. We meticulously roast our coffee beans in small batches to maintain optimal flavor and aroma. Additionally, we package our coffee immediately after roasting, utilizing specialized techniques to preserve its freshness during storage and transportation. From bean to cup, we're committed to delivering an unparalleled coffee experience."
        },
        {
            question: "Do you offer any specialty drinks or unique flavor combinations?",
            answer: "At Satori, we take pride in crafting a diverse menu that caters to all tastes. In addition to our exceptional espresso, filter, and milk-based coffees, we also offer a selection of specialty drinks featuring unique flavor combinations that are sure to tantalize your taste buds. Whether you're craving a classic espresso or looking to explore something new and exciting, we have the perfect beverage to accompany our delicious pastries. Our menu is designed to delight and surprise, ensuring that every visit to Satori is a memorable experience."
        },
        {
            question: "What sets your coffee shop ambiance apart?",
            answer: "We believe ambiance is as important as the coffee itself. Our coffee shop offers a unique and inviting atmosphere that sets us apart. From the moment you step through our doors, you'll be enveloped in a warm and welcoming environment, designed to inspire relaxation and creativity. Our carefully curated decor, comfortable seating options, and soothing background music create the perfect backdrop for enjoying your favorite brew or pastry. Whether you're looking for a quiet space to work or a cozy spot to catch up with friends, our ambiance sets the stage for a truly memorable coffee experience."
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
