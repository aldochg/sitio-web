import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import './CarruselTestimonio.css';
import { Ball } from '../Ball/Ball';

import testimonio1 from '../../assets/testimonios/testimonio4.jpg'
import testimonio2 from '../../assets/testimonios/testimonio2.jpg'
import testimonio3 from '../../assets/testimonios/testimonio3.jpg'

// Componente individual para un testimonio
export const TestimonialCard = ({ testimonial }) => {
  const { name, image, rating, feedback } = testimonial;
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-quote">"</div>
        <p className="testimonial-feedback">{feedback}</p>
        <div className="testimonial-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={`pi ${index < rating ? 'pi-star-fill' : 'pi-star'}`}
            ></i>
          ))}
        </div>
      </div>
      <div className="testimonial-avatar">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

// Componente para el carrusel de testimonios
export const TestimonialsCarousel = () => {
  const [testimonioClientes, setTestimonioClientes] = useState([]);

  useEffect(() => {
    // Simulación de datos
    const testimonials = [
      {
        id: 1,
        name: 'Juan Pérez',
        image: testimonio1,
        rating: 5,
        feedback: 'Excelente calidad y diseño, el acero inoxidable luce perfecto en mi cocina.',
      },
      {
        id: 2,
        name: 'María Gómez',
        image: testimonio2,
        rating: 4,
        feedback: 'El producto llegó a tiempo y superó mis expectativas. Muy recomendable.',
      },
      {
        id: 3,
        name: 'Luis Torres',
        image: testimonio3,
        rating: 5,
        feedback: 'Un excelente servicio al cliente, sin duda volveré a comprar.',
      },
      {
        id: 1,
        name: 'Juan Pérez',
        image: testimonio1,
        rating: 5,
        feedback: 'Excelente calidad y diseño, el acero inoxidable luce perfecto en mi cocina.',
      },
      {
        id: 2,
        name: 'María Gómez',
        image: testimonio2,
        rating: 4,
        feedback: 'El producto llegó a tiempo y superó mis expectativas. Muy recomendable.',
      },
      {
        id: 3,
        name: 'Luis Torres',
        image: testimonio3,
        rating: 5,
        feedback: 'Un excelente servicio al cliente, sin duda volveré a comprar.',
      },
    ];

    setTestimonioClientes(testimonials);
  }, []);

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="testimonials-carousel-container">
      <div className='testimonio-title-animacion'>
        <h2 className="carousel-title">Testimonios de nuestros clientes</h2>
        <Ball />
      </div>
      <Carousel
        value={testimonioClientes}
        itemTemplate={(item) => <TestimonialCard testimonial={item} />}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        autoplayInterval={3000} // Avanza automáticamente cada 3 segundos
        circular
        showIndicators={false}
        showNavigators
      />
    </div>
  );
};

