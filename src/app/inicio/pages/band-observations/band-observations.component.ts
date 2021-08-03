
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import { ModalInicioComponent } from '../../components/modal-inicio/modal-inicio.component';

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
  selector: 'app-band-observations',
  templateUrl: './band-observations.component.html',
  styleUrls: ['./band-observations.component.css']
})
export class BandObservationsComponent implements OnInit {

  formu: FormGroup;

  companias = [
    {id: null, name:"Selecionar"},
    {id: 1, name:"peru"},
    {id: 2, name:"lima"},
    {id: 3, name:"chiclayo"},
  ];

  public title : string = "Bandeja de Certificaciones";
  public refresh   : string = "Refrescar"
  public addN   : string = "Nuevo"
  public saveN : string = "Grabar"
  public deleteN : string = "Eliminar"
  public exit : string = "Salir"

  public autorenew : string = "autorenew"
  public add   : string = "add"
  public save : string = "save"
  public delete : string = "delete"
  public close : string = "close"

  displayedColumns: string[] = ['eliminar', 'compania', 'periodo', 'fechai', 'fechac', 'situacion'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm() {
    this.formu = this.fb.group({
      compania: [ , [Validators.required]],
      area: [],
      periodo: [ , [Validators.required]],
      estado: [],
    });
  }

  abrirModal(e){
    e.preventDefault();
    console.log("dddddddddd");
    const dialogRef = this.dialog.open(ModalInicioComponent, {
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
