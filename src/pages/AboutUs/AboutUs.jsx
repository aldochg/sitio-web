import { useState, useEffect, useRef } from "react";
import './AboutUs.css';
import sobre_nosotros1 from '../../assets/sobre_nosotros1.png';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import img_why from '../../assets/acero1.jpg'
import { CarruselEmpresa } from "../../components/CarruselEmpresa/CarruselEmpresa";

import por_que1 from '../../assets/por_que_elegirnos/por_que1.jpg';
import por_que2 from '../../assets/por_que_elegirnos/por_que2.jpg';
import por_que3 from '../../assets/por_que_elegirnos/por_que3.jpg';
import por_que4 from '../../assets/por_que_elegirnos/por_que4.webp';
import por_que5 from '../../assets/por_que_elegirnos/por_que5.webp';
import por_que6 from '../../assets/por_que_elegirnos/por_que6.jpg';
import por_que7 from '../../assets/por_que_elegirnos/por_que7.jpg';


export const AboutUs = () => {

    // Datos para galeria de por que elegirnos
    const [galeri, setGaleri] = useState([]);

    useEffect(() => {
        const data = [
            {
                id: 1,
                img: por_que1,
                title: 'Fabricación de calidad',
                descripcion: 'Contamos con más de 20 años de experiencia en la fabricación de equipos gastronómicos de acero inoxidable, garantizando la durabilidad y el rendimiento de nuestros productos en cualquier entorno comercial.'
            },
            {
                id: 2,
                img: por_que2,
                title: 'Innovación constante',
                descripcion: 'Estamos comprometidos con la innovación. Nuestros diseños son modernos, eficientes y adaptados a las últimas necesidades del mercado, mejorando la productividad de los negocios de nuestros clientes.'
            },
            {
                id: 3,
                img: por_que3,
                title: 'Atención personalizada',
                descripcion: 'Ofrecemos atención al cliente 24/7 para resolver cualquier duda o consulta. Nuestro equipo está siempre disponible para ayudar con la elección del equipo adecuado y la optimización de los procesos.'
            },
            {
                id: 4,
                img: por_que4,
                title: 'Entrega rápida y confiable',
                descripcion: 'Nos comprometemos con tiempos de entrega rápidos, asegurando que tus pedidos lleguen en el plazo acordado y en perfectas condiciones, sin comprometer la calidad del producto.'
            },
            {
                id: 5,
                img: por_que5,
                title: 'Sostenibilidad',
                descripcion: 'Nuestros procesos de fabricación están enfocados en la sostenibilidad, utilizando materiales reciclables y prácticas eco-amigables para reducir el impacto ambiental en la industria.'
            },
            {
                id: 6,
                img: por_que6,
                title: 'Precios competitivos',
                descripcion: 'Ofrecemos precios altamente competitivos sin sacrificar la calidad de nuestros productos. Trabajamos para garantizar la mejor relación calidad-precio para tu negocio.'
            },
        ];
    
        setGaleri(data);
    }, []);

    const [count, setCount] = useState(0); // Estado inicial del contador
    const [isVisible, setIsVisible] = useState(false); // Estado para detectar visibilidad
    const target = 5000; // Número objetivo
    const increment = 50; // Incremento en cada paso
    const intervalTime = 20; // Tiempo entre incrementos
    const counterRef = useRef(null); // Referencia al elemento del contador

    // Función para manejar visibilidad del elemento
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Actualiza si el elemento es visible
            },
            { threshold: 0.1 } // Detecta cuando al menos el 10% del elemento es visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) observer.unobserve(counterRef.current);
        };
    }, []);

    // Incrementa el contador cuando el elemento es visible
    useEffect(() => {
        if (!isVisible || count >= target) return; // Solo cuenta si es visible y no alcanzó el objetivo

        const interval = setInterval(() => {
            setCount((prevCount) => {
                const nextValue = prevCount + increment;
                return nextValue >= target ? target : nextValue; // Evita exceder el objetivo
            });
        }, intervalTime);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [isVisible, count]);

    // Reinicia el contador si vuelve a entrar a la pantalla
    useEffect(() => {
        if (!isVisible) {
            setCount(0); // Reinicia cuando deja de ser visible
        }
    }, [isVisible]);

    return (
        <div>
            <div className="about-us">
                <div className="about__content">
                    <h1 className="about__content-title">SOBRE NOSOTROS</h1>
                    <Breadcrumb />
                </div>
            </div>
            {/* card para mensages */}
            <div className="card__message__contenedor" >
                <div className="card__message__sub__contenedor">
                    <div className="card__mensages" >
                        <div className="card__message__icons">
                            <div className="card__message__i">
                                <i className="pi pi-id-card"></i>
                            </div>
                        </div>
                        <div className="card__message__info">
                            <h1 className="card__message__title">Calidad Garantizada</h1>
                            <p className="card__message__text">Nos esforzamos por ofrecer productos de acero inoxidable con acabados impecables, duraderos y resistentes, diseñados para superar las expectativas de nuestros clientes.</p>
                            <button className="card__message__button">Leer mas<i className="pi pi-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="card__mensages">
                        <div className="card__message__icons">
                            <div className="card__message__i">
                                <i className="pi pi-chart-scatter"></i>
                            </div>
                        </div>
                        <div className="card__message__info">
                            <h1 className="card__message__title">Experiencia</h1>
                            <p className="card__message__text">Con años de trayectoria en el sector, nuestra experiencia nos permite entender las necesidades de nuestros clientes y brindar soluciones confiables y eficientes.</p>
                            <button className="card__message__button">Leer mas<i className="pi pi-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="card__mensages">
                        <div className="card__message__icons">
                            <div className="card__message__i">
                                <i className="pi pi-cog"></i>
                            </div>
                        </div>
                        <div className="card__message__info">
                            <h1 className="card__message__title">Soporte Técnico</h1>
                            <p className="card__message__text">Contamos con un equipo dedicado que te acompañará en todo momento, desde la planificación hasta el mantenimiento de tu equipamiento.</p>
                            <button className="card__message__button">Leer mas<i className="pi pi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-us__container">
    <div className="about-us__content">
        <div className="about-us__image">
            <img src={sobre_nosotros1} alt="Proceso de fabricación" />
        </div>
        <div className="about-us__text">
            <p className="about-us__subtitle">Nuestro Proceso de Fabricación</p>
            <h1 className="about-us__title">Tecnología y Mano de Obra Especializada</h1>
            <p className="about-us__description">
                En [Nombre de tu empresa], nuestro proceso de fabricación se basa en la combinación de la tecnología más avanzada y la experiencia de nuestro equipo humano. Desde el diseño hasta la entrega del producto final, cada etapa se ejecuta con precisión para garantizar productos de la más alta calidad.
            </p>
            <p className="about-us__description">
                Utilizamos maquinaria de última generación, materiales certificados y contamos con un riguroso control de calidad para ofrecer productos que superen las expectativas de nuestros clientes.
            </p>
        </div>
    </div>
</div>


            <div className="why-us">
        <div className="why-us-sub">
            <div className="why-us-title">
                <h1>¿Por qué elegirnos?</h1>
            </div>
            <div className="why-us-galeri">
                {galeri.map((data, index) => (
                    <div className="why-us-galeri-img" key={index}>
                        <div className="">
                            <div className="why-us-galeri-img-verdadero">
                                <img src={data.img} alt={`Galería ${index + 1}`} />
                                <div className="overlay">
                                    <p>{data.descripcion}</p>
                                </div>
                            </div>
                            <div className="why-us-title-card">
                                <div className="why-us-title-card-title">
                                    <h4>{data.title}</h4>
                                </div>
                                <div className="why-us-title-card-icon">
                                    <i className="pi pi-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

            {/* Numeros de la empresa */}
            <div className="contenedor__numeros__general">
                <div className="contenedor__numeros__subgeneral">
                    <div className="contenedor__numeros">
                        <div className="contenedor__datos">
                            <div className="contenedor__general__icons">
                                <div className="contenedor__general__i">
                                    <i className="pi pi-chart-scatter"></i>
                                </div>
                            </div>
                            <div className="contendor__general__info">
                                <h1 className="contenedor__general__title" ref={counterRef}>{count.toLocaleString()} +</h1>
                                <p className="contenedor__general__text">Cantidad de Ventas</p>
                            </div>
                        </div>
                        <div className="contenedor__datos">
                            <div className="contenedor__general__icons">
                                <div className="contenedor__general__i">
                                    <i className="pi pi-discord"></i>
                                </div>
                            </div>
                            <div className="contendor__general__info">
                                <h1 className="contenedor__general__title">10,000+</h1>
                                <p className="contenedor__general__text">Cantidad de Clientes</p>
                            </div>
                        </div>
                        <div className="contenedor__datos">
                            <div className="contenedor__general__icons">
                                <div className="contenedor__general__i">
                                    <i className="pi pi-facebook"></i>
                                </div>
                            </div>
                            <div className="contendor__general__info">
                                <h1 className="contenedor__general__title">5,000+</h1>
                                <p className="contenedor__general__text">Proyectos Realizados</p>
                            </div>
                        </div>
                        <div className="contenedor__datos">
                            <div className="contenedor__general__icons">
                                <div className="contenedor__general__i">
                                    <i className="pi pi-twitch"></i>
                                </div>
                            </div>
                            <div className="contendor__general__info">
                                <h1 className="contenedor__general__title">15 Años</h1>
                                <p className="contenedor__general__text">Años de Experiencia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nuestra mision y vision y objetivos */}
            <div className="mision-vision__content">
                <div className="mision-vision">
                    <div className="mision-vision__image1">
                        <h1 className="mision__title">MISIÓN</h1>
                        <p className="mision__text">Nos dedicamos a diseñar y fabricar equipamiento de acero inoxidable que combina funcionalidad, durabilidad y estética para satisfacer las necesidades de nuestros clientes en los sectores gastronómico, hospitalario e industrial. Nuestro compromiso es brindar productos innovadores y servicios personalizados que contribuyan al éxito de nuestros clientes.</p>
                    </div>
                    <div className="mision-vision__image2">
                        <h1 className="vision__title">VISIÓN</h1>
                        <p className="vision__text">Aspiramos a consolidarnos como la empresa de referencia en el mercado internacional, reconocida por nuestra calidad, innovación y sostenibilidad. Queremos ser el aliado estratégico de empresas y profesionales, ofreciendo soluciones adaptadas a las demandas del futuro.</p>
                    </div>
                    <div className="mision-vision__image3">
                        <h1 className="valores__title">VALORES</h1>
                        <p className="valores__text">Nos guiamos por la calidad, la innovación y el compromiso con nuestros clientes. Priorizamos la sostenibilidad en cada producto, trabajamos en equipo y actuamos con integridad para superar expectativas y construir relaciones de confianza.</p>
                    </div>
                </div>
            </div>

            {/* Por que elegirnos */}
            <CarruselEmpresa />

        </div>
    );
}