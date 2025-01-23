import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        return storedCart;
    });

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].cantidad += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, cantidad: 1 }]);
        }
    };

    // Función para aumentar la cantidad
    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
    };

    // Función para disminuir la cantidad
    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    // Función para eliminar un producto del carrito
    const deleteFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Obtener el total de productos en el carrito
    const getCartCount = () => cart.reduce((acc, item) => acc + item.cantidad, 0);

    // Calcular el total del precio
    const getTotalPrice = () =>
        cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                deleteFromCart,
                getCartCount,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
