import { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import './Header.css';
import { ssrImportKey } from "vite/runtime";
import imagen from '../../assets/react.svg';
import 'primeicons/primeicons.css';
export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={imagen} alt="Logo" />
            </div>
            <div className="header__search">
                <Sidebar />
            </div>
            <div className="header__icons">
                <i className="pi pi-user" style={{ fontSize: '2rem' }}></i>
                <i className="pi pi-heart-fill" style={{ fontSize: '2rem' }}></i>
                <i className="pi pi-cart-minus" style={{ fontSize: '2rem' }}></i>
            </div>
        </header>
    );
}
