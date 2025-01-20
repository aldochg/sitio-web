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

export const Products = () => {
    // paginatos 
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(8);

    // Estilos para la visibilidad del modal
    const [visible, setVisible] = useState(false);

    // Productos destacados
    const [verificarProducto, setVerificarProducto] = useState(null);
    const [productosDestacados, setProductosDestacados] = useState([])
    useEffect(() => {
        const productos_destacados = [
            {
                id: 1,
                id_categoria: 101,
                imagen: imagen1,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 2,
                id_categoria: 101,
                imagen: imagen2,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 3,
                id_categoria: 301,
                imagen: imagen3,
                descripcion: "mesa de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 4,
                id_categoria: 104,
                imagen: imagen4,
                descripcion: "freidoras de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 5,
                id_categoria: 304,
                imagen: imagen1,
                descripcion: "escurridores de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 1,
            },
            {
                id: 6,
                id_categoria: 303,
                imagen: imagen2,
                descripcion: "lavaderos de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 2,
            },
            {
                id: 7,
                id_categoria: 201,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 3,
            },
            {
                id: 8,
                id_categoria: 201,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 9,
                id_categoria: 201,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 10,
                id_categoria: 201,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 11,
                id_categoria: 201,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
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
                    { id: 101, producto: 'Cocina de gas', },
                    { id: 102, producto: 'Horno convector' },
                    { id: 103, producto: 'Horno pizzero' },
                    { id: 104, producto: 'Freidora covencional' },
                    { id: 105, producto: 'Freidora automatica' },
                ]
            },
            {
                id: 2,
                nombre: 'Línea Frío',
                descripcion: [
                    { id: 201, producto: 'Refrigerador industrial', },
                    { id: 202, producto: 'Congelador horizontal', },
                    { id: 203, producto: 'Congelador vertical' },
                    { id: 204, producto: 'Vitrina refrigerada' },
                ]
            },
            {
                id: 3,
                nombre: 'Línea Neutro',
                descripcion: [
                    { id: 301, producto: 'Mesa de trabajo', },
                    { id: 302, producto: 'Mesa de trabajo con repisa' },
                    { id: 303, producto: 'Lavadero de un pozo' },
                    { id: 304, producto: 'Escurridor de platos' },
                    { id: 305, producto: 'Estantería de acero inoxidable' },
                    { id: 307, producto: 'Campana extractora' },
                    { id: 307, producto: 'Pelador de papas' },
                    { id: 307, producto: 'Exprimidor de citricos' },
                ]
            }
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
                    <div className="contenedor-articulos-productos">
                        <div className="contenedor-articulos-productos">
                            {productosDestacadosReal.map((producto) => (
                                <div className="home__products" key={producto.id}>
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
                        <div className="contenedor-paginator-first">
                            <Paginator
                                first={first}
                                rows={rows}
                                totalRecords={productosFiltrados.length}
                                rowsPerPageOptions={[2, 4, 8]}
                                onPageChange={onPageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Hola mundo de laa mara villas
                </p>
            </Dialog>
        </div>
    );
}