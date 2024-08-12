import styles from './styles.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a className={styles.name} href="#">Satori</a>
            </div>
            <div className={styles.nav}>
                <div className={styles.nav__links}>
                    <a className={styles.el} href="#">About</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.nav__links}>
                    <a className={styles.el} href="#">Menu</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.nav__links}>
                    <a className={styles.el} href="#">Feature</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.nav__links}>
                    <a className={styles.el} href="#">Specials</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.nav__links}>
                    <a className={styles.el} href="#">Careers</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.nav__links}>
                    <a className={styles.el} href="#">Contact</a>
                    <div className={styles.indicator}></div>
                </div>
            </div>
            <div className={styles.cart}>
                <a href="#" className={styles.cart__button}>Cart</a>
            </div>
        </div>
    );
}

export default Header;