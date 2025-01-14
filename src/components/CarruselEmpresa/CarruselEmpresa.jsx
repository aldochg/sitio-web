import { useState, useEffect } from "react";
import Marquee from "react-marquee-slider";
import "./CarruselEmpresa.css"; // Opcional para estilos

import destacado1 from '../../assets/empresas/empresa1.jpg'
import destacado2 from '../../assets/empresas/empresa2.jpg'
import destacado3 from '../../assets/empresas/empresa3.jpg'
import destacado4 from '../../assets/empresas/empresa4.png'
import destacado5 from '../../assets/empresas/empresa5.png'
export const CarruselEmpresa = () => {

    // Estado para manejar la velocidad del slider
    const [velocity, setVelocity] = useState(0); // Velocidad inicial
    // Configura la velocidad al cargar el componente
    useEffect(() => {
        setVelocity(30); // Asegura que el slider se mueva automáticamente
    }, []);
    // informacion adicional
    const [informacionAdicional, setInformacionAdicional] = useState([]);
    useEffect(() => {
        const informacion_adicional = [
            {
                id: 1,
                logo: destacado5,
            },
            {
                id: 2,
                logo: destacado1,
            },
            {
                id: 3,
                logo: destacado2,
            },
            {
                id: 4,
                logo: destacado1,
            },
            {
                id: 5,
                logo: destacado3,
            },
            {
                id: 6,
                logo: destacado2,
            },
            {
                id: 7,
                logo: destacado3,
            },
            {
                id: 8,
                logo: destacado5,
            },
            {
                id: 9,
                logo: destacado4,
            },
            {
                id: 10,
                logo: destacado2,
            },
        ];
        setInformacionAdicional(informacion_adicional)
    }, [])

    return (

        <div
            className="slider-container"
            onMouseOver={() => setVelocity(0)} // Detener al pasar el mouse
            onMouseOut={() => setVelocity(30)}  // Continuar cuando sale el mouse
        >
            <Marquee velocity={velocity} >
                {[
                    <div className="empresa__logo" key="1">
                        <div className="empresa__logo__sub">
                            {informacionAdicional.map((producto) => (
                                <div className="empresa__logo__adicional" key={producto.id}>
                                    <div className="logo__adicional">
                                        <img src={producto.logo} alt={producto.title} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ]}
            </Marquee>
        </div>
    );
};
