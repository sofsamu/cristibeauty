"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ReservarCita() {
  const [citas, setCitas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [confirmacion, setConfirmacion] = useState(false);
  const [errores, setErrores] = useState({});

  // Cargar citas guardadas en localStorage
  useEffect(() => {
    const data = localStorage.getItem("citas");
    if (data) setCitas(JSON.parse(data));
  }, []);

  // Guardar citas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Función para validar los campos
  const validarCampos = () => {
    const erroresNuevos = {};
    if (!nombre.trim()) erroresNuevos.nombre = "El nombre es obligatorio";
    if (!email.trim()) erroresNuevos.email = "El correo es obligatorio";
    if (!telefono.trim() || telefono.length < 9) erroresNuevos.telefono = "Número inválido";
    if (!servicio.trim()) erroresNuevos.servicio = "Selecciona un servicio";
    if (!fecha.trim()) erroresNuevos.fecha = "Selecciona una fecha";
    if (!hora.trim()) erroresNuevos.hora = "Selecciona una hora";

    setErrores(erroresNuevos);
    return Object.keys(erroresNuevos).length === 0;
  };

  // Función para agendar cita y enviar email
  const agendarCita = async (e) => {
    e.preventDefault();

    if (!validarCampos()) return;

    const nuevaCita = { nombre, email, telefono, servicio, fecha, hora };
    setCitas([...citas, nuevaCita]);

    // Enviar correo con EmailJS
    const templateParams = {
      to_email: "samu17gr@gmail.com",
      cliente_nombre: nombre,
      cliente_email: email,
      cliente_telefono: telefono,
      servicio: servicio,
      fecha: fecha,
      hora: hora,
    };

    try {
      await emailjs.send("service_w6bvi7o", "template_6zi9ull", templateParams, "rtchOVG111L7B5vHU");

      setConfirmacion(true);
      setTimeout(() => setConfirmacion(false), 3000);

      setNombre("");
      setEmail("");
      setTelefono("");
      setServicio("");
      setFecha("");
      setHora("");
      setErrores({});
    } catch (error) {
      console.error("Error al enviar el correo", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-pink-700 text-center font-serif">Reservar cita</h2>
      <p>Recuerda revisar nuestras redes sociales para conocer la disponibilidad actualizada antes de confirmar tu cita. Si prefieres, puedes contactarnos directamente y te ayudaremos a reservar. ¡Gracias!</p>

      {/* Mensaje de confirmación */}
      {confirmacion && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 text-center rounded-md">
          ✅ ¡Tu cita ha sido agendada con éxito!
        </div>
      )}

      <form onSubmit={agendarCita} className="mt-4 space-y-4">
        {/* Nombre */}
        <div>
          <input 
            type="text" placeholder="Nombre" value={nombre} 
            onChange={(e) => setNombre(e.target.value)}
            className={`border p-2 w-full ${errores.nombre ? "border-red-500" : ""}`}
          />
          {errores.nombre && <p className="text-red-500 text-sm">{errores.nombre}</p>}
        </div>

        {/* Correo */}
        <div>
          <input 
            type="email" placeholder="Correo Electrónico" value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className={`border p-2 w-full ${errores.email ? "border-red-500" : ""}`}
          />
          {errores.email && <p className="text-red-500 text-sm">{errores.email}</p>}
        </div>

        {/* Teléfono */}
        <div>
          <input 
            type="text" placeholder="Número de Teléfono" value={telefono} 
            onChange={(e) => setTelefono(e.target.value)}
            className={`border p-2 w-full ${errores.telefono ? "border-red-500" : ""}`}
          />
          {errores.telefono && <p className="text-red-500 text-sm">{errores.telefono}</p>}
        </div>

        {/* Servicio */}
        <div>
          <select value={servicio} onChange={(e) => setServicio(e.target.value)} 
            className={`border p-2 w-full ${errores.servicio ? "border-red-500" : ""}`}>
            <option value="">Selecciona un servicio</option>
            <option value="Uñas">Uñas</option>
            <option value="Pestañas">Pestañas</option>
            <option value="Maquillaje">Maquillaje</option>
            <option value="Pedicura">Pedicura</option>
          </select>
          {errores.servicio && <p className="text-red-500 text-sm">{errores.servicio}</p>}
        </div>

        {/* Fecha */}
        <div>
          <input 
            type="date" value={fecha} 
            onChange={(e) => setFecha(e.target.value)}
            className={`border p-2 w-full ${errores.fecha ? "border-red-500" : ""}`}
          />
          {errores.fecha && <p className="text-red-500 text-sm">{errores.fecha}</p>}
        </div>

        {/* Hora */}
        <div>
          <input 
            type="time" value={hora} 
            onChange={(e) => setHora(e.target.value)}
            className={`border p-2 w-full ${errores.hora ? "border-red-500" : ""}`}
          />
          {errores.hora && <p className="text-red-500 text-sm">{errores.hora}</p>}
        </div>

        {/* Botón de envío */}
        <button type="submit" className="bg-pink-700 text-white px-4 py-2 w-full hover:bg-pink-800 transition">
          Enviar
        </button>
      </form>
    </div>
  );
}