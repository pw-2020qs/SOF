import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div class="d-flex flex-column min-vh-100">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
