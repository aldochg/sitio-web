import { useState, useEffect } from "react";
import './Blocks.css';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { Ball } from "../../components/Ball/Ball";

export const Blocks = () => {
    return (
        <div className="services">
            <div className="services__content">
                <h1>BLOCKS</h1>
                <Breadcrumb/>
            </div>
        </div>
    );
}