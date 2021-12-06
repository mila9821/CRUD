export interface Restaurante {
    id:                      number;
    nombrePlato:             string;
    precioPlato:             number;
    fotoRestaurante:         string;
    tieneDetalleReservaRest: any[];
    detalleReservas:         any[];
}