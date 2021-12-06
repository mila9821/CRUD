export interface Cliente {
    id:              number;
    nombre:          string;
    foto:            string;
    modo:            string;
    telefono:        string;
    email:           string;
    pais:            string;
    dni:             string;
    testimonios:     any[];
    detalleReservas: any[];
}