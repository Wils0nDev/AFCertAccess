import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { mantavanzado } from '../../interfaces/mantavanzado';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validate } from 'json-schema';

const ELEMENT_DATA: any[] = [
  {eliminar: 1, compania: 'Banco', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: 2, compania: 'Banco', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: 3, compania: 'Banco', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: 4, compania: 'Banco', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: 5, compania: 'Banco', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: 6, compania: 'Banco', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: 7, compania: 'Banco', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
];

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class PeriodosComponent implements OnInit {
  formu: FormGroup;

  public title : string = "Mantenimiento de Calendario de Procesos";

  public submit: string = "submit"

  companias = [
    {id: null, name:"Selecionar"},
    {id: 1, name:"peru"},
    {id: 2, name:"lima"},
    {id: 3, name:"chiclayo"},
  ];

  periodos = [
    {id: null, name:"Selecionar"},
    {id: 1, name:"peru"},
    {id: 2, name:"lima"},
    {id: 3, name:"chiclayo"},
  ]

  displayedColumns: string[] = ['eliminar', 'compania', 'periodo', 'fechai', 'fechac', 'situacion'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
 

  private peridom : mantavanzado = {}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearForm();
    this.dataSource.paginator = this.paginator;
    
    // let nombre = localStorage.getItem("nombre");
    // console.log("aaa: ", nombre);
    
  }

  crearForm() {
    this.formu = this.fb.group({
      compania: [ , [Validators.required]],
      periodo: [ , [Validators.required]],
      fechaInicial: [null],
      fechaCierre: [null],
      situacion: [ ],
    });
  }

  saveButon(v){
    if(this.formu.valid){
      console.log("valid", this.formu.value);
    }else{
      
      console.log("invalid", this.formu.get('compania').value);
      this.formu.markAllAsTouched();
    }
  }
  

}
