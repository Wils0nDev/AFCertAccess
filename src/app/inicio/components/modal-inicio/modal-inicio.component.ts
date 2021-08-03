import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [
  {eliminar: '0000501', compania: 'KYC/AML & SUSTAINMENT WSB ', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: '0000501', compania: 'KYC/AML & SUSTAINMENT WSB ', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: '0000501', compania: 'KYC/AML & SUSTAINMENT WSB ', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: '0000501', compania: 'KYC/AML & SUSTAINMENT WSB ', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: '0000501', compania: 'KYC/AML & SUSTAINMENT WSB ', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: '0000501', compania: 'KYC/AML & SUSTAINMENT WSB ', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
  {eliminar: '0000501', compania: 'KYC/AML & SUSTAINMENT WSB ', periodo: 202106, fechai: '20/04/2021', fechac: '20/04/2021', situacion: 'enviado'},
];

@Component({
  selector: 'app-modal-inicio',
  templateUrl: './modal-inicio.component.html',
  styleUrls: ['./modal-inicio.component.css']
})
export class ModalInicioComponent implements OnInit {
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
