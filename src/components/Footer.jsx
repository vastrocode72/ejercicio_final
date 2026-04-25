import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Instagram } from 'lucide-react';
import '../styles/Footer.css';

function PinterestIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-name">Urban Threads</div>
          <p className="footer__brand-desc">
            Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Enlaces</div>
          <ul className="footer__links">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Ayuda</div>
          <ul className="footer__links">
            <li><a href="#guia">Guía de tallas</a></li>
            <li><a href="#envios">Envíos</a></li>
            <li><a href="#devoluciones">Devoluciones</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Síguenos</div>
          <div className="footer__social-icons">
            <span className="footer__social-icon" aria-label="Twitter">
              <Twitter size={14} />
            </span>
            <span className="footer__social-icon" aria-label="Pinterest">
              <PinterestIcon size={14} />
            </span>
            <span className="footer__social-icon" aria-label="Instagram">
              <Instagram size={14} />
            </span>
          </div>
        </div>
      </div>

      <p className="footer__bottom">
        © 2024 Urban Threads. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
