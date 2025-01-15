import { useState, useEffect } from "react";
import './Blocks.css';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Paginator } from 'primereact/paginator';
import imagen5 from '../../assets/somos5.jpg';
import { Dropdown } from 'primereact/dropdown';


export const Blocks = () => {
    const [blocks, setBlocks] = useState([]);
    const [first, setFirst] = useState(0); // Índice del primer elemento
    const [rows, setRows] = useState(6);  // Número de elementos por página

    useEffect(() => {
        const data = [
            {
                id: 1,
                block: 'Techno',
                fecha: '5 Agosto, 2023',
                title: 'Mesa de madera 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 2,
                block: 'Techno',
                fecha: '6 Agosto, 2023',
                title: 'Mesa de madera 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 3,
                block: 'Techno',
                fecha: '7 Agosto, 1400',
                title: 'Mesa de madera 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            },
            {
                id: 4,
                block: 'Techno',
                fecha: '8 Agosto, 1900',
                title: 'Mesa de madera 4',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe mollitia. Est excepturi dolorum accusantium.',
                text_button: 'Leer mas'
            }
        ];
        setBlocks(data);
    }, []);

    // Manejador de cambio de página
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // Determina los elementos visibles según la página actual
    const visibleBlocks = blocks.slice(first, first + rows);

    // variables de Dropdown
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Mesas', code: 'NY' },
        { name: 'Lavadoras', code: 'RM' },
        { name: 'Cocinas', code: 'LDN' },
        { name: 'Freidoras', code: 'IST' },
        { name: 'Hornos', code: 'PRS' }
    ];

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
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                        placeholder="Seleccione la categoria" className="w-full md:w-30rem" checkmark={true} highlightOnSelect={false} filter />
                </div>
            </div>



            <div className="container-blocks">
                <div className="container-sub-blocks">
                    <div className="container-sub-blocks-grid">
                        {visibleBlocks.map((item, index) => (
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
                    totalRecords={blocks.length}
                    rowsPerPageOptions={[6, 9, 12, 15]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};
