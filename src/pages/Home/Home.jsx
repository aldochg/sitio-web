import { useState, useEffect } from "react";
import './Home.css';
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <Breadcrumb />
                <h1 className="home1">Esto es un sitio web</h1>
            </div>
        </div>
    );
}