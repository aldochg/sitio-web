import { useState, useEffect } from "react";
import Marquee from "react-marquee-slider";
import "./SliderAutomatico.css"; // Opcional para estilos

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
export const SliderAutomatico = () => {
  


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

  return (
    <div className="home__sin_descripcion__general">
    <div className="home__sin_descripcion__general__card">
    <div
      className="slider-container"
      onMouseOver={() => setVelocity(0)} // Detener al pasar el mouse
      onMouseOut={() => setVelocity(30)}  // Continuar cuando sale el mouse
    >
      <Marquee velocity={velocity} >
        {[
          <div className="home__sin_descripcion__general" key="1">
            <div className="home__sin_descripcion__general__card">
              {informacionAdicional.map((producto) => (
                <div className="home__info__adicional" key={producto.id}>
                  <div className="home__adicional">
                    <img src={producto.logo} alt={producto.title} />
                  </div>
                  <div className="home__adicional__descripcion">
                    <h4 className="home__adicional__title">{producto.title}</h4>
                    <p className="home__adicional__text">&quot;{producto.descripcion}&quot;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ]}
      </Marquee>
    </div>
    </div>
  </div>

  );
};


