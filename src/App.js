import './App.css';
// import Ukraine from './components/Ukraine';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar />
        <navbar>
          <Link to="/politique" className='separation'>Politique</Link>
          <Link to="/canicule" className='separation'>Canicule</Link>
          <Link to="/ukraine" className='separation'>Ukraine</Link>
          <Link to="/inflation" className='separation'>Inflation</Link>
        </navbar>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
