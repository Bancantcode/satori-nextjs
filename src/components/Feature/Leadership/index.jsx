import styles from './style.module.scss';
import Leadership1 from '../../../../public/images/leadership1.webp'
import Leadership2 from '../../../../public/images/leadership2.webp'
import Leadership3 from '../../../../public/images/leadership3.webp'
import Leadership4 from '../../../../public/images/leadership4.webp'
import Leadership5 from '../../../../public/images/leadership5.webp'
import Leadership6 from '../../../../public/images/leadership6.webp'
import Link from 'next/link';

function Leadership() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Leadership board</div>
        <p className={styles.description}>A team led by professionals from the entertainment and advertising world, merging skills of both industries together.</p>
        <div className={styles.leadership__container}>
        </div>
    </div>
  )
}

export default Leadership