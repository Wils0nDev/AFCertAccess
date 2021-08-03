import { Injectable } from '@angular/core';
import { mantavanzado } from '../interfaces/mantavanzado';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';

const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class MantavanzadoService {

  constructor( private http: HttpClient ) { }

  getDataEquivalenciasService() {
    // const url = `${urlBase}/companias`;
    // return this.http.get(url);
    let data = of([
      { eliminar: '00063', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK'},
      { eliminar: '00064', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK'},
      { eliminar: '00065', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK'},
      { eliminar: '00066', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK'},
      { eliminar: '00067', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK'},
      { eliminar: '00068', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK'},
      { eliminar: '00069', compania: '09323', periodo: 'PARRA LUIS - SCOTIABANK', fechai: '0000009323', fechac: 'PARRA LUIS - SCOTIABANK'},
    ]);
    return data;
  }

  getDataPeriodosService() {
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
