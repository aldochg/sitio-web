import { useState, useEffect } from "react";
import './Products.css';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { Ball } from "../../components/Ball/Ball";
import { Paginator } from 'primereact/paginator';
import { Dialog } from 'primereact/dialog';

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
import freidora7 from '../../assets/linea_calor/freidoras/freidora7.png';
import freidora8 from '../../assets/linea_calor/freidoras/freidora8.png';
import freidora9 from '../../assets/linea_calor/freidoras/freidora9.png';
import freidora10 from '../../assets/linea_calor/freidoras/freidora10.png';

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
import mesa6 from '../../assets/linea_neutro/mesas/mesa6.png';
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
    // Agregar o actualizar la cantidad de producto en el carrito
    const addToCart = (product) => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = storedCart.find((item) => item.id === product.id);

        if (existingProduct) {
            const updatedCart = storedCart.map((item) =>
                item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            storedCart.push({ ...product, cantidad: 1 });
            localStorage.setItem('cart', JSON.stringify(storedCart));
        }
    };

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
                id_categoria: 101,
                imagen: freidora7,
                nombre: 'Freidora Automática a Gas de 1 Poza',
                descripcion: 'Freidora automática a gas con una poza, ideal para restaurantes y negocios de comida rápida. Fabricada en acero inoxidable, garantiza durabilidad y alto rendimiento.',
                precio: 1800.0,
                rating: 4,
            },
            {
                id: 2,
                id_categoria: 101,
                imagen: freidora8,
                nombre: 'Freidora Automática Modelo 4A',
                descripcion: 'Freidora automática modelo 4A, diseñada para un alto volumen de fritura. Su diseño compacto y eficiente es perfecto para optimizar el espacio en la cocina.',
                precio: 2200.0,
                rating: 4.5,
            },
            {
                id: 3,
                id_categoria: 101,
                imagen: freidora9,
                nombre: 'Freidora Automática Industrial Acero Inoxidable 304',
                descripcion: 'Freidora automática industrial construida en acero inoxidable mate 304, resistente a la corrosión y diseñada para uso intensivo en cocinas industriales.',
                precio: 3500.0,
                rating: 4.8,
            },
            {
                id: 4,
                id_categoria: 101,
                imagen: freidora10,
                nombre: 'Freidora Industrial',
                descripcion: 'Freidora industrial de gran capacidad, ideal para negocios que requieren alto rendimiento y eficiencia en la preparación de alimentos fritos.',
                precio: 4000.0,
                rating: 5,
            },
            {
                id: 5,
                id_categoria: 103,
                imagen: cocina1,
                nombre: 'Cocina Mural a Gas en Línea de 2 Quemadores',
                descripcion: 'Cocina mural a gas con 2 quemadores, diseñada para ahorrar espacio y ofrecer alto rendimiento en cocinas comerciales.',
                precio: 1500.0,
                rating: 4.5,
            },
            {
                id: 6,
                id_categoria: 103,
                imagen: cocina2,
                nombre: 'Cocina Industrial Isla de Centro CI 27',
                descripcion: 'Cocina industrial de isla modelo CI 27, perfecta para centros de trabajo en cocinas amplias y de alto tráfico.',
                precio: 4500.0,
                rating: 4.8,
            },
            {
                id: 7,
                id_categoria: 103,
                imagen: cocina3,
                nombre: 'Cocina Isla Industrial HC45',
                descripcion: 'Cocina industrial modelo HC45, diseñada para maximizar la eficiencia en espacios abiertos tipo isla.',
                precio: 4000.0,
                rating: 4.7,
            },
            {
                id: 8,
                id_categoria: 103,
                imagen: cocina4,
                nombre: 'Cocina Industrial de 1 Hornilla',
                descripcion: 'Cocina industrial compacta con 1 hornilla, ideal para espacios pequeños y preparación de platillos específicos.',
                precio: 800.0,
                rating: 4.3,
            },
            {
                id: 9,
                id_categoria: 103,
                imagen: cocina5,
                nombre: 'Cocina Industrial de 1 Hornilla con Chifera',
                descripcion: 'Cocina industrial con 1 hornilla y chifera integrada, perfecta para la preparación de salteados y comidas rápidas.',
                precio: 1200.0,
                rating: 4.6,
            },
            {
                id: 10,
                id_categoria: 103,
                imagen: cocina6,
                nombre: 'Cocina Chifera de 1 Hornilla',
                descripcion: 'Cocina chifera con una hornilla, diseñada especialmente para platos salteados en cocinas comerciales.',
                precio: 1000.0,
                rating: 4.4,
            },
            {
                id: 11,
                id_categoria: 103,
                imagen: cocina7,
                nombre: 'Cocina Industrial de 2 Hornillas con Chifera',
                descripcion: 'Cocina industrial con 2 hornillas y chifera integrada, ideal para maximizar la producción en cocinas industriales.',
                precio: 1800.0,
                rating: 4.7,
            },
            {
                id: 12,
                id_categoria: 103,
                imagen: cocina8,
                nombre: 'Cocina Industrial de 3 Hornillas',
                descripcion: 'Cocina industrial con 3 hornillas, diseñada para satisfacer las necesidades de cocinas con alta demanda.',
                precio: 2900.0,
                rating: 4.8,
            },
            {
                id: 13,
                id_categoria: 103,
                imagen: cocina9,
                nombre: 'Cocina Industrial de 4 Woks',
                descripcion: 'Cocina industrial con 4 woks, perfecta para la preparación de grandes volúmenes de comida asiática y salteados.',
                precio: 5500.0,
                rating: 4.9,
            },
            {
                id: 14,
                id_categoria: 103,
                imagen: cocina10,
                nombre: 'Cocina Industrial de 2 Woks y 1 Hornilla',
                descripcion: 'Cocina industrial con 2 woks y 1 hornilla, diseñada para flexibilidad y eficiencia en la preparación de diversos platillos.',
                precio: 4800.0,
                rating: 4.8,
            },
            {
                id: 15,
                id_categoria: 103,
                imagen: cocina11,
                nombre: 'Cocina Industrial a Gas Wok Frionox - CW-3-75',
                descripcion: 'Cocina industrial modelo Frionox CW-3-75, diseñada para cocinas profesionales que requieren alto rendimiento y eficiencia.',
                precio: 6000.0,
                rating: 4.9,
            },
            {
                id: 16,
                id_categoria: 103,
                imagen: cocina12,
                nombre: 'Cocina Industrial de 4 Hornillas',
                descripcion: 'Cocina industrial con 4 hornillas, ideal para cocinas comerciales que necesitan alta capacidad de cocción.',
                precio: 3500.0,
                rating: 4.8,
            },


            {
                id: 17,
                id_categoria: 104,
                imagen: horno1,
                nombre: 'Horno Pollero para 30 Pollos',
                descripcion: 'Horno especializado para asar hasta 30 pollos simultáneamente, ideal para negocios de comida rápida y pollerías.',
                precio: 7500.0,
                rating: 5,
            },
            {
                id: 18,
                id_categoria: 104,
                imagen: horno2,
                nombre: 'Horno Pollero 2 en 1',
                descripcion: 'Horno versátil que combina funciones de asado y horneado, perfecto para maximizar el uso en espacios reducidos.',
                precio: 8200.0,
                rating: 5,
            },
            {
                id: 19,
                id_categoria: 104,
                imagen: horno3,
                nombre: 'Horno Eléctrico para Hornear Pan',
                descripcion: 'Horno eléctrico diseñado específicamente para hornear pan con eficiencia y uniformidad en la cocción.',
                precio: 12000.0,
                rating: 4.8,
            },
            {
                id: 20,
                id_categoria: 104,
                imagen: horno4,
                nombre: 'Horno Pollero para 24 Pollos',
                descripcion: 'Horno de capacidad media diseñado para asar hasta 24 pollos, ideal para negocios pequeños y medianos.',
                precio: 7200.0,
                rating: 4.5,
            },
            {
                id: 21,
                id_categoria: 104,
                imagen: horno5,
                nombre: 'Horno Pizzero Industrial',
                descripcion: 'Horno industrial para la preparación de pizzas con alta capacidad y distribución uniforme de calor.',
                precio: 6500.0,
                rating: 4.7,
            },
            {
                id: 22,
                id_categoria: 104,
                imagen: horno6,
                nombre: 'Horno Pizzero Chico',
                descripcion: 'Horno pizzero compacto, ideal para negocios pequeños o preparación de pizzas en cantidades limitadas.',
                precio: 4200.0,
                rating: 4.3,
            },
            {
                id: 23,
                id_categoria: 101,
                imagen: freidora1,
                nombre: 'Freidora a Gas Natural DCF3-NG con 3 Quemadores de Tubo',
                descripcion: 'Freidora de alto rendimiento equipada con 3 quemadores de tubo y diseñada para funcionar con gas natural, ideal para negocios de alta demanda.',
                precio: 7500.0,
                rating: 4,
            },
            {
                id: 24,
                id_categoria: 101,
                imagen: freidora2,
                nombre: 'Freidora a Gas SR42G',
                descripcion: 'Freidora compacta y eficiente, ideal para freír alimentos con precisión y ahorro de energía.',
                precio: 6800.0,
                rating: 4,
            },
            {
                id: 25,
                id_categoria: 101,
                imagen: freidora3,
                nombre: 'Freidora Dean 21LT a Gas SR142G',
                descripcion: 'Freidora industrial de la marca Dean con capacidad de 21 litros, perfecta para cocinar grandes volúmenes de alimentos.',
                precio: 5979.0,
                rating: 4,
            },
            {
                id: 26,
                id_categoria: 101,
                imagen: freidora4,
                nombre: 'Freidora Industrial Triple 38 Litros Acero Inoxidable',
                descripcion: 'Freidora triple de 38 litros fabricada en acero inoxidable, ideal para negocios que requieren preparación simultánea de grandes cantidades.',
                precio: 12990.0,
                rating: 4,
            },
            {
                id: 27,
                id_categoria: 101,
                imagen: freidora5,
                nombre: 'Freidora a Gas Natural con 4 Quemadores de Tubo',
                descripcion: 'Freidora diseñada para trabajar con gas natural, equipada con 4 quemadores de tubo para una cocción uniforme y eficiente.',
                precio: 9800.0,
                rating: 4,
            },
            {
                id: 28,
                id_categoria: 101,
                imagen: freidora6,
                nombre: 'Freidora de Papas Automática a Gas',
                descripcion: 'Freidora automática especialmente diseñada para papas fritas, con sistema de control eficiente y alimentación a gas.',
                precio: 10500.0,
                rating: 4,
            },
            {
                id: 29,
                id_categoria: 105,
                imagen: parrilla1,
                nombre: 'Parrilla Empotrable - Modelo Pro 350 - Acero Inoxidable',
                descripcion: 'Parrilla empotrable fabricada en acero inoxidable de alta calidad, diseñada para uso profesional en cocinas al aire libre o interiores.',
                precio: 2939.0,
                rating: 4,
            },
            {
                id: 30,
                id_categoria: 105,
                imagen: parrilla2,
                nombre: 'Parrilla con Caja China La Carbonera Grill Bróker 200',
                descripcion: 'Parrilla de uso versátil con caja china integrada, fabricada en acero inoxidable 201 para mayor durabilidad y excelente desempeño.',
                precio: 3300.0,
                rating: 4,
            },
            {
                id: 31,
                id_categoria: 105,
                imagen: parrilla3,
                nombre: 'Parrilla La Carbonera Grill 350 Full Acero Inoxidable 201',
                descripcion: 'Compacta y práctica, ideal para espacios reducidos, fabricada con acero inoxidable resistente para uso prolongado.',
                precio: 999.0,
                rating: 4,
            },
            {
                id: 32,
                id_categoria: 105,
                imagen: parrilla4,
                nombre: 'Parrilla Premium Mediana 2 en 1 (80x50)',
                descripcion: 'Parrilla mediana con doble funcionalidad, perfecta para asados y comidas al aire libre. Diseño ergonómico y medidas estándar (80x50 cm).',
                precio: 2300.0,
                rating: 4,
            },
            {
                id: 33,
                id_categoria: 201,
                imagen: mesa1,
                nombre: 'Mesa de Trabajo con Ruedas 60 x 90 cm - Soporta 145 kg',
                descripcion: 'Mesa de trabajo compacta con ruedas, ideal para entornos de cocina profesional o industrial. Resistente y fácil de mover.',
                precio: 0,
                rating: 4,
            },
            {
                id: 34,
                id_categoria: 201,
                imagen: mesa2,
                nombre: 'Mesa de Trabajo de Acero Inoxidable',
                descripcion: 'Fabricada en acero inoxidable para mayor durabilidad, ideal para cocinas y estaciones de preparación de alimentos.',
                precio: 0,
                rating: 4,
            },
            {
                id: 35,
                id_categoria: 201,
                imagen: mesa3,
                nombre: 'Mesa de Trabajo 152 cm (60 pulgadas)',
                descripcion: 'Mesa amplia y funcional de 152 cm de longitud, perfecta para grandes estaciones de trabajo en entornos profesionales.',
                precio: 0,
                rating: 4,
            },
            {
                id: 36,
                id_categoria: 201,
                imagen: mesa4,
                nombre: 'Mesa Trabajo Imbera Protek 1024006',
                descripcion: 'Mesa diseñada para cocinas comerciales y áreas de comedor, combina diseño práctico y materiales duraderos.',
                precio: 0,
                rating: 4,
            },
            {
                id: 37,
                id_categoria: 201,
                imagen: mesa5,
                nombre: 'Mesa de Trabajo para Cocina de 120 cm con 2 Estantes',
                descripcion: 'Fabricada en acero inoxidable con patas ajustables, perfecta para cocinas con espacio limitado. Incluye dos estantes inferiores.',
                precio: 241.72,
                rating: 4,
            },
            {
                id: 38,
                id_categoria: 201,
                imagen: mesa6,
                nombre: 'Mesa Central con 2 Repisas Inferiores',
                descripcion: 'Mesa central de alta resistencia con dos repisas inferiores, ideal para maximizar el espacio de almacenamiento en cocinas.',
                precio: 0,
                rating: 4,
            },
            {
                id: 39,
                id_categoria: 201,
                imagen: mesa7,
                nombre: 'Mesón Central 120 x 60 x 85 cm - Acero Inoxidable',
                descripcion: 'Mesa robusta para trabajo pesado con dimensiones estándar, diseñada para cocinas comerciales y preparación de alimentos.',
                precio: 102.99,
                rating: 4,
            },
            {
                id: 40,
                id_categoria: 201,
                imagen: mesa8,
                nombre: 'Mesa de Trabajo con Repisa de 5 Niveles',
                descripcion: 'Mesa multifuncional con repisas adicionales para maximizar el almacenamiento. Dimensiones: 108 x 57 x 160 cm.',
                precio: 0,
                rating: 4,
            },
            {
                id: 41,
                id_categoria: 201,
                imagen: mesa9,
                nombre: 'Mesa de Trabajo con Cajones a la Derecha',
                descripcion: 'Mesa práctica con cajones laterales para almacenar utensilios y herramientas de cocina. Fabricada en acero inoxidable.',
                precio: 0,
                rating: 4,
            },
            {
                id: 42,
                id_categoria: 202,
                imagen: lavadero1,
                nombre: 'Lavadero de Acero Inoxidable con 3 Pozas - 180x70x90 cm',
                descripcion: 'Lavadero industrial de acero inoxidable con tres pozas grandes, ideal para cocinas comerciales y restaurantes.',
                precio: 0,
                rating: 4,
            },
            {
                id: 43,
                id_categoria: 202,
                imagen: lavadero2,
                nombre: 'Lavadero de 1 Poza con Escurridor',
                descripcion: 'Compacto y funcional, perfecto para espacios pequeños. Incluye un escurridor lateral para mayor practicidad.',
                precio: 1000.00,
                rating: 4,
            },
            {
                id: 44,
                id_categoria: 202,
                imagen: lavadero3,
                nombre: 'Lavadero de Cocina con 2 Pozas en Acero Inoxidable 304 - 120x65 cm',
                descripcion: 'Lavadero de alta calidad con dos pozas espaciosas. Fabricado en acero inoxidable 304 para mayor resistencia a la corrosión.',
                precio: 1990.00,
                rating: 4,
            },
            {
                id: 45,
                id_categoria: 202,
                imagen: lavadero4,
                nombre: 'Lavadero de 1 Poza con Escurridor',
                descripcion: 'Diseño compacto y duradero, ideal para cocinas con espacio limitado. Escurridor integrado para mayor funcionalidad.',
                precio: 0,
                rating: 4,
            },
            {
                id: 46,
                id_categoria: 202,
                imagen: lavadero5,
                nombre: 'Lavadero de 1 Poza con Escurridores en Acero Inoxidable',
                descripcion: 'Lavadero fabricado en acero inoxidable de alta calidad, con escurridores en ambos lados para mayor comodidad.',
                precio: 0,
                rating: 4,
            },
            {
                id: 47,
                id_categoria: 202,
                imagen: lavadero6,
                nombre: 'Lavadero de 2 Pozas en Acero Inoxidable - 1,70 m',
                descripcion: 'Lavadero amplio con dos pozas espaciosas, ideal para uso comercial. Construcción robusta y duradera.',
                precio: 0,
                rating: 4,
            },
            {
                id: 48,
                id_categoria: 301,
                imagen: refri1,
                nombre: 'Freezer de Acero Inoxidable con 2 Puertas de Vidrio - VENTUS VF2PS-1400V',
                descripcion: 'Congelador industrial de alta capacidad con dos puertas de vidrio templado. Ideal para restaurantes y negocios de alimentos.',
                precio: 3504.60,
                rating: 4,
            },
            {
                id: 49,
                id_categoria: 301,
                imagen: refri2,
                nombre: 'Refrigeradora Modelo AS1105N',
                descripcion: 'Refrigeradora compacta y eficiente con diseño moderno. Perfecta para uso doméstico o comercial ligero.',
                precio: 1500.00,
                rating: 4,
            },
            {
                id: 50,
                id_categoria: 301,
                imagen: refri3,
                nombre: 'Congelador Vertical con 2 Puertas de Acero',
                descripcion: 'Congelador vertical espacioso y duradero. Fabricado en acero inoxidable, ideal para mantener los alimentos en condiciones óptimas.',
                precio: 1249.00,
                rating: 4,
            },
            {
                id: 51,
                id_categoria: 301,
                imagen: refri4,
                nombre: 'Congeladora Industrial de Acero Inoxidable con 4 Puertas - 855 Litros',
                descripcion: 'Congeladora de gran capacidad, diseñada para uso intensivo en entornos comerciales como restaurantes o supermercados.',
                precio: 9599.00,
                rating: 4,
            },
            {
                id: 52,
                id_categoria: 301,
                imagen: refri5,
                nombre: 'Congelador Industrial Horizontal - 530 Litros, 1.50 m',
                descripcion: 'Congelador horizontal de alta capacidad, perfecto para negocios que necesitan almacenamiento eficiente a bajas temperaturas.',
                precio: 6750.00,
                rating: 4,
            },
            {
                id: 53,
                id_categoria: 301,
                imagen: refri6,
                nombre: 'Refrigerador Vertical con 2 Puertas de Cristal y Acero Inoxidable',
                descripcion: 'Refrigerador de diseño moderno con puertas de cristal para una mejor visibilidad. Fabricado con acero inoxidable resistente.',
                precio: 0,
                rating: 4,
            },
            {
                id: 54,
                id_categoria: 302,
                imagen: vitri1,
                nombre: 'Vitrina Pastelera VP-1000E',
                descripcion: 'Vitrina pastelera refrigerada diseñada para exhibir pasteles y postres. Capacidad óptima y diseño elegante.',
                precio: 1500.00,
                rating: 4,
            },
            {
                id: 55,
                id_categoria: 302,
                imagen: vitri2,
                nombre: 'Vitrina Exhibidora Caliente Berjaya - FW-5G',
                descripcion: 'Vitrina caliente para mantener alimentos a temperaturas ideales. Perfecta para panaderías y cafeterías.',
                precio: 0,
                rating: 4,
            },
            {
                id: 56,
                id_categoria: 302,
                imagen: vitri3,
                nombre: 'Vitrina Exhibidora Cristal Curvo - Capacidad 306 L',
                descripcion: 'Vitrina refrigerada con cristal curvo, ideal para negocios de alimentos que requieren exhibición atractiva y eficiente.',
                precio: 0,
                rating: 4,
            },
            {
                id: 57,
                id_categoria: 302,
                imagen: vitri4,
                nombre: 'Vitrina Refrigerada Sobre Mostrador - Cristal Recto de 90 cm',
                descripcion: 'Vitrina compacta de cristal recto para mostradores, perfecta para maximizar espacio y mantener productos frescos.',
                precio: 0,
                rating: 4,
            },
            {
                id: 58,
                id_categoria: 302,
                imagen: vitri5,
                nombre: 'Vitrina Refrigerada Curva ILUMI de 2 Niveles',
                descripcion: 'Vitrina curva de diseño moderno con iluminación y dos niveles de almacenamiento para una exhibición más efectiva.',
                precio: 6119.00,
                rating: 4,
            },
            {
                id: 59,
                id_categoria: 302,
                imagen: vitri6,
                nombre: 'Vitrina Refrigerada Vidrio Plano VRF-1500AI',
                descripcion: 'Vitrina refrigerada con vidrio plano, amplia capacidad y diseño sofisticado. Ideal para negocios que buscan elegancia y funcionalidad.',
                precio: 6999.00,
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
                                        <p className="home__products__description">{producto.nombre || 'Sin descripción disponible'}</p>
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
                                        <button className="home__products__btn" onClick={() => addToCart(producto)}>
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
            <div style={{ minHeight: '10vh', padding: '20px 0' }}>
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