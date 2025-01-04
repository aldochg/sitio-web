import { useState, useEffect } from "react";
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div style={{ backgroundColor: '#333', borderRadius: '10px' }}>
                    <h3>Empresa S.A.C</h3>
                    <img src="#" alt="Empresa" />
                    <p>Empresa industrial de </p>
                    <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
                </div>
                <div>
                    <h4>Menu</h4>
                    <ul className="list-menu-footer">
                        <li><a href="/" style={{ textDecoration: 'none' }}>Inicio</a></li>
                        <li><a href="/services" style={{ textDecoration: 'none' }}>Servicios</a></li>
                        <li><a href="/about-us" style={{ textDecoration: 'none' }}>Nosotros</a></li>
                        <li><a href="/products" style={{ textDecoration: 'none' }}>Productos</a></li>
                        <li><a href="/contact" style={{ textDecoration: 'none' }}>Contacto</a></li>
                    </ul>
                </div>
                <div className="">
                    <h4>Contáctanos</h4>
                    <div className="contact-info">
                        <p><i className="pi pi-envelope" style={{ fontSize: '1.5rem', padding:'0 10px 0 3px' }}></i> contacto@empresa.com</p>
                        <p><i className="pi pi-envelope" style={{ fontSize: '1.5rem', padding:'0 10px 0 3px' }}></i> contacto@empresa.com</p>
                        <p><i className="pi pi-phone" style={{ fontSize: '1.5rem', padding:'0 10px 0 3px' }}></i> +51 123 456 789</p>
                        <p><i className="pi pi-phone" style={{ fontSize: '1.5rem', padding:'0 10px 0 3px' }}></i> +51 123 456 789</p>
                        <p><i className="pi pi-phone" style={{ fontSize: '1.5rem', padding:'0 10px 0 3px' }}></i> +51 123 456 789</p>
                        <p><i className="pi pi-map-marker" style={{ fontSize: '1.5rem', padding:'0 10px 0 3px' }}></i> Av. 1ro de mayo - primer sector - villa el salvador</p>
                    </div>
                </div>
                <div className="" >
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" style={{ color: '#fff' }}><i className="pi pi-facebook" style={{ fontSize: '1.5rem' }}></i></a>
                        <a href="https://instagram.com" style={{ color: '#fff' }}><i className="pi pi-instagram" style={{ fontSize: '1.5rem' }}></i></a>
                        <a href="https://twitter.com" style={{ color: '#fff' }}><i className="pi pi-twitter" style={{ fontSize: '1.5rem' }}></i></a>
                        <a href="https://tiktok.com" style={{ color: '#fff' }}><i className="pi pi-tiktok" style={{ fontSize: '1.5rem' }}></i></a>
                    </div>
                    <h4>Contactanos</h4>
                    <div className="p-inputgroup-flex">
                        <div className="p-inputgroup">
                            {/* <span className="p-inputgroup-addon">
                                <i className="pi pi-envelope"></i>
                            </span> */}
                            <input className="input-flex" type="text" placeholder="Correo" />
                        </div>
                        <div className="p-inputgroup">
                            <button className="button-flex">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="linea-separacion"></div>
            <div className="footer-bottom">
                <p>Políticas de privacidad</p>
                <p>Términos y condiciones</p>
            </div>
        </footer>
    );
}