import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    private fb: FormBuilder, 
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.crearForm();
      console.log("modal1:", data);
    }

  ngOnInit(): void {
    this.formu.get('compania').setValue(this.data.compania);
    this.formu.get('descompañia').setValue(this.data.desCompania.trim());
    this.formu.get('periodo').setValue(this.data.periodo);
    this.formu.get('area').setValue(this.data.area);
    this.formu.get('desarea').setValue(this.data.desArea.trim());
  }

  crearForm() {
    this.formu = this.fb.group({
      compania: [ ],
      descompañia: [ ],
      periodo: [ ],
      area: [],
      desarea: [],
      respcert: [],
      desrespcert: [],
      ciaresp: [],
      desciaresp: [],
      docsustento: []
    });
  }

  openModalBusqueda(e){
    e.preventDefault();
    const dialogRef = this.dialog.open(ModalBusquedatrabajadorComponent, {
      maxHeight: '90vh',
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
