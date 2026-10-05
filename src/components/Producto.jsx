import { useState } from "react";
import CantidadInput from "./CantidadInput";
import ImagenProducto from "./ImagenProducto";
import { COP, MSG_MAX, MSG_MIN } from "../utils/formato";

export default function Producto({ producto: p, enCarrito, agregar, avisar, imagen, elegirImagen, quitarImagen }) {
  const [cant, setCant] = useState(1);
  const sinStock = p.stock - enCarrito <= 0;

  return (
    <article className="prod">
      <ImagenProducto src={imagen} nombre={p.nombre}
        elegir={(f) => elegirImagen(p.id, f)} quitar={() => quitarImagen(p.id)} />
      <h2>{p.nombre}</h2>
      <div className="precio">{COP.format(p.precio)}</div>
      <div className="stock">
        Stock disponible: {p.stock}
        {enCarrito > 0 && ` · ${enCarrito} en tu carrito`}
      </div>
      <div className="fila">
        <CantidadInput
          valor={cant}
          max={p.stock}
          etiqueta={`Cantidad de ${p.nombre}`}
          onCambio={setCant}
          onMinimo={() => avisar(MSG_MIN)}
          onMaximo={() => avisar(MSG_MAX)}
        />
        <button
          className="btn"
          disabled={sinStock}
          onClick={() => {
            agregar(p, cant);
            setCant(1);
          }}
        >
          {sinStock ? "Sin stock disponible" : "Agregar"}
        </button>
      </div>
    </article>
  );
}
