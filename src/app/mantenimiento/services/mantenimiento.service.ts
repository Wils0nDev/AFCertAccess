import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import  { delegados } from '../../api/delegados';
import  { trabajador } from '../../api/trabajador';


@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor() { }

  getDataDelegadosService(datos) {
    // const url = `${urlBase}/companias`;
    // return this.http.get(url);

    let data = of(delegados);
    return data;
  }

  getDataEmployee(){


    let data = of(trabajador)
    return data;

  }

}
