/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Contactez-nous</a></li>
                            <li><a href="#">Archives du sites</a></li>
                            <li><a href="#">Index de l'égalité professionnelle</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>À propos</h3>
                        <ul>
                            <li><a href="#">Modifier mes choix de cookies</a></li>
                            <li><a href="#">Qui sommes nous?</a></li>
                            <li><a href="#">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Nous concernant</h3>
                        <p>Si vous êtes un annonceur ou un professionnel de la publicité, notamment un acteur de la programmatique, nous vous remercions de vous référer aux informations et conditions générales de vente digital accessibles sur le site www.info.fr</p>
                    </div>
                    <div className="col item social"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></div>
                </div>
                <p className="copyright">Info ©2022</p>
            </div>
        </footer>
    </div>
    </footer>
  )
}

export default Footer