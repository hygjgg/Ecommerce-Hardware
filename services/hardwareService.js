// src/services/hardwareService.js
import { inventarioHardware, ventasHardware } from '../data/hardwareMock';

// Función auxiliar para simular el tiempo de respuesta del servidor (500 milisegundos)
const simularDemora = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
};

/**
 * Trae todo el inventario
 */
export const getInventario = () => {
  return simularDemora(inventarioHardware);
};

/**
 * Trae todas las ventas
 */
export const getVentas = () => {
  return simularDemora(ventasHardware);
};

/**
 * Filtra ventas por rango de fechas (Formato: 'YYYY-MM-DD')
 */
export const getVentasPorFecha = (fechaInicio, fechaFin) => {
  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);

  const filtradas = ventasHardware.filter(venta => {
    const fechaVenta = new Date(venta.fecha);
    return fechaVenta >= inicio && fechaVenta <= fin;
  });

  return simularDemora(filtradas);
};

/**
 * Filtra y agrupa las alertas de stock
 */
export const getAlertasStock = () => {
  const alertas = inventarioHardware.reduce((acc, prod) => {
    if (prod.stock === 0) {
      acc.agotados.push(prod);
    } else if (prod.stock <= prod.stockMinimo) {
      acc.bajoStock.push(prod);
    }
    return acc;
  }, { agotados: [], bajoStock: [] });

  return simularDemora(alertas);
};
