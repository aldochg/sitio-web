import { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import './Header.css';
import imagen from '../../assets/8.png';
import 'primeicons/primeicons.css';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false); // Ocultar header
        } else {
            setIsVisible(true); // Mostrar header
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            {/* Primera fila: Información relevante */}
            <div className="header__top">
                <div className="header__info">
                    <span><i className="pi pi-phone"></i> +51 972 373 515</span>
                    <span><i className="pi pi-envelope"></i> compania@empresa.com</span>
                </div>
                <div className="header__social">
                    <a href="https://facebook.com" style={{ color: '#fff' }}><i className="pi pi-facebook"></i></a>
                    <a href="https://instagram.com" style={{ color: '#fff' }}><i className="pi pi-instagram"></i></a>
                    <a href="https://twitter.com" style={{ color: '#fff' }}><i className="pi pi-twitter"></i></a>
                    <a href="https://tiktok.com" style={{ color: '#fff' }}><i className="pi pi-tiktok"></i></a>
                </div>
            </div>

            {/* Segunda fila: Menús */}
            <div className="header__bottom">
                <div className="header__logo">
                    <img className="img-logo" src={imagen} alt="Logo"/>
                </div>
                <div className="header__menu">
                    <Sidebar />
                </div>
                <div className="header__icons">
                    <i className="pi pi-user plex-icons"></i>
                    <i className="pi pi-heart-fill plex-icons"></i>
                    <i className="pi pi-shopping-cart plex-icons"></i>
                    <i id="pi-align-justify" className="pi pi-align-justify"></i>
                </div>
            </div>
        </header>
    );
};
