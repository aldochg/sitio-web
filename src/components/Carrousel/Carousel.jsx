import React, { useRef, useState } from "react";
import "./Carousel.css";

export const Carousel = ({ images }) => {
    const carouselRef = useRef(null);
    const [disableLeftButton, setDisableLeftButton] = useState(true);
    const [disableRightButton, setDisableRightButton] = useState(false);

    const handleScroll = (direction) => {
        const carousel = carouselRef.current;
        const scrollAmount = carousel.clientWidth; // Desplazamiento igual al ancho visible

        if (direction === "left") {
            carousel.scrollLeft -= scrollAmount;
        } else {
            carousel.scrollLeft += scrollAmount;
        }

        // Verifica si los botones deben ser habilitados o deshabilitados
        checkButtonsState();
    };

    const checkButtonsState = () => {
        const carousel = carouselRef.current;
        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;

        // Si el carrusel está al principio o al final, deshabilita los botones correspondientes
        setDisableLeftButton(scrollLeft <= 0);
        setDisableRightButton(scrollLeft + clientWidth >= scrollWidth);
    };

    return (
        <div className="carousel-container">
            <button
                className="carousel-button left"
                onClick={() => handleScroll("left")}
                disabled={disableLeftButton}
            >
                &lt;
            </button>
            <div className="carousel" ref={carouselRef}>
                {images.map((image, index) => (
                    <div key={index} className="carousel__card__container">
                        <div className="carousel__img__container">
                            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                        </div>
                        <div>
                            <p className="carousel__description">Mesa de acero inoxidable ideal para cocinas industriales.</p>
                            <p className="carousel__price">S/. 250.00</p>
                            <div className="carousel__rating">
                                <i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-o"></i>
                            </div>
                            <button className="carousel__btn"><i className="pi pi-whatsapp"></i>Cotizar</button>
                            <button className="carousel__btn"><i className="pi pi-eye"></i>Ver</button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-button right"
                onClick={() => handleScroll("right")}
                disabled={disableRightButton}
            >
                &gt;
            </button>
        </div>
    );
};
