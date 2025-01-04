import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

export const Sidebar = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const handleMouseEnter = () => setIsProductsOpen(true);
    const handleMouseLeave = () => setIsProductsOpen(false);

    return (
        <nav className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__list-item">
                    <NavLink to="/" end>
                        Inicio
                    </NavLink>
                </li>
                <li 
                    className="sidebar__list-item" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="menu-item">
                    <i className="pi pi-align-center" style={{ color:'#46494d', padding:'10px' }}></i>
                        <NavLink to="/products">
                            Productos
                        </NavLink>
                        {/* <i className={`pi ${isProductsOpen ? 'pi-align-center' : 'pi-chevron-right'}`}></i> */}
                    </div>
                    {isProductsOpen && (
                        <ul className="submenu">
                            <li className="submenu__item">
                                <NavLink to="/products/category1">
                                    Categoría 1
                                </NavLink>
                            </li>
                            <li className="submenu__item">
                                <NavLink to="/products/category2">
                                    Categoría 2
                                </NavLink>
                            </li>
                            <li className="submenu__item">
                                <NavLink to="/products/category3">
                                    Categoría 3
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/services">
                        Servicios
                    </NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/about-us">
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/contact">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
