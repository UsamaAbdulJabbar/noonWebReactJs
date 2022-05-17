import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousal from './components/carousal';
import RoundeBanner from './components/roundedbanner';
import FourCards from './components/fourCards';
import Footer from './components/footer';
import NavButtons  from './components/buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className=''>
        <Navbar />
        <NavButtons />
        <Carousal />
        <RoundeBanner />
        <FourCards />
        
        <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
