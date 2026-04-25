import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/Contact.css';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Calle Urban Style 123\n28001 Madrid, España',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+34 91 123 45 67',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@urbanthreads.com',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun - Vie: 9:00 - 18:00\nSáb: 10:00 - 14:00',
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Purely aesthetic – no backend logic
    alert('¡Formulario de demostración! Los mensajes no se envían realmente.');
  };

  return (
    <main className="contact-page">
      <div className="contact-page__header">
        <h1 className="contact-page__title">Contacto</h1>
        <p className="contact-page__subtitle">
          ¿Tienes alguna pregunta? Nos encantaría escucharte
        </p>
      </div>

      <div className="contact-page__layout">
        {/* LEFT: Info */}
        <section>
          <h2 className="contact-info__title">Información de Contacto</h2>
          <div className="contact-info__items">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="contact-info__item">
                <div className="contact-info__icon-wrap">
                  <item.icon size={15} className="contact-info__icon" />
                </div>
                <div>
                  <p className="contact-info__label">{item.label}</p>
                  <p className="contact-info__value" style={{ whiteSpace: 'pre-line' }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="contact-form__title">Envíanos un Mensaje</h2>
          <div className="contact-form__demo-banner">
            <p className="contact-form__demo-text">
              <strong>Demo:</strong> Esto es un formulario de demostración. Los mensajes no se envían realmente.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="form-input"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="apellidos">Apellidos</label>
                <input
                  id="apellidos"
                  name="apellidos"
                  type="text"
                  className="form-input"
                  value={formData.apellidos}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="asunto">Asunto</label>
              <select
                id="asunto"
                name="asunto"
                className="form-select"
                value={formData.asunto}
                onChange={handleChange}
              >
                <option value="">Selecciona un asunto</option>
                <option value="pedido">Consulta sobre pedido</option>
                <option value="devolucion">Devolución / Cambio</option>
                <option value="talla">Guía de tallas</option>
                <option value="colaboracion">Colaboración</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="form-textarea"
                value={formData.mensaje}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit">
              Enviar Mensaje
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
