import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalAsigrescertComponent } from '../../components/modal-asigrescert/modal-asigrescert.component';
import { MatDialog } from '@angular/material/dialog';
import { GeneralService } from 'src/app/services/general.service';
import { MantenimientoService } from '../../services/mantenimiento.service';
import { ISelectComp } from 'src/app/interfaces/formularios';

@Component({
  selector: 'app-uprespcert',
  templateUrl: './uprespcert.component.html',
  styleUrls: ['./uprespcert.component.css']
})
export class UprespcertComponent implements OnInit {
  formu: FormGroup;
  public title: string = "Gestión Responsable de Certificación";
  public companiasArr: ISelectComp[] = [];
  public periodosArr: ISelectComp[] = [];

  displayedColumns: string[] = ['accion', 'codarea', 'area', 'responsable', 'ciaresp', 'situacion'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ELEMENT_DATA: any[];
  dataSource = new MatTableDataSource<any>();

  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    private generalService: GeneralService,
    private mantenimientoService: MantenimientoService
  ) {
    this.crearForm();
  }

  ngOnInit(): void {
    this.getCompanias();
  }

  crearForm() {
    this.formu = this.fb.group({
      compania: [, [Validators.required]],
      periodo: [, [Validators.required]],
      cdr: [''],
      area: [''],
      aprc: [''],
    });
  }

  getCompanias() {
    this.generalService.getCompaniaService()
      .subscribe(
        (data: any) => {
          this.companiasArr = data.resultFisrt;
          let idVal = this.companiasArr.length > 0 ? this.companiasArr[0].code : null;
          this.formu.controls.compania.setValue(idVal);
          this.getPeriodosInit(idVal);
        },
        (error) => console.log("ocurrio un error", error)
      );
  }

  getPeriodosInit(id: string) {
    this.generalService.getPeriodosService(id)
      .subscribe(
        (data) => {
          this.periodosArr = data.resultFisrt;
          let idVal = this.periodosArr.length > 0 ? this.periodosArr[0].code : null;
          this.formu.controls.periodo.setValue(idVal);
          this.getData();
        },
        (error) => console.log("ocurrio un error")
      );
  }

  changeCompania(val) {
    this.getPeriodos(val);
  }

  getPeriodos(id: string) {
    this.generalService.getPeriodosService(id)
      .subscribe(
        (data) => {
          this.periodosArr = data.resultFisrt;
          let idVal = this.periodosArr.length > 0 ? this.periodosArr[0].code : null;
          this.formu.controls.periodo.setValue(idVal);
        },
        (error) => console.log("ocurrio un error")
      );
  }

  getData() {
    this.mantenimientoService.getDataDelegadosService(this.formu.value).subscribe(
      (data) => this.ELEMENT_DATA = data.resultFisrt,
      (error) => console.log("ocurrio un error equivalencias")
    );
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  saveButon(val) {
    if (this.formu.valid) {
      console.log("valid", this.formu.value);
    } else {
      console.log("invalid");
      this.formu.markAllAsTouched();
    }
  }

  abrirModal(fila) {
    console.log("editar: ", fila);

    const dialogRef = this.dialog.open(ModalAsigrescertComponent, {
      maxHeight: '90vh',
      width: '70vw',
      disableClose: false,
      data: {
        compania: fila.Delegate_company_code,
        desCompania: fila.Description_company,
        periodo: this.formu.get('periodo').value,
        area: fila.Functional_unit_code,
        desArea: fila.Functional_unit_description
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
