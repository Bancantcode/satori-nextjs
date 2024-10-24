import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        // Load the Google Maps API script
        const loadGoogleMapsScript = () => {
            return new Promise((resolve, reject) => {
                if (window.google) {
                    resolve(); // Google Maps already loaded
                    return;
                }
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // Replace with your API key
                script.onload = () => resolve();
                script.onerror = () => reject(new Error('Google Maps script could not be loaded.'));
                document.body.appendChild(script);
            });
        };

        loadGoogleMapsScript()
            .then(() => {
                const map = new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return <div id="map" style={{ height: '400px', width: '100%' }} />;
}
