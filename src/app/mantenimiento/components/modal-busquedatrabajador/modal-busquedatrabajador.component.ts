import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any[] = [
  {eliminar: 1, compania: 'Banco'},
  {eliminar: 2, compania: 'Banco'},
  {eliminar: 3, compania: 'Banco'},
  {eliminar: 4, compania: 'Banco'},
  {eliminar: 5, compania: 'Banco'},
  {eliminar: 6, compania: 'Banco'},
  {eliminar: 7, compania: 'Banco'},
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

  displayedColumns: string[] = ['eliminar', 'compania'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm() {
    this.formu = this.fb.group({
      compania: [1 , [Validators.required]],
      codee: [1],
      app: [1 , [Validators.required]],
      apm: [1],
      name : [1]
    });
  }
}
