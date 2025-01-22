import { useState, useEffect } from "react";
import './Products.css';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { Ball } from "../../components/Ball/Ball";
import { NavLink } from "react-router-dom";
import { Paginator } from 'primereact/paginator';
import { Dialog } from 'primereact/dialog';
import imagen1 from '../../assets/inicio/uno.jpg';
import imagen2 from '../../assets/inicio/dos.jpg';
import imagen3 from '../../assets/inicio/tres.jpg';
import imagen4 from '../../assets/inicio/cuatro.jpg';

//Archivos de parrilas
import parrilla1 from '../../assets/linea_calor/parrillas/parrilla1.webp';
import parrilla2 from '../../assets/linea_calor/parrillas/parrilla2.webp';
import parrilla3 from '../../assets/linea_calor/parrillas/parrilla3.png';
import parrilla4 from '../../assets/linea_calor/parrillas/parrilla4.jpg';

//Archivos de freidoras
import freidora1 from '../../assets/linea_calor/freidoras/freidora1.jpg';
import freidora2 from '../../assets/linea_calor/freidoras/freidora2.jpg';
import freidora3 from '../../assets/linea_calor/freidoras/freidora3.jpg';
import freidora4 from '../../assets/linea_calor/freidoras/freidora4.jpg';
import freidora5 from '../../assets/linea_calor/freidoras/freidora5.jpg';
import freidora6 from '../../assets/linea_calor/freidoras/freidora6.png';

//archivo de brosteras
import brostera1 from '../../assets/linea_calor/brosteras/brostera1.png';
import brostera2 from '../../assets/linea_calor/brosteras/brostera2.png';
import brostera3 from '../../assets/linea_calor/brosteras/brostera3.png';
import brostera4 from '../../assets/linea_calor/brosteras/brostera4.png';

//Archivos para cocinas
import cocina1 from '../../assets/linea_calor/cocinas/cocina1.jpg';
import cocina2 from '../../assets/linea_calor/cocinas/cocina2.png';
import cocina3 from '../../assets/linea_calor/cocinas/cocina3.png';
import cocina4 from '../../assets/linea_calor/cocinas/cocina4.jpg';
import cocina5 from '../../assets/linea_calor/cocinas/cocina5.jpg';
import cocina6 from '../../assets/linea_calor/cocinas/cocina6.jpg';
import cocina7 from '../../assets/linea_calor/cocinas/cocina7.jpg';
import cocina8 from '../../assets/linea_calor/cocinas/cocina8.png';
import cocina9 from '../../assets/linea_calor/cocinas/cocina9.png';
import cocina10 from '../../assets/linea_calor/cocinas/cocina10.png';
import cocina11 from '../../assets/linea_calor/cocinas/cocina11.png';
import cocina12 from '../../assets/linea_calor/cocinas/cocina12.jpg';

//archivos de hornos
import horno1 from '../../assets/linea_calor/hornos/horno1.jpg';
import horno2 from '../../assets/linea_calor/hornos/horno2.jpg';
import horno3 from '../../assets/linea_calor/hornos/horno3.jpg';
import horno4 from '../../assets/linea_calor/hornos/horno4.jpg';
import horno5 from '../../assets/linea_calor/hornos/horno5.webp';
import horno6 from '../../assets/linea_calor/hornos/horno6.jpg';

//Mesas de trabajo
import mesa1 from '../../assets/linea_neutro/mesas/mesa1.jpg';
import mesa2 from '../../assets/linea_neutro/mesas/mesa2.webp';
import mesa3 from '../../assets/linea_neutro/mesas/mesa3.webp';
import mesa4 from '../../assets/linea_neutro/mesas/mesa4.webp';
import mesa5 from '../../assets/linea_neutro/mesas/mesa5.webp';
import mesa6 from '../../assets/linea_neutro/mesas/mesa6.webp';
import mesa7 from '../../assets/linea_neutro/mesas/mesa7.webp';
import mesa8 from '../../assets/linea_neutro/mesas/mesa8.jpg';
import mesa9 from '../../assets/linea_neutro/mesas/mesa9.jpg';

//Lavaderos
import lavadero1 from '../../assets/linea_neutro/lavaderos/lavadero1.jpg';
import lavadero2 from '../../assets/linea_neutro/lavaderos/lavadero2.jpg';
import lavadero3 from '../../assets/linea_neutro/lavaderos/lavadero3.jpg';
import lavadero4 from '../../assets/linea_neutro/lavaderos/lavadero4.jpg';
import lavadero5 from '../../assets/linea_neutro/lavaderos/lavadero5.jpg';
import lavadero6 from '../../assets/linea_neutro/lavaderos/lavadero6.jpg';

//Refrigeracion
import refri1 from '../../assets/linea_frio/refrigeraciones/refri1.jpg';
import refri2 from '../../assets/linea_frio/refrigeraciones/refri2.jpg';
import refri3 from '../../assets/linea_frio/refrigeraciones/refri3.png';
import refri4 from '../../assets/linea_frio/refrigeraciones/refri4.webp';
import refri5 from '../../assets/linea_frio/refrigeraciones/refri5.webp';
import refri6 from '../../assets/linea_frio/refrigeraciones/refri6.webp';
//Vitrinas
import vitri1 from '../../assets/linea_frio/vitrinas/vitrina1.webp';
import vitri2 from '../../assets/linea_frio/vitrinas/vitrina2.jpg';
import vitri3 from '../../assets/linea_frio/vitrinas/vitrina3.webp';
import vitri4 from '../../assets/linea_frio/vitrinas/vitrina4.webp';
import vitri5 from '../../assets/linea_frio/vitrinas/vitrina5.png';
import vitri6 from '../../assets/linea_frio/vitrinas/vitrina6.png';

export const Products = () => {
    // paginatos 
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(9);

    // Estilos para la visibilidad del modal
    const [visible, setVisible] = useState(false);

    // Productos destacados
    const [verificarProducto, setVerificarProducto] = useState(null);
    const [productosDestacados, setProductosDestacados] = useState([])
    useEffect(() => {
        const productos_destacados = [
            {
                id: 1,
                id_categoria: 102,
                imagen: brostera1,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 2,
                id_categoria: 102,
                imagen: brostera2,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 3,
                id_categoria: 102,
                imagen: brostera3,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 4,
                id_categoria: 102,
                imagen: brostera4,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 5,
                id_categoria: 103,
                imagen: cocina1,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 6,
                id_categoria: 103,
                imagen: cocina2,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 7,
                id_categoria: 103,
                imagen: cocina3,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 8,
                id_categoria: 103,
                imagen: cocina4,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 9,
                id_categoria: 103,
                imagen: cocina5,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 10,
                id_categoria: 103,
                imagen: cocina6,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 11,
                id_categoria: 103,
                imagen: cocina7,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 12,
                id_categoria: 103,
                imagen: cocina8,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 13,
                id_categoria: 103,
                imagen: cocina9,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 103,
                imagen: cocina10,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 15,
                id_categoria: 103,
                imagen: cocina11,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 16,
                id_categoria: 103,
                imagen: cocina12,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 17,
                id_categoria: 104,
                imagen: horno1,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 18,
                id_categoria: 104,
                imagen: horno2,
                descripcion: "mesa de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 19,
                id_categoria: 104,
                imagen: horno3,
                descripcion: "freidoras de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 20,
                id_categoria: 104,
                imagen: horno4,
                descripcion: "escurridores de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 1,
            },
            {
                id: 21,
                id_categoria: 104,
                imagen: horno5,
                descripcion: "lavaderos de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 2,
            },
            {
                id: 22,
                id_categoria: 104,
                imagen: horno6,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 3,
            },
            {
                id: 24,
                id_categoria: 101,
                imagen: freidora1,
                descripcion: "Freidora automatica",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 11,
                id_categoria: 101,
                imagen: freidora2,
                descripcion: "Freidora automatica",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 12,
                id_categoria: 101,
                imagen: freidora3,
                descripcion: "Freidora automatica",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 13,
                id_categoria: 101,
                imagen: freidora4,
                descripcion: "Freidora automatica",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 101,
                imagen: freidora5,
                descripcion: "Freidora automatica",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 15,
                id_categoria: 101,
                imagen: freidora6,
                descripcion: "Freidora automatica",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 11,
                id_categoria: 105,
                imagen: parrilla1,
                descripcion: "Parrilla Premium Grande 2 en 1",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 12,
                id_categoria: 105,
                imagen: parrilla2,
                descripcion: "Parrilla La Carbonera Grill 350 Full Acero Inoxidable 201",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 13,
                id_categoria: 105,
                imagen: parrilla3,
                descripcion: "Parrilla De Acero Inoxidable (sistema De Elevacion)",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 105,
                imagen: parrilla4,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },

            {
                id: 14,
                id_categoria: 201,
                imagen: mesa1,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa2,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa3,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa4,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa5,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa6,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa7,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa8,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 201,
                imagen: mesa9,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 202,
                imagen: lavadero1,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 202,
                imagen: lavadero2,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 202,
                imagen: lavadero3,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 202,
                imagen: lavadero4,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 202,
                imagen: lavadero5,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 202,
                imagen: lavadero6,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },

            {
                id: 14,
                id_categoria: 301,
                imagen: refri1,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 301,
                imagen: refri2,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 301,
                imagen: refri3,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 301,
                imagen: refri4,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 301,
                imagen: refri5,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 301,
                imagen: refri6,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 302,
                imagen: vitri1,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 302,
                imagen: vitri2,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 302,
                imagen: vitri3,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 302,
                imagen: vitri4,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 302,
                imagen: vitri5,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 14,
                id_categoria: 302,
                imagen: vitri6,
                descripcion: "Parrilla A Carbon Acero Inoxidable Reforzada De Empotrar",
                precio: 1500.0,
                rating: 4,
            },
        ]
        setProductosDestacados(productos_destacados)
    }, [])

    //Rutas de los filtros
    const [activeIndex, setActiveIndex] = useState(null);
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const datos = [
            {
                id: 1,
                nombre: 'Línea Calor',
                descripcion: [
                    { id: 101, producto: 'Freidoras Industriales' },
                    { id: 102, producto: 'Brosteras Industriales' },
                    { id: 103, producto: 'Cocinas Industriales' },
                    { id: 104, producto: 'Hornos Industriales' },
                    { id: 105, producto: 'Parrillas' },
                ]
            },
            {
                id: 2,
                nombre: 'Línea Neutro',
                descripcion: [
                    { id: 201, producto: 'Mesas de trabajo' },
                    { id: 202, producto: 'Lavaderos' },
                ]
            },
            {
                id: 3,
                nombre: 'Línea Frío',
                descripcion: [
                    { id: 301, producto: 'Equipos de refrigeración' },
                    { id: 302, producto: 'Vitrinas exhibidoras' },
                ]
            },
        ];
        setProductos(datos);
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    // Manejador de cambio de página
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // Determina los elementos visibles según la página actual
    const productosFiltrados = verificarProducto
        ? productosDestacados.filter(producto => producto.id_categoria === verificarProducto)
        : productosDestacados;

    const productosDestacadosReal = productosFiltrados.slice(first, first + rows);

    const datos = (item) => {
        console.log(item.id);
        setVerificarProducto(item.id);
    }

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
            <div className="products">
                <div className="products__content">
                    <h1>NUESTROS PRODUCTOS</h1>
                    <Breadcrumb />
                </div>
            </div>
            <div className="contenedor-articulos">
                <div className="contenedor-sub-articulos">
                    <div className="contenedor-articulos-categorias">
                        <div className="contenedor-encabesado-categorias">
                            <button onClick={() => setVerificarProducto(null)} className="encabesado-categorias-btn">VER TODO</button>
                        </div>
                        <div className="contenedor-articulos-acordeon">
                            <div className="contenedor-articulos-acordeon-acordeon">
                                <h4>FILTROS</h4>
                                <Ball />
                            </div>
                            <div className="accordion-container-products">
                                {productos.map((linea, index) => (
                                    <div key={index} className="accordion-item-products">
                                        <div className="accordion-header-products" onClick={() => toggleAccordion(index)}>
                                            <h5>{linea.nombre}</h5>
                                            <i className={`pi ${activeIndex === index ? 'pi-minus' : 'pi-plus'}`}></i>
                                        </div>
                                        <div
                                            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
                                        >
                                            {linea.descripcion.map((producto, index) => (
                                                <a key={index} className="accordion-link" onClick={() => datos(producto)}>
                                                    {producto.producto}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="contenedor-acordeon-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor-articulos-productos-1">
                        <div className="contenedor-articulos-productos">
                            {productosDestacadosReal.map((producto, index) => (
                                <div className="home__products" key={index}>
                                    <div className="home__product">
                                        <img
                                            src={producto.imagen || '/path/to/default-image.jpg'}
                                            alt={`Producto ${producto.descripcion || 'sin descripción'}`}
                                        />
                                    </div>
                                    <div className="home__products__descripcion">
                                        <p className="home__products__description">{producto.descripcion || 'Sin descripción disponible'}</p>
                                        <p className="home__products__price">S/. {producto.precio ? producto.precio.toFixed(2) : '0.00'}</p>
                                        <div className="home__products__rating">
                                            <i className="pi pi-star-fill"></i>
                                            <i className="pi pi-star-fill"></i>
                                            <i className="pi pi-star-fill"></i>
                                            <i className="pi pi-star-fill"></i>
                                            <i className="pi pi-star-o"></i>
                                        </div>
                                        <button className="home__products__btn" onClick={() => enviarMensajeWhatsApp()}>
                                            <i className="pi pi-whatsapp"></i> Cotizar
                                        </button>
                                        <button className="home__products__btn" onClick={() => setVisible(true)}>
                                            <i className="pi pi-eye"></i> Ver
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Hola mundo de laa mara villas
                </p>
            </Dialog>
            <div style={{ minHeight: '10vh', padding:'20px 0' }}>
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={productosFiltrados.length}
                    rowsPerPageOptions={[3, 6, 9]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
}