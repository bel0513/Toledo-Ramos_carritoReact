import { useState, useEffect, useCallback } from "react";

const CLAVE = "imagenes-palmira";

// Reduce la imagen a máx. 600 px para que quepa en localStorage
function comprimir(archivo) {
  return new Promise((ok, fallo) => {
    const lector = new FileReader();
    lector.onerror = fallo;
    lector.onload = () => {
      const img = new Image();
      img.onerror = fallo;
      img.onload = () => {
        const k = Math.min(1, 600 / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * k);
        c.height = Math.round(img.height * k);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        ok(c.toDataURL("image/jpeg", 0.82));
      };
      img.src = lector.result;
    };
    lector.readAsDataURL(archivo);
  });
}

export default function useImagenes(avisar) {
  const [imagenes, setImagenes] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CLAVE)) || {}; }
    catch { return {}; }
  });

  useEffect(() => {
    try { localStorage.setItem(CLAVE, JSON.stringify(imagenes)); }
    catch { avisar("No hay espacio para guardar más imágenes en este navegador"); }
  }, [imagenes, avisar]);

  const elegir = useCallback(async (id, archivo) => {
    if (!archivo) return;
    if (!archivo.type.startsWith("image/")) return avisar("El archivo debe ser una imagen (JPG, PNG, WebP...)");
    try {
      const url = await comprimir(archivo);
      setImagenes((m) => ({ ...m, [id]: url }));
    } catch {
      avisar("No se pudo leer la imagen. Prueba con otra.");
    }
  }, [avisar]);

  const quitar = useCallback((id) => setImagenes((m) => {
    const { [id]: _, ...resto } = m;
    return resto;
  }), []);

  return { imagenes, elegir, quitar };
}
