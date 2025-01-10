import { useState } from "react";
import { NavLink } from "react-router-dom";
import './SidebarH.css';

export const SidebarH = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__list-item">
                    <NavLink to="/" end>
                        Inicio
                    </NavLink>
                </li>
                <li className="sidebar__list-item" >
                    <div className="menu-item">
                        <NavLink to="/products">
                            Productos
                        </NavLink>
                    </div>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/about-us">
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/blocks">
                        Blocks
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
