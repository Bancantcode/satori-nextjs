import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styles from './style.module.scss';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const origin = {
  lat: 14.556410794803403,
  lng: 121.0347952883736
};

export default function ContactUs() {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [platform, setPlatform] = useState('email');
    const [infoOpen, setInfoOpen] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^\d{11}$/.test(contactNumber)) {
            alert('Please enter a valid contact number that contains exactly 11 digits.');
            return;
        }

        alert("Thank you for submitting!");

        setName('');
        setContactNumber('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <div className={styles.flex}>
                    <button type="submit" onClick={() => handleSubmit}>Send</button>
                </div>
            </form>
            {/* <LoadScript className={styles.map} googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}> */}
            {/* im having error when i put the api key in .env.local */}
            <LoadScript className={styles.map} googleMapsApiKey={"AIzaSyDwVpWVvXAUyCZIyvrOdLHJQS9mprKfs_0"}>
                <GoogleMap mapContainerStyle={containerStyle} center={origin} zoom={15} >
                    <Marker position={origin} onClick={() => setInfoOpen(true)} />
                    {infoOpen && (
                    <InfoWindow position={origin} onCloseClick={() => setInfoOpen(false)} >
                        <div>Satori Specialty Coffee</div>
                    </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </section>
    );
}
