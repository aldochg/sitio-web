import { useState, useEffect } from "react";
import { SidebarH } from "../SidebarH/SidebarH";
import './Header.css';
import imagen from '../../assets/8.png';
import logon from '../../assets/logo_original2.jpg'
import 'primeicons/primeicons.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(false);

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
                    <a href="https://tiktok.com" style={{ color: '#fff' }}><i className="pi pi-tiktok"></i></a>
                </div>
            </div>

            {/* Segunda fila: Menús */}
            <div className="header__bottom">
                <div className="header__logo">
                    <img className="img-logo" src={logon} alt="Logo"/>
                </div>
                <div className="header__menu">
                    <SidebarH />
                </div>
                <div className="header__icons">
                    <i className="pi pi-user plex-icons"></i>
                    <i className="pi pi-heart-fill plex-icons"></i>
                    <i className="pi pi-shopping-cart plex-icons"></i>
                    <i id="pi-align-justify" className="pi pi-align-justify" onClick={() => setVisible(true)}></i>
                </div>
            </div>

            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <SidebarH/>
            </Sidebar>
            
        </header>
    );
};
