/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {

    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 909) {
        setToggleMenu(false);
      }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize',changeWidth);
    }

  }, [])
  
  return (
    <nav>
      {(toggleMenu || largeur > 909) && (
        <ul className='show'>
        <li className="active"><a href="#">Actualité</a></li>
        <li><a href="#">Inscription </a></li>
        <li><a href="#">Connexion <i class="fa-solid fa-circle-user"></i></a></li>
        <li className='interieur'><i class="fa-brands fa-facebook-f"></i></li>
        <li className='interieur'><i class="fa-brands fa-twitter"></i></li>
        <li className='interieur'><i class="fa-brands fa-instagram"></i></li>
        <li className='interieur'><i class="fa-brands fa-linkedin-in"></i></li>
      </ul>
      )}
    <label className="logo">Info</label>
    <label id="icon">
      <i className="fa-solid fa-bars" onClick={toggleNavSmallScreen}></i>
    </label>
  </nav>
  )
}

export default Navbar
