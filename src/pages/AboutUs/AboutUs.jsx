import { useState, useEffect } from "react";
import './AboutUs.css';
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export const AboutUs = () => {
    return (
        <div className="about-us">
            <Breadcrumb />
            <h1>About Us</h1>
        </div>
    );
}