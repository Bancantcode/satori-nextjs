'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import Leadership1 from '/public/images/leaderboard/leadership1.webp';
import Leadership2 from '/public/images/leaderboard/leadership2.webp';
import Leadership3 from '/public/images/leaderboard/leadership3.webp';
import Leadership4 from '/public/images/leaderboard/leadership4.webp';
import Leadership5 from '/public/images/leaderboard/leadership5.webp';
import Leadership6 from '/public/images/leaderboard/leadership6.webp';

const content = [
  {},
  { src: Leadership4, alt: "Leadership1", name: "Yuri Brunet", role: "Co-Founder" },
  { src: Leadership1, alt: "Leadership2", name: "Amber Brunet", role: "Barista" },
  { src: Leadership2, alt: "Leadership4", name: "Maximiliam Yarz", role: "Co-Founder" },
  { src: Leadership6, alt: "Leadership5", name: "Ambroise Soule", role: "Barista" },
  { src: Leadership3, alt: "Leadership6", name: "Lily Traverse", role: "Co-Founder" },
  {},
  { src: Leadership5, alt: "Leadership6", name: "Bruno Fabian", role: "Co-Founder" },
];

function Leadership() {

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <span>Leadership</span>
        <span>Board</span>
      </div>
      <p className={styles.description}>A team led by professionals from the entertainment and advertising world, merging skills of both industries together.</p>
      <div className={styles.leadership__container}>
        {content.map((item, index) => (
          <div key={index} className={styles.leadership__item}>
            {item.src ? (
              <>
                <Image src={item.src} alt={item.alt} className={styles.leadership__image} />
                <div className={styles.leadership__name}>{item.name}</div>
                <div className={styles.leadership__role}>{item.role}</div>
              </>
            ) : (
              <div className={styles.empty}></div> // Empty cell
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;
