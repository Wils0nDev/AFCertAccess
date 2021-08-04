import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  selector: 'app-modal-busquedatrabajador',
  templateUrl: './modal-busquedatrabajador.component.html',
  styleUrls: ['./modal-busquedatrabajador.component.css']
})
export class ModalBusquedatrabajadorComponent implements OnInit {

  formu: FormGroup;

  companias = [
    {id: null, name:"Selecionar"},
    {id: 1, name:"peru"},
    {id: 2, name:"lima"},
    {id: 3, name:"chiclayo"},
  ];

  displayedColumns: string[] = ['eliminar', 'compania', 'periodo', 'fechai', 'fechac', 'situacion'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm() {
    this.formu = this.fb.group({
      compania: [1 , [Validators.required]],
      area: [1],
      periodo: [1 , [Validators.required]],
      estado: [1],
    });
  }
}
