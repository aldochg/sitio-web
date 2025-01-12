import { useState, useEffect } from "react";
import './Contact.css';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { SliderAutomatico } from "../../components/SliderAutomatico/SliderAutomatico";

// Google Maps API Component
const GoogleMap = () => {
    return (
        <div className="contact-map" style={{ width: "100%", height: "auto" }}>
            <iframe
                title="google-map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091846!2d-76.944422!3d-12.200558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDEyJzAxLjkiUyA3NsKwNTYnMzkuOSJX!5e0!3m2!1ses!2spe!4v1691425030280!5m2!1ses!2spe`}
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Gracias por contactarnos, responderemos pronto.");
    };
    return (
        <div>
            <div className="contact">
                <div className="contact__content">
                    <h1>CONTACTANOS</h1>
                    <Breadcrumb/>
                </div>
            </div>

            <div>
                <div className="contact-container">
                    <div className="contact-form-wrapper">
                        <div className="contact-form">
                            <h2>Contáctanos</h2>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <i className="pi pi-map-marker" style={{ padding: '10px 0 10px 0' }}><span style={{ padding: '0 0 0 20px' }}>Av. 1ro de mayo - primer sector - villa el salvador</span></i>
                                <i className="pi pi-envelope" style={{ padding: '10px 0 10px 0' }}><span style={{ padding: '0 0 0 20px' }}>empresa@gmail.com</span></i>
                                <i className="pi pi-phone" style={{ padding: '10px 0 20px 0' }}><span style={{ padding: '0 0 0 20px' }}>+51 972373512</span></i>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Nombre"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Correo Electrónico"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Teléfono/Celular"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        required
                                        placeholder="Mensaje"
                                        className="animated-border-input"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit">Enviar Datos</button>
                                </div>
                            </form>
                        </div>
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </div>
    );
}