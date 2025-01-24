import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./CardShoping.css"; // Archivo de estilos
import { CartContext } from '../../context/CartContext';
import logo_empresa from '../../assets/logo1.png';
import apiService from '../../api/apiServices'

export const CardShopping = () => {
    const { cart, increaseQuantity, decreaseQuantity, deleteFromCart, getTotalPrice } =
        useContext(CartContext);

        const navigate = useNavigate();

        const handleRedirect = () => {
          navigate("/products");
        };

    //Datos para el formulario
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        ruc: '',
        address: '',
        cart: cart,
    });

    //revicion de los documenyos, titulo ambos lados, boletos = comprobantes, no tickets de pago, solicitud = rembolso el monto gastado,  todo eso al asesor.
    // correo personal. o alternativo.

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await apiService.postData('/contact', formData);
            console.log('Datos enviados correctamente', response);
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <section className="container-card-section">
            <div className="header-card">
                <div className="header-card-sub">
                    <div>
                        <img src={logo_empresa} alt="" width={140} />
                    </div>
                    <div>
                        <button className="return-button" onClick={handleRedirect}>
                            <i className="pi pi-arrow-left"></i>
                            <span>Retornar</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-shopping-container">
                <div className="card-shopping-grid">
                    {/* Tabla de productos */}
                    <div className="shopping-table-container">
                        <table className="shopping-table">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td className="product-info">
                                            <img src={item.imagen} alt="" className="product-image" />
                                            <p>{item.nombre}</p>
                                        </td>
                                        <td className="product-price"><span>S/ {item.precio}</span></td>
                                        <td className="product-quantity">
                                            <button onClick={() => decreaseQuantity(item.id)} disabled={item.cantidad <= 1}><i className="pi pi-minus"></i></button>
                                            <span>{item.cantidad}</span>
                                            <button onClick={() => increaseQuantity(item.id)}><i className="pi pi-plus"></i></button>
                                            <button onClick={() => deleteFromCart(item.id)}><i className="pi pi-trash"></i></button>
                                        </td>
                                        <td className="product-total">S/ {item.precio * item.cantidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="product-total-real">
                            {cart.length > 0 && <div>Total: S/ {getTotalPrice()}</div>}
                        </div>
                    </div>

                    {/* Formulario de datos de contacto */}
                    <div className="contact-form-container">
                        <h1>Datos de cotizacion</h1>
                        <div className="form-group">
                            <input type="text" placeholder="Ingrese su nombre" name="name" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Ingrese su Apellidos" name="lastName" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                           
                            <input type="text" placeholder="Ingrese su nombre" name="email" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Ingrese su nombre" name="phone" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Ingrese su ruc" name="ruc" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Mensaje"
                                className="animated-border-input"
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button className="send-button" onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            </div>
        </section>
    );
};