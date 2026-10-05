import CantidadInput from "./CantidadInput";
import { COP, MSG_MAX } from "../utils/formato";

export default function LineaCarrito({ item, fijar, quitar, avisar }) {
  // PUNTO 6: mínimo 1 -> toast con opción de eliminar
  const pedirEliminar = () =>
    avisar(`Esta es la cantidad mínima. ¿Desea eliminar "${item.nombre}" del carrito?`, {
      label: "Sí, eliminar",
      fn: () => quitar(item.id),
    });

  return (
    <div className="item">
      <div className="top">
        <span>{item.nombre}</span>
        <span>{COP.format(item.precio)}</span>
      </div>
      <div className="ctl">
        <button className="mini" aria-label={`Restar una unidad de ${item.nombre}`}
          onClick={() => (item.cantidad <= 1 ? pedirEliminar() : fijar(item.id, item.cantidad - 1))}>
          −
        </button>
        <CantidadInput
          valor={item.cantidad}
          max={item.stock}
          etiqueta={`Cantidad de ${item.nombre} en el carrito`}
          onCambio={(n) => fijar(item.id, n)}
          onMinimo={pedirEliminar}
          onMaximo={() => avisar(MSG_MAX)}
        />
        <button className="mini" aria-label={`Sumar una unidad de ${item.nombre}`}
          onClick={() => (item.cantidad >= item.stock ? avisar(MSG_MAX) : fijar(item.id, item.cantidad + 1))}>
          +
        </button>
        <button className="quitar" onClick={() => quitar(item.id)}>Quitar</button>
        <span className="sub-l">{COP.format(item.precio * item.cantidad)}</span>
      </div>
    </div>
  );
}
