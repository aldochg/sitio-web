import { useState, useEffect } from "react";
import './Home.css';
import Img from '../../assets/image.png';

export const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img src={Img} alt="React" />
            </div>
        </div>
    );
}