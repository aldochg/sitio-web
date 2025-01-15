import { useState, useEffect } from "react";
import './Blocks.css';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Paginator } from 'primereact/paginator';
import imagen5 from '../../assets/somos5.jpg';
import { Dropdown } from 'primereact/dropdown';


export const Blocks = () => {
    const [blocks, setBlocks] = useState([]);
    const [blockAlternative, setBlockAlternative] = useState([]);
    const [categoryCode, setCategoryCode] = useState(null);  // Guardamos el código de categoría
    

    const [first, setFirst] = useState(0); // Índice del primer elemento
    const [rows, setRows] = useState(6);  // Número de elementos por página

    useEffect(() => {
        const data = [
            {
                id: 1,
                id_cat:'001',
                block: 'Techno',
                fecha: '5 Agosto, 2023',
                title: 'Mesa de madera 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 2,
                id_cat:'001',
                block: 'Techno',
                fecha: '6 Agosto, 2023',
                title: 'Mesa de madera 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 3,
                id_cat:'001',
                block: 'Techno',
                fecha: '7 Agosto, 1400',
                title: 'Mesa de madera 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 4,
                id_cat:'002',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Cocina 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 5,
                id_cat:'002',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Cocina 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 6,
                id_cat:'002',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Cocina 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 7,
                id_cat:'003',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Lavadero 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 8,
                id_cat:'003',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'lavadero 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 9,
                id_cat:'003',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'lavadero 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 10,
                id_cat:'004',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Freidora 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 11,
                id_cat:'004',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Freidora 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 12,
                id_cat:'004',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Freidora 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 14,
                id_cat:'004',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Freidora 4',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 15,
                id_cat:'005',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Horno 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 16,
                id_cat:'005',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Horno 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 17,
                id_cat:'005',
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Horno 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
        ];
        setBlocks(data);
    }, []);

    // Manejador de cambio de página
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };



    // variables de Dropdown
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Todos', code: '000'},
        { name: 'Mesas', code: '001'},
        { name: 'Cocina', code: '002' },
        { name: 'Lavadoras', code: '003' },
        { name: 'Freidoras', code: '004' },
        { name: 'Hornos', code: '005' }
    ];

// useEffect para actualizar blockAlternative cuando categoryCode cambie
useEffect(() => {
    if (categoryCode !== null) {
        const filter_data = blocks.filter(block => block.id_cat === categoryCode);
        setBlockAlternative(filter_data);  // Actualiza blockAlternative
    }
}, [blocks, categoryCode]);  // Ejecuta cuando blocks o categoryCode cambien


    // Determina los elementos visibles según la página actual
    const visibleBlocks = blocks.slice(first, first + rows);
    const visibleBlocksAlternative = blockAlternative.slice(first, first + rows);
    
    const blocksToDisplay = (visibleBlocksAlternative.length > 0) ? visibleBlocksAlternative : visibleBlocks;
    
    const setDatosCategorias = (e) => {
        setCategoryCode(e.code);  // Actualiza el código de categoría
    };


    return (
        <div>
            <div className="services">
                <div className="services__content">
                    <h1>BLOCKS</h1>
                    <Breadcrumb />
                </div>
            </div>

            {/* Contenedor del filter de blocks */}
            <div className="contenedor-filter-block">
                <div className="contenedor-filter-block-sub">
                    <div>
                        <h1>Filtrado de blocks</h1>
                    </div>
                    <Dropdown value={selectedCity} onChange={(e) => {setSelectedCity(e.value) ,setDatosCategorias(e.value)}} options={cities} optionLabel="name"
                        placeholder="Seleccione la categoria" className="w-full md:w-30rem" checkmark={true} highlightOnSelect={false} filter />
                </div>
            </div>
            <div className="container-blocks">
                <div className="container-sub-blocks">
                    <div className="container-sub-blocks-grid">
                        {blocksToDisplay.map((item, index) => (
                            <div className="grids-boxs" key={index}>
                                <div className="grids-boxs-img">
                                    <img src={imagen5} alt="Fabricante de equipamiento de acero inoxidable" />
                                </div>
                                <div className="grid-boxs-texts">
                                    <div className="grid-boxs-header">
                                        <a className="grid-boxs-header-text" href="">{item.block}</a>
                                        <span>{item.fecha}</span>
                                    </div>
                                    <h3 className="grid-boxs-title">{item.title}</h3>
                                    <p className="grid-boxs-description">{item.description}</p>
                                    <a className="grid-boxs-leer-mas" href="">{item.text_button}<i className="pi pi-arrow-right"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="paginator-container">
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={blockAlternative.length > 0 ? blockAlternative.length : blocks.length}
                    rowsPerPageOptions={[6, 9, 12, 15]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};
