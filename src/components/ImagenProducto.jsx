import { useId } from "react";

export default function ImagenProducto({ src, nombre, elegir, quitar }) {
  const id = useId();
  return (
    <div className="foto">
      {src ? (
        <img src={src} alt={nombre} />
      ) : (
        <div className="foto-vacia">Sin imagen</div>
      )}
      <div className="foto-acc">
        <label htmlFor={id} className="foto-btn">{src ? "Cambiar imagen" : "Insertar imagen"}</label>
        <input id={id} className="sr" type="file" accept="image/*"
          onChange={(e) => { elegir(e.target.files[0]); e.target.value = ""; }} />
        {src && <button className="foto-quitar" onClick={quitar} aria-label={`Quitar imagen de ${nombre}`}>Quitar</button>}
      </div>
    </div>
  );
}
