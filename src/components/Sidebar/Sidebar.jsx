import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Sidebar.css';

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__list-item">
                    <NavLink to="/" activeClassName="active" end>
                        Inicio
                    </NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/products" activeClassName="active">
                        Productos
                    </NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/services" activeClassName="active">
                        Servicios
                    </NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/about-us" activeClassName="active">
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink to="/contact" activeClassName="active">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}