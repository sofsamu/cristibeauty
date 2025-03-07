"use client";
import { useState, useEffect } from "react";

export default function AdminCitas() {
  const [citas, setCitas] = useState([]);
  const [editando, setEditando] = useState(null); // Índice de la cita en edición
  const [citaEditada, setCitaEditada] = useState({ nombre: "", servicio: "", fecha: "", observaciones: "" });

  // Cargar citas al iniciar
  useEffect(() => {
    const data = localStorage.getItem("citas");
    if (data) setCitas(JSON.parse(data));
  }, []);

  // Guardar en localStorage cada vez que cambien las citas
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Eliminar una cita
  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  // Activar modo edición
  const editarCita = (index) => {
    setEditando(index);
    setCitaEditada(citas[index]); // Cargar datos actuales en el formulario de edición
  };

  // Guardar cambios en la cita editada
  const guardarEdicion = () => {
    const nuevasCitas = [...citas];
    nuevasCitas[editando] = citaEditada; // Reemplazar los datos con los nuevos
    setCitas(nuevasCitas);
    setEditando(null); // Salir del modo edición
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-pink-700 text-center">Administrar Citas</h2>

      <ul className="mt-4 space-y-4">
        {citas.length === 0 ? (
          <p className="text-gray-500 text-center">No hay citas agendadas.</p>
        ) : (
          citas.map((cita, index) => (
            <li key={index} className="bg-gray-100 p-4 shadow-md">
              {editando === index ? (
                // 🔹 Formulario de edición
                <div className="space-y-2">
                  <input 
                    type="text" 
                    value={citaEditada.nombre} 
                    onChange={(e) => setCitaEditada({ ...citaEditada, nombre: e.target.value })} 
                    className="border p-2 w-full"
                  />
                  <input 
                    type="text" 
                    value={citaEditada.servicio} 
                    onChange={(e) => setCitaEditada({ ...citaEditada, servicio: e.target.value })} 
                    className="border p-2 w-full"
                  />
                  <input 
                    type="date" 
                    value={citaEditada.fecha} 
                    onChange={(e) => setCitaEditada({ ...citaEditada, fecha: e.target.value })} 
                    className="border p-2 w-full"
                  />
                  <textarea
                    placeholder="Observaciones"
                    value={citaEditada.observaciones || ""}
                    onChange={(e) => setCitaEditada({ ...citaEditada, observaciones: e.target.value })}
                    className="border p-2 w-full"
                  ></textarea>

                  <button 
                    onClick={guardarEdicion} 
                    className="bg-green-500 text-white px-4 py-2 mt-2 w-full">
                    Guardar Cambios
                  </button>
                </div>
              ) : (
                // 🔹 Vista normal de la cita
                <div>
                  <p><strong>{cita.nombre}</strong></p>
                  <p>{cita.servicio} - {cita.fecha}</p>
                  <p className="text-gray-600 italic">📝 {cita.observaciones || "Sin observaciones"}</p>
                  
                  <div className="flex justify-between mt-3">
                    <button 
                      onClick={() => editarCita(index)} 
                      className="text-blue-500 hover:text-blue-700 transition">
                      Editar
                    </button>
                    <button 
                      onClick={() => eliminarCita(index)} 
                      className="text-red-500 hover:text-red-700 transition">
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}