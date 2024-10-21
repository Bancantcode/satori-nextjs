import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Menu1 from '/public/images/menu/1.webp';
import Menu2 from '/public/images/menu/2.webp';
import Menu3 from '/public/images/menu/3.webp';
import Menu4 from '/public/images/menu/4.webp';
import Menu5 from '/public/images/menu/5.webp';
import Menu6 from '/public/images/menu/6.webp';
import Menu7 from '/public/images/menu/7.webp';
import Menu8 from '/public/images/menu/8.webp';
import Menu9 from '/public/images/menu/9.webp';
import Menu10 from '/public/images/menu/10.webp';
import CoffeeIcon from '/public/images/ratings/rating-icon.png';

export default function Landing() {
    const menu__images = [Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7, Menu8, Menu9, Menu10];
    const menu__name = [
        'Satori Set',
        'Amai Latte',
        'Gishiki Matcha',
        'Amai Latte',
        'Cappuccino',
        'Usuchi Matcha',
        'Latte',
        'Cappuccino',
        'Cortado',
        'Conical Brewer',
    ];
    const menu__description = [
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic',
        // 'Hario Switch / Aeropress (Pour-over)',
        // 'Single shot espresso + 3oz (Espresso)',
        // 'Single shot (with complimentary Rosquillos) (Espresso)',
        // '(Hot / Iced / Blended) (Espresso)',
        // '(Hot / Iced) + Syrup',
        // 'Frozen Beans (Espresso & Milk based)',
        // 'Kyoto Tonic (Pour-over)',
        // '(Hot / Iced) + Syrup',
        // 'Origami (Hot / Iced) (Pour-over)',
    ];

    const menu__category = [
        'signature',
        'pour-over',
        'espresso',
        'espresso',
        'espresso',
        'matcha',
        'milk-based',
        'pour-over',
        'matcha',
        'pour-over'
    ];

    const menu__price = ["465.00", "300.00", "390.00", "290.00", "225.00", "270.00", "330.00", "300.00", "205.00", "300.00"];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedSort, setSelectedSort] = useState(''); 
    const [cart, setCart] = useState([]);

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    };


    const addToCart = (product) => {
        alert("Product added. Scroll down to see cart")
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            setCart(cart.map(item => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item));
        } 
        else {
            setCart([...cart, { ...product, quantity: 1, rating: 0 }]); // rating is 0 by default
        }
    };

    const updateQuantity = (productName, quantity) => {
        setCart(cart.map(item => item.name === productName ? { ...item, quantity } : item)); 
    };

    const removeFromCart = (productName) => {
        setCart(cart.filter(item => item.name !== productName));
    };

    const updateRating = (productName, rating) => {
        setCart(cart.map(item => item.name === productName ? { ...item, rating } : item));
    };

    const filteredMenu = menu__name.map((name, index) => ({
        image: menu__images[index],
        name,
        description: menu__description[index],
        category: menu__category[index],
        price: menu__price[index]
    }))
    .filter((product) => {
        const isSearchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const isFilterMatch = selectedFilter ? product.category === selectedFilter : true;
        
        return isSearchMatch && isFilterMatch;
    })
    .sort((a, b) => {
        if (selectedSort === 'high-to-low') {
            return b.price - a.price;
        }
        if (selectedSort === 'low-to-high') {
            return a.price - b.price;
        }
        return 0;
    });

    const handleCheckout = () => {
        cart.forEach(item => {
            console.log(`Product: ${item.name}, Rating: ${item.rating}, Quantity: ${item.quantity}, Price: ₱${item.price * item.quantity}`);
        });
        alert("Your order has been approved!!");
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What we offer</h1>

            <div className={styles.interfaces}>
                <input type="text" className={styles.search__input} placeholder="SEARCH" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <div className={styles.dropdown__container}>
                    <select id="filter" className={styles.dropdown} value={selectedFilter} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="signature">Signature</option>
                        <option value="espresso">Espresso</option>
                        <option value="pour-over">Pour Over</option>
                        <option value="milk-based">Milk Based</option>
                        <option value="matcha">Matcha</option>
                    </select>
                    <select id="sort" className={styles.dropdown} value={selectedSort} onChange={handleSortChange}>
                        <option value="">Sort by</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className={styles.offers}>
                {
                    filteredMenu.map((product, index) => (
                        <div className={styles.offer__container} key={`l_${index}`}>
                            <Image src={product.image} className={styles.image} alt={product.name} quality={75} priority placeholder="blur" />
                            <div className={styles.offer__info}>
                                <h2 className={styles.offer__name}>{product.name}</h2>
                                <p className={styles.offer__description}>{product.description}</p>
                                <p className={styles.offer__price}><span className={styles.highlight}>₱{product.price}</span></p>
                                <button className={styles.add__item} onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {cart.length > 0 && (
                <div className={styles.cart}>
                    <h2 className={styles.cart__name}>Cart</h2>
                    <table className={styles.cart__table}>
                        <thead className={styles.cart__header}>
                            <tr>
                                <th className={styles.table__header}>Product</th>
                                <th className={styles.table__header}>Quantity</th>
                                <th className={styles.table__header}>Price</th>
                                <th className={styles.table__header}>Rating</th>
                                <th className={styles.table__header}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.name}>
                                    <td className={styles.table__data}>{item.name}</td>
                                    <td className={styles.table__data}><input className={styles.item__quantity} type="number" value={item.quantity} min="1" onChange={(e) => updateQuantity(item.name, parseInt(e.target.value, 10))} /></td>
                                    <td className={styles.table__data}>₱{item.price * item.quantity}</td>
                                    <td className={styles.table__data}>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <Image key={value} src={CoffeeIcon} alt={`${value} coffee rating`} width={30} height={30} className={`${styles.rating__icon} ${value <= item.rating ? styles.active : ''}`} onClick={() => updateRating(item.name, value)} />
                                        ))}
                                    </td>
                                    <td className={styles.table__data}>
                                        <button className={styles.remove__item} onClick={() => removeFromCart(item.name)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.cartTotal}>
                        <p className={styles.total__price}>Total: ₱{totalPrice}</p>
                        <button className={styles.checkout}><a onClick={handleCheckout} href="/menu">Checkout</a></button>
                    </div>
                </div>
            )}
        </div>
    );
}
