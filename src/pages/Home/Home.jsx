import { useState, useEffect } from "react";
import './Home.css';

import { TestimonialsCarousel } from "../../components/CarruselTestimonio/CarruselTestimonio";

import imagen1 from '../../assets/inicio/uno.jpg';
import imagen2 from '../../assets/inicio/dos.jpg';
import imagen3 from '../../assets/inicio/tres.jpg';
import imagen4 from '../../assets/inicio/cuatro.jpg';
import imagen5 from '../../assets/somos5.jpg';


import destacado1 from '../../assets/destacados/calidad_garantizada.jpg'
import destacado2 from '../../assets/destacados/atencion_personalizada.webp'
import destacado3 from '../../assets/destacados/fabricación_sostenible.avif'
import destacado4 from '../../assets/destacados/garantía_extendida.jpg'
import destacado5 from '../../assets/destacados/experiencia_comprobada.jpg'
import destacado6 from '../../assets/destacados/seguridad_certificada.webp'
import destacado7 from '../../assets/destacados/prueba_antes_comprar.jpg'
import destacado8 from '../../assets/destacados/descuentos_volumen.webp'
import destacado9 from '../../assets/destacados/soporte_tecnico_especializado.jpg'
import destacado10 from '../../assets/destacados/entrega_rapida1.jpg'


export const Home = () => {
  const images = [imagen1, imagen2, imagen3, imagen4, imagen2, imagen2, imagen2];
  const [currentIndex, setCurrentIndex] = useState(0);


  // preguntas frecuentes
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [preguntasFrecuentes, setPreguntasFrecuentes] = useState([])
  useEffect(() => {
    const faqs = [
      {
        question: '¿Cuánto dura un producto de acero inoxidable?',
        answer: 'Los productos de acero inoxidable son reconocidos por su longevidad. Gracias a su resistencia a la corrosión, incluso en ambientes húmedos o expuestos a elementos químicos, pueden durar décadas o incluso toda la vida con el cuidado adecuado. Son una inversión sólida que ofrece durabilidad y funcionalidad a largo plazo.',
      },
      {
        question: '¿Cuál es la capacidad de peso de un producto de acero inoxidable?',
        answer: 'El acero inoxidable es conocido por su alta resistencia estructural. Dependiendo del diseño y grosor, nuestros productos soportan cargas pesadas sin comprometer su integridad. Por ejemplo, mesas y estantes de acero inoxidable son ideales para soportar equipos industriales, utensilios de cocina pesados y más, garantizando estabilidad y seguridad.',
      },
      {
        question: '¿Se pueden utilizar productos de acero inoxidable en exteriores?',
        answer: 'Sí, el acero inoxidable es ideal para exteriores debido a su resistencia natural a la corrosión y los efectos del clima, como la lluvia o el sol intenso. Además, su capacidad para mantener un acabado impecable lo convierte en una elección perfecta para áreas al aire libre como terrazas, jardines y zonas industriales expuestas.',
      },
      {
        question: '¿Se pueden rayar los productos de acero inoxidable?',
        answer: 'El acero inoxidable puede presentar rayones superficiales con el tiempo, especialmente en ambientes de uso intenso. Sin embargo, su superficie es fácil de restaurar utilizando productos específicos o técnicas de pulido. Esto asegura que tu inversión mantenga un aspecto limpio y profesional por más tiempo.',
      },
      {
        question: '¿Ofrecen diseños personalizados o tamaños estándar?',
        answer: 'Entendemos que cada cliente tiene necesidades específicas. Por eso, ofrecemos la opción de personalizar diseños y tamaños para adaptarnos a tus requerimientos, además de una amplia gama de productos estándar. Ya sea que busques funcionalidad, estética o ambas, podemos crear el producto perfecto para ti.',
      },
      {
        question: '¿Cuánto tiempo toman en entregar la mesa después de realizar el pedido?',
        answer: 'El tiempo de entrega varía dependiendo de si seleccionas un diseño estándar o personalizado. Generalmente, entregamos entre 7 y 14 días hábiles. Nos aseguramos de que cada producto pase por rigurosos controles de calidad para garantizar que cumpla con los más altos estándares antes de llegar a tus manos.',
      },
      {
        question: '¿El transporte está incluido en el precio?',
        answer: 'El transporte puede estar incluido dependiendo del volumen de tu pedido y tu ubicación. Queremos que el proceso de adquisición sea lo más conveniente posible para ti, eliminando preocupaciones logísticas y asegurando que recibas tu producto en perfectas condiciones.',
      },
      {
        question: '¿Por qué debería elegir un producto de acero inoxidable?',
        answer: 'El acero inoxidable ofrece una combinación única de durabilidad, resistencia a la corrosión y estética moderna. Además de ser fácil de limpiar y mantener, es un material ecológico y reciclable, ideal para quienes buscan soluciones sostenibles. Nuestros productos no solo cumplen, sino que superan las expectativas de calidad, funcionalidad y diseño.',
      },
    ];


    setPreguntasFrecuentes(faqs)
  }, [])

  // Animacion de la barra
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Productos destacados
  const [productosDestacados, setProductosDestacados] = useState([])
  useEffect(() => {
    const productos_destacados = [
      {
        id: 1,
        imagen: imagen1,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 250.0,
        rating: 4,
      },
      {
        id: 2,
        imagen: imagen2,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 1500.0,
        rating: 5,
      },
      {
        id: 3,
        imagen: imagen3,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 1500.0,
        rating: 5,
      },
      {
        id: 4,
        imagen: imagen4,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 1500.0,
        rating: 5,
      },
      {
        id: 5,
        imagen: imagen1,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 1500.0,
        rating: 1,
      },
      {
        id: 6,
        imagen: imagen2,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 1500.0,
        rating: 2,
      },
      {
        id: 7,
        imagen: imagen2,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 1500.0,
        rating: 3,
      },
      {
        id: 8,
        imagen: imagen2,
        descripcion: "Refrigeradora de gran capacidad con acabado premium.",
        precio: 1500.0,
        rating: 4,
      },
    ]
    setProductosDestacados(productos_destacados)
  }, [])

  // informacion adicional
  const [informacionAdicional, setInformacionAdicional] = useState([]);
  useEffect(() => {
    const informacion_adicional = [
      {
        id: 1,
        logo: destacado1,
        title: 'Calidad garantizada',
        descripcion: 'Fabricado con materiales de primera calidad, diseñados para durar toda la vida.'
      },
      {
        id: 2,
        logo: destacado2,
        title: 'Atención personalizada',
        descripcion: 'Nuestro equipo está listo para asesorarte y ayudarte a encontrar exactamente lo que necesitas.'
      },
      {
        id: 3,
        logo: destacado3,
        title: 'Fabricación sostenible',
        descripcion: 'Comprometidos con el cuidado del medio ambiente, utilizamos procesos responsables y materiales reciclables.'
      },
      {
        id: 4,
        logo: destacado4,
        title: 'Garantía extendida',
        descripcion: 'Ofrecemos garantía de hasta 5 años para que compres con tranquilidad.'
      },
      {
        id: 5,
        logo: destacado5,
        title: 'Experiencia comprobada',
        descripcion: 'Más de 10,000 clientes satisfechos avalan la calidad de nuestros productos.'
      },
      {
        id: 6,
        logo: destacado6,
        title: 'Seguridad certificada',
        descripcion: 'Cumplimos con los estándares más altos de calidad y seguridad internacional.'
      },
      {
        id: 7,
        logo: destacado7,
        title: 'Prueba antes de comprar',
        descripcion: 'Experimenta la calidad de nuestros productos antes de decidir tu compra.'
      },
      {
        id: 8,
        logo: destacado8,
        title: 'Descuentos por volumen',
        descripcion: 'Ahorra más con nuestras ofertas exclusivas al comprar por mayor.'
      },
      {
        id: 9,
        logo: destacado9,
        title: 'Soporte técnico especializado',
        descripcion: 'Recibe asistencia técnica profesional cuando la necesites.'
      },
      {
        id: 10,
        logo: destacado10,
        title: 'Entrega rápida',
        descripcion: 'Recibe tus pedidos en tiempo récord, sin demoras.'
      },
    ];
    setInformacionAdicional(informacion_adicional)
  }, [])

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Función para avanzar
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div className="home__container__text">
            <div className="home__container__text__title">
              <p>¡Haz el cambio ahora!</p>
              <h1>Equipamiento de Acero Inoxidable</h1>
              <p style={{ lineHeight: '30px' }}>Transformamos tus espacios con equipos de acero inoxidable diseñados para superar expectativas. Fabricamos soluciones que optimizan tu eficiencia y te permiten concentrarte en lo que realmente importa: hacer crecer tu negocio.</p>
              <button className="home__container__button"><i className="pi pi-whatsapp"></i>CONTACTANOS</button>
            </div>
          </div>
          <div className="home__container__image">
            <div className="home__container__image__container">
              <img className="home__container__image__img" src={images[currentIndex]} />
              {/* Botones de navegación */}
              <button className="home__button home__button--prev" onClick={handlePrev}>
                <i className="pi pi-angle-left" style={{ color: '#ffffff', fontSize: '30px' }}></i>
              </button>
              <button className="home__button home__button--next" onClick={handleNext}>
                <i className="pi pi-angle-right" style={{ color: '#ffffff', fontSize: '30px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div >

      {/* informacion adicional*/}
      <div className="home__sin_descripcion__general">
        <div className="home__sin_descripcion__general__card">
          {informacionAdicional.map((producto, index) => (
            <div className="home__info__adicional" key={index}>
              <div className="home__adicional">
                <img src={producto.logo} alt={`Producto ${index + 1}`} />
              </div>
              <div className="home__adicional__descripcion">
                <h4 className="home__adicional__title">{producto.title}</h4>
                <p className="home__adicional__text">&quot;{producto.descripcion}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home__general__container">
        <div className="home__products__title">
          <h2 className="home_titles">Productos Destacados</h2>
        </div>
        <div className="homo_container_productos_destacados">
          {productosDestacados.map((producto, index) => (
            <div className="home__products" key={index}>
              <div className="home__product">
                <img src={producto.imagen} alt={`Producto ${index + 1}`} />
              </div>
              <div className="home__products__descripcion">
                <p className="home__products__description">{producto.descripcion}</p>
                <p className="home__products__price">S/. {producto.precio.toFixed(2)}</p>
                <div className="home__products__rating">
                  <i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-o"></i>
                </div>
                <button className="home__products__btn">
                  <i className="pi pi-whatsapp"></i> Cotizar
                </button>
                <button className="home__products__btn">
                  <i className="pi pi-eye"></i> Ver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home__menssage">
        <div className="home__message__container">
          <h1 style={{ fontSize: '50px' }}>Equipamiento de Acero Inoxidable</h1>
          <p>¿Quieres llevar tu negocio al siguiente nivel con equipos confiables y duraderos?</p>
          <p style={{ lineHeight: '30px' }}>
            En EMPRESA S.A.C, diseñamos y fabricamos equipamiento de acero inoxidable que combina resistencia, estilo y funcionalidad. Cada pieza está creada pensando en optimizar tus operaciones, reducir costos a largo plazo y destacar la imagen profesional de tu negocio. ¡Con nosotros, tu éxito está asegurado!
          </p>
          <button className="home__message__button">¡Solicita tu cotización hoy mismo!</button>
        </div>
      </div>

      {/* Testimonio de nuestros clientes */}
      <div className="testimonials-carousel-container">
        <TestimonialsCarousel />
      </div>

      {/* Quienes somos 1: productos destacados, 2:  */}
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__image">
            <img src={imagen5} alt="Fabricante de equipamiento de acero inoxidable" />
          </div>
          <div className="about-us__text">
            <p className="about-us__subtitle">¿Quiénes somos?</p>
            <h1 className="about-us__title">Fabricante de equipamiento de acero inoxidable</h1>
            <p className="about-us__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium expedita error veniam, nam assumenda vitae sed voluptatibus dolorem laudantium officiis animi totam ullam rerum.
            </p>
            <p className="about-us__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum cupiditate error odit dolore veritatis natus corporis facilis delectus a eligendi veniam maiores, corrupti magni hic reprehenderit aperiam! Iste, cumque!
            </p>
            <h4 className="about-us__highlight">COMPRA TU EQUIPAMIENTO DE ACERO INOXIDABLE</h4>
            <div className="about-us__guarantee">
              <div className="about-us__progress-bar">
                <div
                  className="about-us__progress-bar-fill"
                  style={{ width: `${progress}%` }}
                ><span className="about-us__progress-span">Garantía {progress}%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="accordion-container">
        <h1 className="accordion-title">Preguntas Frecuentes</h1>
        <div className="accordion">
          {preguntasFrecuentes.map((faq, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <p className="accordion-question">{faq.question}</p>
                <i className={`accordion-icon pi pi-${activeIndex === index ? 'minus' : 'plus'}`} style={{ fontSize: '14px', fontWeight: 'bold' }}></i>
              </div>
              {activeIndex === index && (
                <div className="accordion-body">
                  <p className="accordion-answer">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}