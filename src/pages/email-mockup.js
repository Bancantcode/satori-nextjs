import '../app/globals.css'
import Header from '@/components/Header'
import EmailMarketing from '@/components/Marketing/Email';
import Footer from '@/components/Footer';

export default function EmailMockup() {
    return (
        <main>
            <Header />
            <EmailMarketing />
            <Footer />
        </main>
    );
}