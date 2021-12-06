// es una interfas por solo queremos visualizar y combalidar datos
// la interface se genera mas rapido en: https://app.quicktype.io/
export interface Usuario {
    id:       number;
    nombre:   string;
    login:    string;
    password: string;
    tarea:    string;
    estado:   number;
}
