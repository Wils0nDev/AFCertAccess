import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { ResultSecond } from '../../interfaces/menu';
import { fromEvent, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { rutas } from '../../utils/constantes';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.css']
})
export class MatToolbarComponent implements OnInit {

  @Input() toolbar: Array<ResultSecond>
  public menuToolbar: Observable<any>
  public menuNew : Array<any> = [];

  public menuPadre: Array<string> = []


  public inicio: string
  public inicioArr: any = [];





  public inicioRuta: string = "/Inicio"

  public mant: string = ""
  public mantArr: any = [{ titulo: "Aplicaciones", ruta: '/' }, { titulo: "Perfiles Funcionales", ruta: '/' }];

  public manta: string = "Mantenimiento Avanzado";

  public mantaArr: any = [
    { titulo: "Nuevos Periodos de Certificación", ruta: '/mantenimientoavanzado/periodos' },
    { titulo: "Equivalencia por empleado", ruta: '/mantenimientoavanzado/equivalencias' },
    { titulo: "Bandeja de Anomalías", ruta: '/mantenimientoavanzado/anomalias' },
    { titulo: "Log de Procesos", ruta: '/mantenimientoavanzado/logs' },
    { titulo: "Mantenimiento Guías de Proceso", ruta: '/' },
    { titulo: "Depuración de Periodos", ruta: '/' },
    { titulo: "Carga de Archivos (V+ / IG)", ruta: '/' },
  ];

  public mantm: string = "Mantenimiento Masivo";
  public mantmArr: any = [{ titulo: "Grupos de CDR", ruta: '/' }, { titulo: "Perfiles Funcionales", ruta: '/' }];

  public ayuda: string = "Ayuda"
  public ayudaArr: any = [{ titulo: "Guia de ayuda", ruta: '/' }];

  public perfil: string = "Perfil"
  public perfilArr: any = [];


  constructor(private _generalSerive: GeneralService) { }

  ngOnInit(): void {
    this.BuildMenu();
    // this.inicio = this.BuildMenu(this.toolbar, '02.009.01').titulo
    // this.mant = this.BuildMenu(this.toolbar, '02.009.02').titulo
    // this.inicioArr = this.BuildMenu(this.toolbar, '02.009.01').options

  }

  BuildMenu(){
    this.menuNew = [];
    let aux4 = {codigo: '' , path: '/'};

    for (const item of this.toolbar) {
      let objAux = {};
      let aux1: any[] = item.IXOpcion.split('.');

      if(aux1.length == 3){
        objAux = { codPadre: item.IXOpcion, titulo: item.DescripcionOpcion };
        this.menuNew.push(objAux);
      }

      let aux3 = [];
      for (const option of this.toolbar) {
        if(option.IXOpcion.includes((item.IXOpcion+'.'))){

          // rutas.find(r => r.codigo == option.IXOpcion)
          option['ruta'] = rutas.find(r => r.codigo == option.IXOpcion) || aux4;
          aux3.push(option);
        }
      }

      objAux['options'] = aux3;
    }
  }
  // BuildMenu(valora: Array<any>, valorPadre: string): any {

  //   var response =
  //     {
  //       titulo: "",
  //       options: []
  //     }

  //   valora.map(val => {

  //     if (val.IXOpcion === valorPadre) {

  //       response.titulo = val.DescripcionOpcion

  //     }

  //     if (val.IXOpcionPadre === valorPadre) {

  //       response.options.push(val)

  //     }
  //   }
  //   )

  //   return response
  // }
}
