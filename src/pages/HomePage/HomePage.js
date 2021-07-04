import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MainContent from '../../components/mainContent/MainContent';
import './HomePage.css';

export default function HomePage() {
    return <div className='main'>
        <Navbar />
        <MainContent />
        <Footer />
    </div>;
}