import { useState, useEffect } from "react";
import './Footer.css';
import imagen from '../../assets/logo_original.jpg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="container-logo-empresa">
                    <img src={imagen} alt="Empresa" width={200} />
                    <p>ALPHA STEEL ENGINE S.A.C.</p>
                </div>
                <div>
                    <h4>ENLASES RAPIDOS</h4>
                    <ul className="list-menu-footer">
                        <li><a href="/" style={{ textDecoration: 'none' }}><i className="pi pi-arrow-right" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i>Inicio</a></li>
                        <li><a href="/services" style={{ textDecoration: 'none' }}><i className="pi pi-arrow-right" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i>Servicios</a></li>
                        <li><a href="/about-us" style={{ textDecoration: 'none' }}><i className="pi pi-arrow-right" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i>Nosotros</a></li>
                        <li><a href="/products" style={{ textDecoration: 'none' }}><i className="pi pi-arrow-right" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i>Productos</a></li>
                        <li><a href="/contact" style={{ textDecoration: 'none' }}><i className="pi pi-arrow-right" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i>Contacto</a></li>
                    </ul>
                </div>
                <div className="">
                    <h4>DATOS DE CONTACTO</h4>
                    <div className="contact-info">
                        <p><i className="pi pi-envelope" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i> contacto@empresa.com</p>
                        <p><i className="pi pi-envelope" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i> contacto@empresa.com</p>
                        <p><i className="pi pi-phone" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i> +51 123 456 789</p>
                        <p><i className="pi pi-phone" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i> +51 123 456 789</p>
                        <p><i className="pi pi-phone" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i> +51 123 456 789</p>
                        <p><i className="pi pi-map-marker" style={{ fontSize: '1.5rem', padding: '0 10px 0 3px' }}></i> Av. 1ro de mayo - primer sector - villa el salvador</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-botton-sub">
                    <div className="footer-botton-sub-icons">
                        <div className="social-icons">
                            <a href="https://facebook.com" style={{ color: '#fff' }}><i className="pi pi-facebook" style={{ fontSize: '1.2rem' }}></i></a>
                            <a href="https://whatsapp.com" style={{ color: '#fff' }}><i className="pi pi-whatsapp" style={{ fontSize: '1.2rem' }}></i></a>
                            <a href="https://tiktok.com" style={{ color: '#fff' }}><i className="pi pi-tiktok" style={{ fontSize: '1.2rem' }}></i></a>
                        </div>
                    </div>
                    <div className="footer-botton-sub-text">
                        <p>© {new Date().getFullYear()} EMPRESA S.A.C. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}