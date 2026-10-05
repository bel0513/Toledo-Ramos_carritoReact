import { useState, useCallback } from "react";

export default function useToasts() {
  const [toasts, setToasts] = useState([]);

  const cerrar = useCallback(
    (id) => setToasts((ts) => ts.filter((t) => t.id !== id)),
    []
  );

  // accion opcional: { label, fn }. Los toasts desaparecen solos.
  const avisar = useCallback(
    (texto, accion) => {
      const id = Date.now() + Math.random();
      setToasts((ts) => [...ts.filter((t) => t.texto !== texto), { id, texto, accion }].slice(-3));
      setTimeout(() => cerrar(id), accion ? 7000 : 3500);
    },
    [cerrar]
  );

  return { toasts, avisar, cerrar };
}
