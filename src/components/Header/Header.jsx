import { useState, useEffect, useContext  } from "react";
import { SidebarH } from "../SidebarH/SidebarH";
import './Header.css';
import logon from '../../assets/logo.png'
import 'primeicons/primeicons.css';
import { Sidebar } from 'primereact/sidebar';
import { NavLink } from "react-router-dom";
import { Button } from 'primereact/button';

import { CartContext } from '../../context/CartContext';

export const Header = () => {
    const { cart, increaseQuantity, decreaseQuantity, deleteFromCart, getTotalPrice } =
    useContext(CartContext);

    


    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);

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

    // const usuarioInfo = JSON.parse(localStorage.getItem('usuarioInfo'));

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
                    <img className="img-logo" src={logon} alt="Logo" />
                </div>
                <div className="header__menu">
                    <SidebarH />
                </div>
                <div className="header__icons">
                    <i className="pi pi-user plex-icons"></i>
                    <i className="pi pi-heart-fill plex-icons"></i>
                    <div className="contador">
                        <div className="contador-card">{cart.length}</div>
                        <i className="pi pi-shopping-cart plex-icons" onClick={() => setVisibleRight(true)}></i>
                    </div>
                    <i id="pi-align-justify" className="pi pi-align-justify" onClick={() => setVisible(true)}></i>
                </div>
            </div>

            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <SidebarH />
            </Sidebar>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <div className="card-container">
                    {cart.map((item) => (
                        <div key={item.id} className="card-item">
                            <img src={item.imagen} alt={item.nombre} />
                            <div className="product-info">
                                <h3>{item.nombre}</h3>
                                <div className="quantity-controls">
                                    <button onClick={() => decreaseQuantity(item.id)}  disabled={item.cantidad <= 1}><i className="pi pi-minus"></i></button>
                                    <span>{item.cantidad}</span>
                                    <button onClick={() => increaseQuantity(item.id)}><i className="pi pi-plus"></i></button>
                                    <button onClick={() => deleteFromCart(item.id)}><i className="pi pi-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && <div>Total: {getTotalPrice()} PEN</div>}
            <button>
            <NavLink to="/cart">About</NavLink>
            </button>
        </Sidebar>

        </header>
    );
};
