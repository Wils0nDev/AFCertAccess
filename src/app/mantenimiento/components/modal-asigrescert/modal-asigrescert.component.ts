import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalBusquedatrabajadorComponent } from '../modal-busquedatrabajador/modal-busquedatrabajador.component';

@Component({
  selector: 'app-modal-asigrescert',
  templateUrl: './modal-asigrescert.component.html',
  styleUrls: ['./modal-asigrescert.component.css']
})
export class ModalAsigrescertComponent implements OnInit {

  formu: FormGroup;

  companias = [
    {id: null, name:"Selecionar"},
    {id: 1, name:"peru"},
    {id: 2, name:"lima"},
    {id: 3, name:"chiclayo"},
  ];


  
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

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

  openModalBusqueda(e){
    e.preventDefault();
    console.log("dddddddddd");
    const dialogRef = this.dialog.open(ModalBusquedatrabajadorComponent, {
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
