import { useState, useEffect } from "react";
import './Home.css';
import { SliderAutomatico } from "../../components/SliderAutomatico/SliderAutomatico";
import { Ball } from "../../components/Ball/Ball";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TestimonialsCarousel } from "../../components/CarruselTestimonio/CarruselTestimonio";

import img_why from '../../assets/acero1.jpg'

import { Carousel } from 'primereact/carousel';

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
      descripcion: "Refrigeradora de gran capacidad con acabado premium y eficiencia energética clase A+.",
      precio: 1200.0,
      rating: 4,
    },
    {
      id: 2,
      imagen: imagen2,
      descripcion: "Horno eléctrico multifunción con temporizador digital y fácil limpieza.",
      precio: 750.0,
      rating: 5,
    },
    {
      id: 3,
      imagen: imagen3,
      descripcion: "Cocina industrial de acero inoxidable con 6 quemadores de alto rendimiento.",
      precio: 2500.0,
      rating: 5,
    },
    {
      id: 4,
      imagen: imagen4,
      descripcion: "Freidora doble con termostato ajustable para uso profesional.",
      precio: 900.0,
      rating: 4,
    },
    {
      id: 5,
      imagen: imagen5,
      descripcion: "Lavavajillas compacto y eficiente para cocinas pequeñas.",
      precio: 650.0,
      rating: 3,
    },
    {
      id: 6,
      imagen: imagen1,
      descripcion: "Escurridor de acero inoxidable con diseño robusto y fácil montaje.",
      precio: 250.0,
      rating: 3,
    },
    {
      id: 7,
      imagen: imagen1,
      descripcion: "Batidora planetaria profesional con capacidad de 10 litros.",
      precio: 1500.0,
      rating: 5,
    },
    {
      id: 8,
      imagen: imagen1,
      descripcion: "Congelador horizontal de gran capacidad para uso comercial.",
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

  //Codigo para manejar las categorias de los productos.
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const data = [
      {
        id: 1,
        image: imagen1,
        title: 'FREIDORAS',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Freidora a gas',
            descripcion: 'Freidora industrial a gas, ideal para restaurantes y negocios de comida rápida.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Freidora automatica',
            descripcion: 'Freidora eléctrica de acero inoxidable, fácil de limpiar y eficiente.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Freidora convencional',
            descripcion: 'Freidora doble para manejar múltiples preparaciones al mismo tiempo.'
          },
        ]
      },
      {
        id: 2,
        image: img_why,
        title: 'MESAS',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Mesa de trabajo',
            descripcion: 'Mesa de trabajo de acero inoxidable con superficie amplia.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Mesa con estante',
            descripcion: 'Mesa de acero inoxidable con estante inferior para almacenamiento.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Mesa con ruedas',
            descripcion: 'Mesa de acero inoxidable con ruedas para mayor movilidad.'
          },
        ]
      },
      {
        id: 3,
        image: img_why,
        title: 'COCINAS',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Cocina a gas',
            descripcion: 'Cocina industrial a gas con múltiples quemadores.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Cocina eléctrica',
            descripcion: 'Cocina eléctrica de alto rendimiento para uso profesional.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Cocina con horno',
            descripcion: 'Cocina a gas con horno integrado para mayor funcionalidad.'
          },
        ]
      },
      {
        id: 4,
        image: img_why,
        title: 'ESCURRIDORES',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Escurridor de platos',
            descripcion: 'Escurridor de platos compacto y resistente.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Escurridor grande',
            descripcion: 'Escurridor grande de acero inoxidable para uso industrial.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Escurridor de vasos',
            descripcion: 'Escurridor especializado para secar vasos rápidamente.'
          },
        ]
      },
      {
        id: 5,
        image: img_why,
        title: 'HORNOS',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Horno eléctrico',
            descripcion: 'Horno eléctrico de convección para una cocción uniforme.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Horno pizzero',
            descripcion: 'Horno a gas de alta capacidad para panaderías.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Horno combinado',
            descripcion: 'Horno combinado con opciones de vapor y convección.'
          },
        ]
      },
      {
        id: 6,
        image: img_why,
        title: 'LAVADEROS',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Lavadero sencillo',
            descripcion: 'Lavadero de acero inoxidable con un solo compartimento.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Lavadero doble',
            descripcion: 'Lavadero de acero inoxidable con dos compartimentos.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Lavadero con escurridor',
            descripcion: 'Lavadero con espacio lateral para escurrir utensilios.'
          },
        ]
      },
      {
        id: 7,
        image: img_why,
        title: 'REFRIGERACIÓN',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Refrigerador vertical',
            descripcion: 'Refrigerador vertical de acero inoxidable para conservar alimentos.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Vitrina refrigerada',
            descripcion: 'Vitrina refrigerada para exhibición de alimentos.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Refrigerador de bar',
            descripcion: 'Refrigerador compacto para bares y cafeterías.'
          },
        ]
      },
      {
        id: 8,
        image: img_why,
        title: 'EXTRACTORES',
        item: [
          {
            id: 1,
            img: img_why,
            title: 'Extractor de humo',
            descripcion: 'Extractor industrial para eliminar humo de cocinas.'
          },
          {
            id: 2,
            img: img_why,
            title: 'Extractor de olores',
            descripcion: 'Extractor diseñado para eliminar olores de cocinas industriales.'
          },
          {
            id: 3,
            img: img_why,
            title: 'Extractor de grasa',
            descripcion: 'Extractor eficiente para capturar grasas suspendidas en el aire.'
          },
        ]
      },
    ];
    
    setCategorias(data);
  }, []);

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
        img: img_why,
        title: 'Mesas de acero',
        descripcion: 'Mesa para el escritorio y para hacer trabajos comunes en el estudio.'
      },
      {
        id: 1,
        img: img_why,
        title: 'Mesas de acero',
        descripcion: 'Mesa para el escritorio y para hacer trabajos comunes en el estudio.'
      },
      {
        id: 1,
        img: img_why,
        title: 'Mesas de acero',
        descripcion: 'Mesa para el escritorio y para hacer trabajos comunes en el estudio.'
      },
      {
        id: 1,
        img: img_why,
        title: 'Mesas de acero',
        descripcion: 'Mesa para el escritorio y para hacer trabajos comunes en el estudio.'
      },
      {
        id: 1,
        img: img_why,
        title: 'Mesas de acero',
        descripcion: 'Mesa para el escritorio y para hacer trabajos comunes en el estudio.'
      },
      {
        id: 1,
        img: img_why,
        title: 'Mesas de acero',
        descripcion: 'Mesa para el escritorio y para hacer trabajos comunes en el estudio.'
      },
    ]

    setGaleri(data)
  }, []);

  const productTemplate = (product) => {
    const isActive = activeId === product.id; // Verificar si este producto está activo

    //Funcion para cambiar las categorias
    const getDatos = (data) => {
      console.log(data.item)
      setGaleri(data.item)
    }

    return (
      <div
        key={product.id}
        className={`categoria-container-button surface-border text-center ${isActive ? "active" : ""}`}
        onClick={() => {
          handleClick(product.id); // Llama a la primera función
          getDatos(product); // Llama a la segunda función
        }}// Asignar el id del producto al hacer clic
      >
        <div className="categoria-container-button-sub">
          <img src={product.image} alt={product.name} className="w-8 img-categorias" />
          <div className="categoria-container-button-absoluto">
            <h3>{product.title}</h3>
          </div>
        </div>
      </div>
    );
  };


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
                      <button className="home__container__button"><i className="pi pi-whatsapp"></i>CONTACTANOS</button>
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
          <div>
            <h1>Categorias</h1>
          </div>
          <div>
            <Carousel value={categorias} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} showIndicators={false} circular autoplayInterval={3000} />
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
      <h4 className="about-us__highlight">ADQUIERE TU EQUIPAMIENTO DE ACERO INOXIDABLE CON NOSOTROS</h4>
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