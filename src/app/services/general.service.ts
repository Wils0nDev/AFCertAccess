import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import  { apimenu } from '../api/apiprueba';
import  { companias, periodos, periodos1, sistemas } from '../api/datos';

const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getOptionsMenu(){
    // const url = `${urlBase}/companias`;
    // return this.http.get(url);
    let arr = of(apimenu);
    return arr;
  }

  getCompaniaService() {
    let arr = of(companias);
    return arr;
  }

  getPeriodosService(id: string) {
    let arr;
    if(id == '01'){
      arr = of(periodos1);
    }else{
      arr = of(periodos);
    }
    return arr;
  }

  getSistemaService() {
    let arr = of(sistemas);
    return arr;
  }
}
