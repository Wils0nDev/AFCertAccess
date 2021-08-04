import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import  { delegados } from '../../api/delegados';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor() { }

  getDataDelegadosService() {
    // const url = `${urlBase}/companias`;
    // return this.http.get(url);
    console.log(delegados);
    
    let data = of([
      { eliminar: '00063', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK', situacion: 'en proceso'},
      { eliminar: '00064', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK', situacion: 'en proceso'},
      { eliminar: '00065', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK', situacion: 'en proceso'},
      { eliminar: '00066', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK', situacion: 'en proceso'},
      { eliminar: '00067', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK', situacion: 'en proceso'},
      { eliminar: '00068', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK', situacion: 'en proceso'},
      { eliminar: '00069', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK', situacion: 'en proceso'},
    ]);
    return data;
  }

}
