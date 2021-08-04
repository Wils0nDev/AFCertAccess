import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import  { delegados } from '../../api/delegados';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor() { }

  getDataDelegadosService(datos) {
    // const url = `${urlBase}/companias`;
    // return this.http.get(url);
    console.log(datos);
    console.log(delegados);
    let data = of(delegados);
    return data;
  }

}
