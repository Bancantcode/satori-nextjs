import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Menu1 from '../../../../public/images/menu/SatoriSet.webp';
import Menu2 from '../../../../public/images/menu/ColombiaTolimaGuavaBanana.webp';
import Menu3 from '../../../../public/images/menu/RwandaGicumbiKarisimbi.webp';
import Menu4 from '../../../../public/images/menu/EthiopiaBankoTaratu.webp';
import Menu5 from '../../../../public/images/menu/EthiopiaYirgachefeBankoTaratu.webp';
import Menu6 from '../../../../public/images/menu/GishikiMatcha.webp';
import Menu7 from '../../../../public/images/menu/HondurasOcotepeque.webp';
import Menu8 from '../../../../public/images/menu/KyotoTonic.webp';
import Menu9 from '../../../../public/images/menu/UsuchaMatcha.webp';
import Menu10 from '../../../../public/images/menu/ConicalBrewer.webp';

export default function Landing() {
    const menu__images = [ Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7, Menu8, Menu9, Menu10 ];
    const menu__name = [
        '*SATORI* 4 set of 3oz',
        'Colombia Tolima Guava Banana',
        'Rwanda Gicumbi Karisimbi',
        'Ethiopia Banko Taratu',
        'Ethiopia Yirgachef Banko Taratu',
        'Gishiki Matcha',
        'Honduras Ocotepeque',
        'Guatamela Genuine',
        'Usucha Matcha',
        'Conical Brewer'
    ];
    const menu__description = [
        'Tokyo Drip / Cold Brew / Tokyo Drip Tonic', 
        'Hario Switch / Aeropress (Pour-over)',
        'Single shot espresso + 3oz (Espresso)', 
        'Single shot (with complimentary Rosquillos) (Espresso)', 
        '(Hot / Iced / Blended) (Espresso)', 
        '(Hot / Iced) + Syrup', 
        'Frozen Beans (Espresso & Milk based)',
        'Kyoto Tonic (Pour-over)', 
        '(Hot / Iced) + Syrup', 
        'Origami (Hot / Iced) (Pour-over)', 
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
        description: menu__description[index],
        category: menu__category[index]
    }))
    .filter((product) => {
        const isSearchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const isFilterMatch = selectedFilter ? product.category === selectedFilter : true;
        
        return isSearchMatch && isFilterMatch;
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What we offer</h1>

            <div className={styles.interfaces}>
                <input type="text" className={styles.search__input}placeholder="SEARCH" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <div className={styles.dropdown__container}>
                    <select id="filter" className={styles.dropdown} value={selectedFilter} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="signature">Signature</option>
                        <option value="espresso">Espresso</option>
                        <option value="pour-over">Pour Over</option>
                        <option value="milk-based">Milk Based</option>
                        <option value="matcha">Matcha</option>
                    </select>
                </div>
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
