import './App.css';
// import Ukraine from './components/Ukraine';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar />
        <navbar>
          <NavLink to="/politique" className='separation'>Politique</NavLink>
          <NavLink to="/canicule" className='separation'>Canicule</NavLink>
          <NavLink to="/ukraine" className='separation'>Ukraine</NavLink>
          <NavLink to="/inflation" className='separation'>Inflation</NavLink>
        </navbar>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
