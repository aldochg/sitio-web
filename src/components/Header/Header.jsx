import { useState, useEffect } from "react";
import { SidebarH } from "../SidebarH/SidebarH";
import './Header.css';
import logon from '../../assets/logo.png'
import 'primeicons/primeicons.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export const Header = () => {

    //Hacer un get a carrito de compras
    const [cart, setCart] = useState([]);

    const getItem = () => {
        try {
            const usuarioInfo = JSON.parse(localStorage.getItem('cart'));
            setCart(usuarioInfo)
            setVisibleRight(true)
        } catch (error) {
            console.log(error)
        }

    }

    // Disminuir la cantidad del producto
    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    // Aumentar la cantidad del producto
    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
    };

    const goToCheckout = () => {
        // Lógica para redirigir al usuario al proceso de pago
    };

    const deleteBackToShopping = (id) => {
        const filterCard = JSON.parse(localStorage.getItem('cart'));
        const updatedCart = filterCard.filter((item) => item.id !== id);
        
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log(updatedCart)
    };
    


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
                    <i className="pi pi-shopping-cart plex-icons" onClick={getItem}></i>
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
                        {cart.map((item, index) => (
                            <div key={index} className="card-item">
                                <img src={item.imagen} alt={item.nombre} />
                                <div className="product-info">
                                    <h3>{item.nombre}</h3>
                                    <div className="quantity-controls">
                                        <Button
                                            style={{ width: '30px', height: '30px' }}
                                            icon="pi pi-minus"
                                            onClick={() => decreaseQuantity(item.id)}
                                            disabled={item.cantidad <= 1}
                                        />
                                        <span>{item.cantidad}</span>
                                        <Button
                                            style={{ width: '30px', height: '30px' }}
                                            icon="pi pi-plus"
                                            onClick={() => increaseQuantity(item.id)}
                                        />
                                        <Button
                                            style={{ width: '30px', height: '30px' }}
                                            icon="pi pi-trash"
                                            onClick={() => deleteBackToShopping(item.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="cart-summary">
                        <div className="total">
                            <span>Total:</span>
                            <span>{cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2)} PEN</span>
                        </div>
                        <div className="actions">
                            <Button label="Proceder al pago" icon="pi pi-credit-card" onClick={goToCheckout} />
                        </div>
                    </div>
                )}
            </Sidebar>

        </header>
    );
};
