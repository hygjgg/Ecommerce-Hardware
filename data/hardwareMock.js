// src/data/hardwareMock.js

export const inventarioHardware = [
  { id: "P001", nombre: "NVIDIA RTX 4070 Ti", categoria: "Placas de Video", stock: 12, stockMinimo: 3, precio: 850 },
  { id: "P002", nombre: "AMD Ryzen 7 7800X3D", categoria: "Procesadores", stock: 1, stockMinimo: 5, precio: 400 }, // BAJO STOCK
  { id: "P003", nombre: "Corsair Vengeance DDR5 32GB", categoria: "Memorias RAM", stock: 25, stockMinimo: 8, precio: 120 },
  { id: "P004", nombre: "SSD Kingston NV2 1TB NVMe", categoria: "Almacenamiento", stock: 0, stockMinimo: 10, precio: 70 }, // AGOTADO
  { id: "P005", nombre: "Fuente Corsair RM850e 850W", categoria: "Fuentes", stock: 8, stockMinimo: 2, precio: 140 },
  { id: "P006", nombre: "ASUS ROG Strix B650-A", categoria: "Motherboards", stock: 5, stockMinimo: 3, precio: 220 }
];

export const ventasHardware = [
  {
    id: "V001",
    fecha: "2026-03-01",
    cliente: "Juan Pérez",
    productos: [{ id: "P001", nombre: "NVIDIA RTX 4070 Ti", cantidad: 1, precio: 850 }],
    metodoPago: "Tarjeta de Crédito",
    total: 850
  },
  {
    id: "V002",
    fecha: "2026-03-05",
    cliente: "María López",
    productos: [
      { id: "P002", nombre: "AMD Ryzen 7 7800X3D", cantidad: 1, precio: 400 },
      { id: "P003", nombre: "Corsair Vengeance DDR5 32GB", cantidad: 2, precio: 120 }
    ],
    metodoPago: "Transferencia",
    total: 640
  },
  {
    id: "V003",
    fecha: "2026-03-10",
    cliente: "Carlos Gómez",
    productos: [{ id: "P004", nombre: "SSD Kingston NV2 1TB NVMe", cantidad: 4, precio: 70 }],
    metodoPago: "Efectivo",
    total: 280
  }
];
