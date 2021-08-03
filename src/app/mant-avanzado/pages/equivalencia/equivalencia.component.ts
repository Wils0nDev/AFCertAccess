import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralService } from '../../../services/general.service';
import { MantavanzadoService } from '../../services/mantavanzado.service';

@Component({
  selector: 'app-equivalencia',
  templateUrl: './equivalencia.component.html',
  styleUrls: ['./equivalencia.component.css']
})
export class EquivalenciaComponent implements OnInit {
  formu: FormGroup;
  title = 'Mantenimiento de Equivalencia por Empleado';
  companiasArr = [];
  sistemasArr = [];
  validadosArr = [];

  displayedColumns: string[] = ['accion', 'eliminar', 'compania', 'periodo', 'fechai', 'fechac'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ELEMENT_DATA: any[];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private fb: FormBuilder, 
    private generalService: GeneralService,
    private mantavanzadoService: MantavanzadoService) {
    this.crearForm();
  }

  ngOnInit(): void {
    this.getCompanias();
    this.getSistemas();
    this.getValidado();
    this.getData();
  }

  crearForm() {
    this.formu = this.fb.group({
      compania: [, [Validators.required]],
      sistema: [, [Validators.required]],
      validado: [, [Validators.required]],
    });
  }

  getCompanias() {
    this.generalService.getCompaniaService()
      .subscribe(
        (data) => this.companiasArr = data,
        (error) => console.log("ocurrio un error")
      );
  }

  getSistemas() {
    this.generalService.getSistemaService()
      .subscribe(
        (data) => this.sistemasArr = data,
        (error) => console.log("ocurrio un error")
      );
  }

  getValidado() {
    this.validadosArr = [
      { id: 1, name: 'SI' },
      { id: 1, name: 'NO' },
    ];
  }

  getData() {
    this.mantavanzadoService.getEquivalenciasService().subscribe(
      (data) => this.ELEMENT_DATA = data,
      (error) => console.log("ocurrio un error equivalencias")
    );
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

}
