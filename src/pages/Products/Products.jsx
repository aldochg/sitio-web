import { useState, useEffect } from "react";
import './Products.css';
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export const Products = () => {
    return (
        <div className="products">
         <h1>Products</h1>
            <Breadcrumb />
        </div>
    );
}