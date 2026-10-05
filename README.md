# Carrito de Compras – TIENDA PALMIRA

- **Aprendiz:** _Angel Toledo_ — **Ficha:** _3409924_
- **Tecnología usada:** React 18 + Vite
- **Repositorio:** https://github.com/bel0513/Toledo-Ramos_carritoReact.git

## Instalar y ejecutar

```bash
git clone <URL-del-repositorio>
cd Apellido_Nombre_CarritoReact
npm install
npm run dev
```

## Estructura

```
src/
├── data/productos.js          # catálogo JSON
├── hooks/useToasts.js         # sistema de toasts
├── utils/formato.js           # moneda COP y mensajes
└── components/
    ├── Navbar.jsx  Producto.jsx  Carrito.jsx
    ├── LineaCarrito.jsx  CantidadInput.jsx  Toasts.jsx
```

## Evidencias (carpeta `/evidencias`)

| # | Funcionalidad | Captura | ¿Funciona? |
|---|---|---|---|
| 1 | Navbar e ícono con contador | evidencias/01-navbar.png | Sí |
| 2 | Agregar producto desde el catálogo | evidencias/02-agregar.png | Sí |
| 3 | Bloqueo de "e", negativos y 0 | evidencias/03-bloqueo.png | Sí |
| 4 | Toast de stock máximo | evidencias/04-toast-max.png | Sí |
| 5 | Toast de mínimo con opción de eliminar | evidencias/05-toast-min.png | Sí |
| 6 | Subtotales y total | evidencias/06-totales.png | Sí |
| 7 | Producto eliminado y total recalculado | evidencias/07-eliminar.png | Sí |
