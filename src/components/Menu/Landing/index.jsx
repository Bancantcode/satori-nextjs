import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Feature2 from '../../../../public/images/feature2.webp';

export default function Landing() {
    const menu__images = [Feature2, Feature2, Feature2, Feature2, Feature2, Feature2, Feature2, Feature2, Feature2];
    const menu__name = [
        'Conical Brewer', 
        'Immersion Brewer', 
        'Espresso Duet', 
        'Espresso Side A & B', 
        'Amai Latte', 
        'Gishiki Matcha', 
        '*SATORI* 4 set of 3oz', 
        'Exclusive Beans', 
        'Regular Beans'
    ];
    const menu__description = [
        'Origami (Hot / Iced)', 
        'Hario Switch / Aeropress',
        'Single shot espresso + 3oz', 
        'Single shot (with complimentary Rosquillos)', 
        '(Hot / Iced / Blended)', 
        '(Hot / Iced) + Syrup', 
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic', 
        'Competitive Beans', 
        'Frozen Beans'
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    // Handle dropdown filter change
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    // Filter products based on search query or selected filter
    const filteredMenu = menu__name.map((name, index) => ({
        image: menu__images[index],
        name,
        description: menu__description[index]
    })).filter((product) => {
        const isSearchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const isFilterMatch = selectedFilter ? product.name.toLowerCase().includes(selectedFilter.toLowerCase()) : true;
        return isSearchMatch && isFilterMatch;
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What we offer</h1>

            {/* Search bar */}
            <input type="text" className={styles.searchInput}placeholder="SEARCH" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

            {/* Dropdown for filtering */}
            <div className={styles.dropdownContainer}>
                <label htmlFor="filter" className={styles.dropdownLabel}>Filter by:</label>
                <select id="filter" className={styles.dropdown} value={selectedFilter} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="brewer">Brewer</option>
                    <option value="espresso">Espresso</option>
                    <option value="matcha">Matcha</option>
                </select>
            </div>

            <div className={styles.offers}>
                {
                    filteredMenu.map((product, index) => (
                        <div className={styles.offer__container} key={`l_${index}`}>
                            <Image src={product.image} className={styles.image} alt={product.name} placeholder='blur' priority/>
                            <div className={styles.offer__info}>
                                <h2 className={styles.offer__name}>{product.name}</h2>
                                <p className={styles.offer__description}>{product.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
