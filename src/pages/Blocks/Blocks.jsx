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
          // Productos de categoría 'Mesas'
          {
            id: 1,
            id_cat: '001',
            block: 'Mesa',
            fecha: '5 Agosto, 2023',
            title: 'Cómo quitar las manchas en mesas de acero inoxidable',
            description: 'Para quitar las manchas en las mesas de acero inoxidable, primero limpie la superficie con un paño suave. Si las manchas persisten, mezcle vinagre diluido con agua y frote la zona afectada con un trapo limpio. Evite el uso de productos abrasivos que puedan dañar el acero.',
            text_button: 'Leer más'
          },
          {
            id: 2,
            id_cat: '001',
            block: 'Mesa',
            fecha: '6 Agosto, 2023',
            title: 'Cómo eliminar manchas difíciles en mesas de acero inoxidable',
            description: 'Si las manchas son difíciles de eliminar, aplique un limpiador especializado para acero inoxidable y use un trapo de microfibra para frotar suavemente. Asegúrese de enjuagar bien la superficie para evitar restos de limpiador.',
            text_button: 'Leer más'
          },
          {
            id: 3,
            id_cat: '001',
            block: 'Mesa',
            fecha: '7 Agosto, 2023',
            title: 'Cómo mantener las mesas de acero inoxidable en buen estado',
            description: 'Para mantener las mesas de acero inoxidable en buen estado, límpielas regularmente con un paño seco para evitar manchas de agua. Utilice limpiadores suaves y evite el uso de productos que contengan cloro o abrasivos.',
            text_button: 'Leer más'
          },
      
          // Productos de categoría 'Cocinas'
          {
            id: 4,
            id_cat: '002',
            block: 'Cocina',
            fecha: '8 Agosto, 2023',
            title: 'Cómo limpiar cocinas de acero inoxidable después de cada uso',
            description: 'Después de cada uso, limpie las cocinas de acero inoxidable con un paño húmedo para eliminar restos de comida. Utilice detergentes suaves para evitar rayaduras en la superficie del acero.',
            text_button: 'Leer más'
          },
          {
            id: 5,
            id_cat: '002',
            block: 'Cocina',
            fecha: '8 Agosto, 2023',
            title: 'Cómo eliminar grasa en cocinas de acero inoxidable',
            description: 'Para eliminar la grasa, utilice un desengrasante suave o vinagre diluido en agua. Frote con un trapo limpio y seco para evitar marcas y huellas en el acero inoxidable.',
            text_button: 'Leer más'
          },
          {
            id: 6,
            id_cat: '002',
            block: 'Cocina',
            fecha: '8 Agosto, 2023',
            title: 'Cómo prevenir manchas en cocinas de acero inoxidable',
            description: 'Para prevenir manchas, limpie las cocinas regularmente y seque las superficies después de cada uso. Use un paño de microfibra para evitar marcas de agua y mantener el brillo del acero.',
            text_button: 'Leer más'
          },
      
          // Productos de categoría 'Freidoras'
          {
            id: 7,
            id_cat: '003',
            block: 'Freidoras',
            fecha: '8 Agosto, 2023',
            title: 'Cómo limpiar la freidora de acero inoxidable',
            description: 'Después de cada uso, retire el aceite usado y lave la canasta de la freidora con detergente suave. Evite el uso de estropajos abrasivos para no rayar la superficie de acero inoxidable.',
            text_button: 'Leer más'
          },
          {
            id: 8,
            id_cat: '003',
            block: 'Freidoras',
            fecha: '8 Agosto, 2023',
            title: 'Cómo eliminar residuos de aceite en freidoras de acero inoxidable',
            description: 'Para eliminar residuos de aceite, limpie la freidora con un desengrasante especializado. Asegúrese de secar bien todas las partes antes de volver a usarla para evitar que se acumulen residuos.',
            text_button: 'Leer más'
          },
          {
            id: 9,
            id_cat: '003',
            block: 'Freidoras',
            fecha: '8 Agosto, 2023',
            title: 'Cómo mantener la freidora de acero inoxidable libre de manchas',
            description: 'Mantenga la freidora libre de manchas limpiándola regularmente con un limpiador de acero inoxidable. Asegúrese de eliminar cualquier resto de grasa para evitar que se adhiera al acero.',
            text_button: 'Leer más'
          },
      
          // Productos de categoría 'Hornos'
          {
            id: 10,
            id_cat: '004',
            block: 'Hornos',
            fecha: '8 Agosto, 2023',
            title: 'Cómo limpiar el horno de acero inoxidable',
            description: 'Limpie el horno después de cada uso con un paño seco para eliminar restos de comida. Para manchas persistentes, use un limpiador suave no abrasivo para acero inoxidable.',
            text_button: 'Leer más'
          },
          {
            id: 11,
            id_cat: '004',
            block: 'Hornos',
            fecha: '8 Agosto, 2023',
            title: 'Cómo eliminar manchas de grasa en hornos de acero inoxidable',
            description: 'Use un desengrasante adecuado para acero inoxidable y frote suavemente las manchas con un paño de microfibra. Evite usar productos químicos fuertes que puedan dañar la superficie.',
            text_button: 'Leer más'
          },
          {
            id: 12,
            id_cat: '004',
            block: 'Hornos',
            fecha: '8 Agosto, 2023',
            title: 'Cómo mantener el brillo del acero inoxidable en hornos',
            description: 'Para mantener el brillo, limpie regularmente las superficies del horno con un limpiador específico para acero inoxidable. Evite el contacto con productos abrasivos que puedan rayar la superficie.',
            text_button: 'Leer más'
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
    {/* Sección de servicios */}
    <div className="services">
        <div className="services__content">
            <h1>BLOCKS</h1>
            <Breadcrumb />
        </div>
    </div>

    {/* Contenedor del filtro para blocks */}
    <div className="contenedor-filter-block">
        <div className="contenedor-filter-block-sub">
            <div>
                <h1>Filtrado de blocks</h1>
            </div>
            <Dropdown
                value={selectedCity}
                onChange={(e) => {
                    setSelectedCity(e.value);
                    setDatosCategorias(e.value);
                }}
                options={cities}
                optionLabel="name"
                placeholder="Seleccione la categoría"
                className="w-full md:w-30rem"
                checkmark
                highlightOnSelect={false}
                filter
            />
        </div>
    </div>

    {/* Contenedor principal de los blocks */}
    <div className="container-blocks">
        <div className="container-sub-blocks">
            <div className="container-sub-blocks-grid">
                {blocksToDisplay.map((item, index) => (
                    <div className="grids-boxs" key={index}>
                        <div className="grids-boxs-img">
                            <img
                                src={imagen5}
                                alt="Fabricante de equipamiento de acero inoxidable"
                            />
                        </div>
                        <div className="grid-boxs-texts">
                            <div className="grid-boxs-header">
                                <a
                                    className="grid-boxs-header-text"
                                    href="#"
                                >
                                    {item.block}
                                </a>
                                <span>{item.fecha}</span>
                            </div>
                            <h3 className="grid-boxs-title">{item.title}</h3>
                            <p className="grid-boxs-description">
                                {item.description}
                            </p>
                            <a className="grid-boxs-leer-mas" href="#">
                                {item.text_button}
                                <i className="pi pi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Contenedor del paginador */}
    <div className="paginator-container">
        <Paginator
            first={first}
            rows={rows}
            totalRecords={
                blockAlternative.length > 0
                    ? blockAlternative.length
                    : blocks.length
            }
            rowsPerPageOptions={[6, 9, 12, 15]}
            onPageChange={onPageChange}
        />
    </div>
</div>

    );
};
