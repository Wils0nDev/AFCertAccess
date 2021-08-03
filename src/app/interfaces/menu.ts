export interface Menu {
    HttpStatusResult?: number;
    estado?:           boolean;
    mensaje?:          null;
    resultFisrt?:      ResultFisrt;
    resultSecond?:     ResultSecond[];
}

export interface ResultFisrt {
    codigoUsuario?:          string;
    codigoEmpleado?:         string;
    firmaUsuario?:           string;
    nombre?:                 string;
    correo?:                 string;
    cDR?:                    string;
    codigoBT?:               string;
    CodigoRol?:              string;
    DescripcionRol?:         string;
    CodigoCompania?:         string;
    CodigoCompaniaDelegado?: string;
}

export interface ResultSecond {
    FirmaUsuario?:      string;
    CodigoOpcion?:      string;
    DescripcionOpcion?: string;
    Icono?:             string;
    Menu?:              string;
    Titulo?:            string;
    Programa?:          string;
    IXOpcion?:          string;
    IXOpcionPadre?:     string;
    InternalList?:      any[];
    MensajeError?:      string;
}


