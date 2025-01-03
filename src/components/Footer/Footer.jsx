import { useState, useEffect } from "react";
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h3>Empresa XYZ</h3>
                <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
            <div>
                <h4>Enlaces Rápidos</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="/" style={{ textDecoration: 'none' }}>Inicio</a></li>
                    <li><a href="/services" style={{  textDecoration: 'none' }}>Servicios</a></li>
                    <li><a href="/about-us" style={{  textDecoration: 'none' }}>Nosotros</a></li>
                    <li><a href="/products" style={{  textDecoration: 'none' }}>Productos</a></li>
                    <li><a href="/contact" style={{  textDecoration: 'none' }}>Contacto</a></li>
                </ul>
            </div>
            <div>
                <h4>Contáctanos</h4>
                <p>Email: contacto@empresa.com</p>
                <p>Teléfono: +51 123 456 789</p>
            </div>
            <div>
                <h4>Síguenos</h4>
                <a href="https://facebook.com" style={{ color: '#fff', margin: '0 10px' }}>Facebook</a>
                <a href="https://instagram.com" style={{ color: '#fff', margin: '0 10px' }}>Instagram</a>
                <a href="https://twitter.com" style={{ color: '#fff', margin: '0 10px' }}>Twitter</a>
            </div>
        </footer>
    );
}