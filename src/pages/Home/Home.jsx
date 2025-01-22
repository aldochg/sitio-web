import { useState, useEffect } from "react";
import './Home.css';
import { Ball } from "../../components/Ball/Ball";

import { TestimonialsCarousel } from "../../components/CarruselTestimonio/CarruselTestimonio";

import imagen1 from '../../assets/inicio/uno.jpg';
import imagen2 from '../../assets/inicio/dos.jpg';
import imagen3 from '../../assets/inicio/tres.jpg';
import imagen4 from '../../assets/inicio/cuatro.jpg';
import imagen5 from '../../assets/somos5.jpg';

import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider9 from '../../assets/slider9.jpg'
import slider17 from '../../assets/slider17.jpg'
import slider4 from '../../assets/slider4.jpg'
import slider5 from '../../assets/slider5.webp'

//imagenes para categrias
import cat1 from '../../assets/categorias/mesa1.jpg';
import stan1 from '../../assets/categorias/estanteria1.jpg';
import fre_aut1 from '../../assets/categorias/frei_automa1.jpg';
import cocina1 from '../../assets/categorias/cocina1.jpg';
import horno1 from '../../assets/categorias/horno1.jpg';
import lava1 from '../../assets/categorias/lava1.jpg';

export const Home = () => {
  const images = [slider1, slider2, slider3, slider4, slider5, slider9, slider17];

  // Generar imagene automaticas
  const [img, setImg] = useState([]);
  useEffect(() => {
    const images = import.meta.glob("../../assets/fondos/*.{png,jpg,jpeg,svg,webp,gif,bmp}");
    const imagePaths = Object.keys(images).map((path) => images[path]);
    setImg(imagePaths)
  }, []);

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
  const [productosDestacados, setProductosDestacados] = useState([]);
  useEffect(() => {
    const productos_destacados = [
      {
        id: 1,
        imagen: imagen1,
        name: 'Cocina Industrial con Dos Hornillas',
        descripcion: "Cocina industrial compacta con dos hornillas de alto rendimiento, ideal para espacios pequeños en cocinas profesionales.",
        precio: 1200.0,
        rating: 4,
      },
      {
        id: 2,
        imagen: imagen2,
        name: 'Hornos Industriales',
        descripcion: "Horno industrial diseñado para asar y hornear diversos tipos de alimentos, ofreciendo una cocción uniforme y eficiente.",
        precio: 750.0,
        rating: 5,
      },      
      {
        id: 3,
        imagen: imagen3,
        name: 'Mesas de Trabajo de Acero Inoxidable',
        descripcion: "Mesas de trabajo robustas y duraderas de acero inoxidable, diseñadas para cocinas industriales y talleres.",
        precio: 2500.0,
        rating: 5,
      },
      {
        id: 4,
        imagen: imagen4,
        name: 'Lavaderos Industriales',
        descripcion: "Lavaderos amplios y resistentes de acero inoxidable, ideales para el lavado de grandes volúmenes en cocinas profesionales.",
        precio: 900.0,
        rating: 4,
      },
      {
        id: 5,
        imagen: imagen5,
        name: 'Repisas de Acero Inoxidable',
        descripcion: "Repisas funcionales y resistentes de acero inoxidable, perfectas para organizar utensilios y productos en cocinas industriales.",
        precio: 650.0,
        rating: 3,
      },
      {
        id: 6,
        imagen: imagen1,
        name: 'Freidoras Automáticas',
        descripcion: "Freidora automática de acero inoxidable con controles de temperatura precisos para un uso eficiente en restaurantes.",
        precio: 250.0,
        rating: 3,
      },
      {
        id: 7,
        imagen: imagen1,
        name: 'Escurridores de Acero Inoxidable',
        descripcion: "Escurridores diseñados para un drenaje rápido y eficiente, fabricados en acero inoxidable de alta durabilidad.",
        precio: 1500.0,
        rating: 5,
      },
      {
        id: 8,
        imagen: imagen1,
        name: 'Freidoras Convencionales',
        descripcion: "Freidoras de diseño tradicional con controles manuales, ideales para cocinas que requieren soluciones prácticas y confiables.",
        precio: 1800.0,
        rating: 4,
      },
    ];
    
    setProductosDestacados(productos_destacados);
  }, []);

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

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  const [activeId, setActiveId] = useState(null); // Estado para el producto activo

  const handleClick = (id) => {
    setActiveId(id); // Activar el producto clickeado
  };

  // Datos para galeria de por que elegirnos
  const [galeri, setGaleri] = useState([]);
  useEffect(() => {
    const data = [
      {
        id: 1,
        img: cat1,
        title: 'Mesas de Trabajo',
        descripcion: 'Mesas de acero inoxidable diseñadas para ofrecer una superficie resistente y funcional en cocinas industriales y talleres.'
      },
      {
        id: 2,
        img: stan1,
        title: 'Estanterías de Acero',
        descripcion: 'Estanterías de acero inoxidable robustas y duraderas, ideales para organizar utensilios, herramientas y productos de forma segura.'
      },
      {
        id: 3,
        img: lava1,
        title: 'Lavaderos',
        descripcion: 'Lavaderos de acero inoxidable espaciosos y resistentes, diseñados para facilitar el lavado en cocinas profesionales y entornos industriales.'
      },
      {
        id: 4,
        img: fre_aut1,
        title: 'Freidoras Automáticas',
        descripcion: 'Freidoras automáticas de alto rendimiento, ideales para preparar alimentos fritos de manera eficiente y uniforme.'
      },
      {
        id: 5,
        img: horno1,
        title: 'Hornos',
        descripcion: 'Hornos industriales de alta calidad, diseñados para garantizar una cocción uniforme y resultados excepcionales.'
      },
      {
        id: 6,
        img: cocina1,
        title: 'Cocinas Industriales',
        descripcion: 'Cocinas industriales fabricadas con materiales de alta resistencia, perfectas para soportar el uso intensivo en restaurantes y hoteles.'
      }
    ];
    setGaleri(data)
  }, []);

  const enviarMensajeWhatsApp = (productoSeleccionado = "equipamiento industrial en general") => {
    const empresaNombre = "Alpha Steel Engine S.A.C.";
    const numeroTelefono = "51972373515";
    const mensaje = `¡Hola! Estoy interesado/a en los productos de acero inoxidable y equipamiento industrial que ofrece ${empresaNombre}, especialmente en: ${productoSeleccionado}. ¿Podrían brindarme más información?`;

    window.open(
      `https://wa.me/${numeroTelefono}/?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  }

  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div className="home__container__image">
            <div
              className="home__container__image__img"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
              <div className="home__container__text">
                <div className="home__container__text__title">
                  <p>¡Haz el cambio ahora!</p>
                  <h1>Equipamiento de Acero Inoxidable</h1>
                  <p style={{ lineHeight: '34px' }}>Transformamos tus espacios con equipos de acero inoxidable diseñados para superar expectativas. Fabricamos soluciones que optimizan tu eficiencia y te permiten concentrarte en lo que realmente importa: hacer crecer tu negocio.</p>
                  <div className="home__container__con__vide">
                    <div>
                      <button className="home__container__button" onClick={() => enviarMensajeWhatsApp()}><i className="pi pi-whatsapp"></i>CONTACTANOS</button>
                    </div>
                    <div>
                      <div className="home__container__video">
                        <i className="pi pi-caret-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Botones de navegación */}
            <button className="home__button home__button--prev" onClick={handlePrev}>
              ❮
            </button>
            <button className="home__button home__button--next" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
      </div>

      {/* Seccion de categorias*/}
      <div className="categorias-container">
        <div className="categorias-container-sub">
          <div className="categorias-container-title">
            <h1>Categorias</h1>
          </div>
        </div>
      </div>

      {/* Seccion de las categorias, cuando hacen click */}
      <div className="why-us-categori">
        <div className="why-us-sub-categori">
          <div className="why-us-galeri-categori">
            {galeri.map((data, index) => (
              <div className="why-us-galeri-img-categori" key={index}>
                <div className="why-us-galeri-img-verdadero-categori">
                  <img src={data.img} alt={`Galería ${index + 1}`} />
                  <div className="overlay-categori">
                    <div className="overlay-categori-line">
                      <h4 className="overlay-categori-line-text">{data.title}</h4>
                    </div>
                    <p>{data.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secciona para los productos destacados */}
      <div className="home__general__container">
        <div className="home__products__title">
          <h2 className="home_titles">Productos Destacados</h2>
          <Ball />
        </div>
        <div className="homo_container_productos_destacados">
          {productosDestacados.map((producto, index) => (
            <div className="home__products" key={index}>
              <div className="home__product">
                <img src={producto.imagen} alt={`Producto ${index + 1}`} />
              </div>
              <div className="home__products__descripcion">
                <p className="home__products__description">{producto.name}</p>
                <p className="home__products__price">S/. {producto.precio.toFixed(2)}</p>
                <div className="home__products__rating">
                  <i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-fill"></i><i className="pi pi-star-o"></i>
                </div>
                <button className="home__products__btn" onClick={() => enviarMensajeWhatsApp()}>
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
          <h1>Equipamiento de Acero Inoxidable</h1>
          <p>¿Quieres llevar tu negocio al siguiente nivel con equipos confiables y duraderos?</p>
          <p style={{ lineHeight: '30px' }}>
            En EMPRESA S.A.C, diseñamos y fabricamos equipamiento de acero inoxidable que combina resistencia, estilo y funcionalidad. Cada pieza está creada pensando en optimizar tus operaciones, reducir costos a largo plazo y destacar la imagen profesional de tu negocio. ¡Con nosotros, tu éxito está asegurado!
          </p>
          <button className="home__message__button" onClick={() => enviarMensajeWhatsApp()}>¡Solicita tu cotización hoy mismo!</button>
        </div>
      </div>

      {/* Testimonio de nuestros clientes */}
      <div className="testimonials-carousel-container">
        <TestimonialsCarousel />
      </div>

      {/* Quiénes somos: productos destacados, garantía y misión */}
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__image">
            <img src={imagen5} alt="Fabricante de equipamiento de acero inoxidable" />
          </div>
          <div className="about-us__text">
            <p className="about-us__subtitle">¿Quiénes somos?</p>
            <div>
              <Ball />
            </div>
            <h1 className="about-us__title">Expertos en Equipamiento de Acero Inoxidable</h1>
            <p className="about-us__description">
              Somos una empresa líder en la fabricación de equipamiento de acero inoxidable, diseñada para satisfacer las necesidades de la industria gastronómica y comercial. Nos enorgullece ofrecer productos duraderos, funcionales y con acabados de alta calidad.
            </p>
            <p className="about-us__description">
              Con años de experiencia, nos hemos consolidado como un referente en el mercado gracias a nuestro compromiso con la innovación, el diseño y la satisfacción del cliente. Nuestro objetivo es brindar soluciones eficientes y personalizadas que superen las expectativas.
            </p>
            <h4 className="about-us__highlight">"ADQUIERE TU EQUIPAMIENTO DE ACERO INOXIDABLE CON NOSOTROS"</h4>
            <div className="about-us__guarantee">
              <div className="about-us__progress-bar">
                <div
                  className="about-us__progress-bar-fill"
                  style={{ width: `${progress}%` }}
                >
                  <span className="about-us__progress-span">Garantía del {progress}% de satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="accordion-container">
        <div className="acordion-animacion-title">
          <h1 className="accordion-title">Preguntas Frecuentes</h1>
          <Ball />
        </div>

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