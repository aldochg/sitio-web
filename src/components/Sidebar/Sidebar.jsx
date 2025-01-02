import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Sidebar.css';

export const Sidebar = () => {
    return (
        <div className="sidebar" style={{ width: '100%', height: '100%', padding: '10px', position: 'fixed', top: '0', left: '0' }}>
            <ul style={{display: 'flex', flexDirection: 'row', margin: '60px', padding: '20px'}}>
                <li>
                    <NavLink to="/" activeClassName="active" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" activeClassName="active">
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" activeClassName="active">
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}