import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import  { apimenu } from '../api/apiprueba';

const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }


  getOptionsMenu(){
    let companiasArr = of(apimenu);
    return companiasArr;
  }

  getCompaniaService() {
    // const url = `${urlBase}/companias`;
    // return this.http.get(url);
    let companiasArr = of([
      { id: 1, name: 'SCOTIABANK  PERÚ S.A.A' },
      { id: 1, name: 'SERVICIO DE COBRANZAS E INVERS' },
      { id: 1, name: 'COMPANIAX' },
    ]);
    return companiasArr;
  }

  getSistemaService() {
    let sistemasArr = of([
      { id: 1, name: 'PRUEBA' },
      { id: 1, name: 'SYS' },
      { id: 1, name: 'SPRING' },
    ]);
    return sistemasArr;
  }
}
