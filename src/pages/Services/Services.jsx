import { useState, useEffect } from "react";
import './services.css';
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export const Services = () => {
    return (
        <div className="services">
        <Breadcrumb />
        <h1>Services</h1>
        </div>
    );
}