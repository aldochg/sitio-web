import { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import './Header.css';
import imagen from '../../assets/react.svg';
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
            <div className="header__logo">
                <img src={imagen} alt="Logo" />
            </div>
            <div className="header__search">
                <Sidebar />
            </div>
            <div className="header__icons">
                <i className="pi pi-align-justify" style={{ fontSize: '2rem', display:'none' }}></i>
                <i className="pi pi-user" style={{ fontSize: '2rem' }}></i>
                <i className="pi pi-heart-fill" style={{ fontSize: '2rem' }}></i>
                <i className="pi pi-cart-minus" style={{ fontSize: '2rem' }}></i>
            </div>
        </header>
    );
};
