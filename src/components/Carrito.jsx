import { useEffect } from "react";
import LineaCarrito from "./LineaCarrito";
import { COP } from "../utils/formato";

export default function Carrito({ items, cerrar, fijar, quitar, avisar, imagenes }) {
  const unidades = items.reduce((s, i) => s + i.cantidad, 0);
  const total = items.reduce((s, i) => s + i.cantidad * i.precio, 0);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && cerrar();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [cerrar]);

  return (
    <>
      <div className="velo" onClick={cerrar} />
      <aside className="panel" role="dialog" aria-modal="true" aria-label="Carrito de compras">
        <div className="ph">
          <h2>Tu carrito</h2>
          <button className="mini" onClick={cerrar} aria-label="Cerrar carrito">×</button>
        </div>
        <div className="items">
          {items.length === 0 ? (
            <p className="vacio">Aún no hay productos. Agrega algo del catálogo.</p>
          ) : (
            items.map((it) => (
              <LineaCarrito key={it.id} item={it} fijar={fijar} quitar={quitar} avisar={avisar} imagen={imagenes[it.id]} />
            ))
          )}
        </div>
        <div className="pie">
          <div><span>Total de unidades</span><strong>{unidades}</strong></div>
          <div className="total"><span>Total</span><span>{COP.format(total)}</span></div>
        </div>
      </aside>
    </>
  );
}
