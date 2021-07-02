import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
function App() {
  return (
    <div className='main'>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
