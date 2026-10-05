import { useState, useEffect } from "react";

const BLOQUEADAS = ["e", "E", "+", "-", ".", ",", "Add", "Subtract", "Decimal"];

// PUNTO 4: campo de cantidad reutilizable (catálogo y carrito)
export default function CantidadInput({ valor, max, onCambio, onMinimo, onMaximo, etiqueta }) {
  const [borrador, setBorrador] = useState(String(valor));
  useEffect(() => setBorrador(String(valor)), [valor]);

  const alTeclear = (e) => {
    if (BLOQUEADAS.includes(e.key)) return e.preventDefault();
    if (e.key.length === 1 && !/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault();
  };

  const alPegar = (e) => {
    if (!/^\d+$/.test(e.clipboardData.getData("text"))) e.preventDefault();
  };

  const alCambiar = (e) => {
    const v = e.target.value;
    if (v === "") return setBorrador("");
    if (!/^\d+$/.test(v)) return;
    const n = parseInt(v, 10);
    if (n < 1) {
      setBorrador(String(valor));
      return onMinimo();
    }
    if (n > max) {
      setBorrador(String(max));
      onCambio(max);
      return onMaximo();
    }
    setBorrador(String(n));
    onCambio(n);
  };

  return (
    <input
      className="qty"
      type="number"
      inputMode="numeric"
      min="1"
      max={max}
      step="1"
      aria-label={etiqueta}
      value={borrador}
      onKeyDown={alTeclear}
      onPaste={alPegar}
      onChange={alCambiar}
      onWheel={(e) => e.currentTarget.blur()}
      onBlur={() => borrador === "" && setBorrador(String(valor))}
    />
  );
}
