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
    const [productosDestacados, setProductosDestacados] = useState([])
    useEffect(() => {
        const productos_destacados = [
            {
                id: 1,
                id_categoria: 234,
                imagen: imagen1,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 250.0,
                rating: 4,
            },
            {
                id: 2,
                id_categoria: 234,
                imagen: imagen2,
                descripcion: "cocina de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 3,
                id_categoria: 234,
                imagen: imagen3,
                descripcion: "mesa de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 4,
                id_categoria: 234,
                imagen: imagen4,
                descripcion: "fredoras de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 5,
            },
            {
                id: 5,
                id_categoria: 234,
                imagen: imagen1,
                descripcion: "escurridores de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 1,
            },
            {
                id: 6,
                id_categoria: 234,
                imagen: imagen2,
                descripcion: "lavaderos de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 2,
            },
            {
                id: 7,
                id_categoria: 234,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 3,
            },
            {
                id: 8,
                id_categoria: 234,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 9,
                id_categoria: 234,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 10,
                id_categoria: 234,
                imagen: imagen2,
                descripcion: "Refrigeradora de gran capacidad con acabado premium.",
                precio: 1500.0,
                rating: 4,
            },
            {
                id: 11,
                id_categoria: 234,
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
                    { id: 101, producto: 'Cocina de gas',},
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
                    { id: 201, producto: 'Refrigerador industrial',},
                    { id: 202, producto: 'Congelador horizontal',},
                    { id: 203, producto: 'Congelador vertical' },
                    { id: 204, producto: 'Vitrina refrigerada' },
                ]
            },
            {
                id: 3,
                nombre: 'Línea Neutro',
                descripcion: [
                    { id: 301, producto: 'Mesa de trabajo',},
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

    const datos = (item) => {
        console.log(item.productos_destacados)
        setProductosDestacados(item.productos_destacados)
    }

    // Manejador de cambio de página
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // Determina los elementos visibles según la página actual
    const productosDestacadosReal = productosDestacados.slice(first, first + rows);

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
                            <h4>VER TODO</h4>
                        </div>
                        <div className="contenedor-articulos-acordeon">
                            <div className="contenedor-articulos-acordeon-acordeon">
                                <h4>FILTROS</h4>
                                <Ball />
                            </div>
                            <div className="accordion-container-products">
                                {productos.map((linea, index) => (
                                    <div key={linea.id} className="accordion-item-products">
                                        <div className="accordion-header-products" onClick={() => toggleAccordion(index)}>
                                            <h5>{linea.nombre}</h5>
                                            <i className={`pi ${activeIndex === index ? 'pi-minus' : 'pi-plus'}`}></i>
                                        </div>
                                        <div
                                            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
                                        >
                                            {linea.descripcion.map((producto) => (
                                                <a key={producto.id} className="accordion-link" onClick={() => datos(producto)}>
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
                        {productosDestacadosReal.map((producto, index) => (
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
                                    <button className="home__products__btn" onClick={() => setVisible(true)}>
                                        <i className="pi pi-eye"></i> Ver
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="contenedor-paginator-first">
                            <Paginator
                                first={first}
                                rows={rows}
                                totalRecords={productosDestacados.length}
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