'use client'
import { useState } from 'react';
import { menuData } from './data';
import styles from './style.module.scss';
import Image from 'next/image';
import CoffeeIcon from '/public/images/ratings/rating-icon.png'

export default function Landing() {
    const menu__images = menuData.map(item => item.image);
    const menu__name = menuData.map(item => item.name);
    const menu__description = menuData.map(item => item.description);
    const menu__category = menuData.map(item => item.category);
    const menu__price = menuData.map(item => item.price);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedSort, setSelectedSort] = useState(''); 
    const [cart, setCart] = useState([]);
    const [hoveredRating, setHoveredRating] = useState(null);
    const [alertShown, setAlertShown] = useState(false);

    const handleFilterChange = (e) => { setSelectedFilter(e.target.value); };
    const handleSortChange = (e) => { setSelectedSort(e.target.value); };

    const addToCart = (product) => {
        if (!alertShown) {
            alert("Item has been added. Scroll down to see cart");
            setAlertShown(true);
        }
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            setCart(cart.map(item => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item));
        } 
        else {
            setCart([...cart, { ...product, quantity: 1, rating: 0 }]); //rating is 0 by default
        }
    };

    // updating the quantity
    const updateQuantity = (productName, quantity) => { 
        setCart(cart.map(item => item.name === productName ? { ...item, quantity } : item)); 
    };

    // removing products in the cart
    const removeFromCart = (productName) => { 
        setCart(cart.filter(item => item.name !== productName)); 
    };

    // for the update rating
    const updateRating = (productName, rating) => { 
        setCart(cart.map(item => item.name === productName ? { ...item, rating } : item)); 
    };
    
    const filteredMenu = menuData
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

        const handleCheckout = async () => {
            alert("Order has been processed!")
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
                            <Image src={product.image} className={styles.image} alt={product.name} quality={75} priority width={product.width} height={product.height} />
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
                                            <Image 
                                                key={value} 
                                                src={CoffeeIcon} 
                                                alt={`${value} coffee rating`} 
                                                width={30} 
                                                height={30} 
                                                className={`${styles.rating__icon} ${value <= (item.hoveredRating !== null ? item.hoveredRating : item.rating) ? styles.active : ''}`} 
                                                onMouseEnter={() => setCart(cart.map(i => i.name === item.name ? { ...i, hoveredRating: value } : i))} 
                                                onMouseLeave={() => setCart(cart.map(i => i.name === item.name ? { ...i, hoveredRating: null } : i))} 
                                                onClick={() => updateRating(item.name, value)} 
                                            />
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
