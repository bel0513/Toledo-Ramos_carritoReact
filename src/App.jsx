import { useState, useEffect } from "react";
import { PRODUCTOS } from "./data/productos";
import { MSG_MAX } from "./utils/formato";
import useToasts from "./hooks/useToasts";
import Navbar from "./components/Navbar";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
import Toasts from "./components/Toasts";

export default function App() {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("carrito-palmira")) || []; }
    catch { return []; }
  });
  const [abierto, setAbierto] = useState(false);
  const { toasts, avisar, cerrar } = useToasts();

  useEffect(() => {
    localStorage.setItem("carrito-palmira", JSON.stringify(items));
  }, [items]);

  // PUNTOS 3 y 5: una sola línea por producto, nunca más del stock
  const agregar = (p, cant) => {
    const actual = items.find((i) => i.id === p.id)?.cantidad || 0;
    let nueva = actual + cant;
    if (nueva > p.stock) {
      nueva = p.stock;
      avisar(MSG_MAX);
    }
    setItems((its) =>
      actual
        ? its.map((i) => (i.id === p.id ? { ...i, cantidad: nueva } : i))
        : [...its, { ...p, cantidad: nueva }]
    );
  };
  const fijar = (id, n) => setItems((its) => its.map((i) => (i.id === id ? { ...i, cantidad: n } : i)));
  const quitar = (id) => setItems((its) => its.filter((i) => i.id !== id));
  const unidades = items.reduce((s, i) => s + i.cantidad, 0);

  return (
    <>
      <Navbar unidades={unidades} abrir={() => setAbierto(true)} />
      <main>
        <h1>Lo mejor de la región, a un clic</h1>
        <p className="sub">Elige la cantidad y agrégala al carrito. Solo puedes pedir lo que hay en bodega.</p>
        <section className="grid" aria-label="Catálogo de productos">
          {PRODUCTOS.map((p) => (
            <Producto
              key={p.id}
              producto={p}
              agregar={agregar}
              avisar={avisar}
              enCarrito={items.find((i) => i.id === p.id)?.cantidad || 0}
            />
          ))}
        </section>
      </main>
      {abierto && (
        <Carrito items={items} cerrar={() => setAbierto(false)} fijar={fijar} quitar={quitar} avisar={avisar} />
      )}
      <Toasts toasts={toasts} cerrar={cerrar} />
    </>
  );
}
