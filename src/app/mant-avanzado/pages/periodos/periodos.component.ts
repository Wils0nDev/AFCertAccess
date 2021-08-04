import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { MantavanzadoService } from '../../services/mantavanzado.service';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class PeriodosComponent implements OnInit {
  formu: FormGroup;

  public title : string = "Mantenimiento de Calendario de Procesos";
  public companiasArr = [];
  public periodosArr = [];
  public submit: string = "submit"

  situacion = [
    {code: 1, description:"peru"},
    {code: 2, description:"lima"},
    {code: 3, description:"chiclayo"},
  ]

  displayedColumns: string[] = ['eliminar', 'compania', 'periodo', 'fechai', 'fechac', 'situacion'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ELEMENT_DATA: any[];
  dataSource = new MatTableDataSource<any>();
 
  constructor(private fb: FormBuilder,
    private generalService: GeneralService,
    private mantavanzadoService: MantavanzadoService
    ) { 
      this.crearForm();
    }

  ngOnInit(): void {
    this.getCompanias();
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

  getCompanias() {
    this.generalService.getCompaniaService()
      .subscribe(
        (data: any) => {
          this.companiasArr = data.resultFisrt;
          let idVal = this.companiasArr.length > 0 ? this.companiasArr[0].code: null;
          this.formu.controls.compania.setValue(idVal);
          this.getPeriodosInit(idVal);
        },
        (error) => console.log("ocurrio un error", error)
      );
  }

  changeCompania(val){
    this.getPeriodos(val);
  }

  getPeriodosInit(id: string) {
    this.generalService.getPeriodosService(id)
      .subscribe(
        (data) => {
          this.periodosArr = data.resultFisrt;
          let idVal = this.periodosArr.length > 0 ? this.periodosArr[0].code: null;
          this.formu.controls.periodo.setValue(idVal);
          this.getData();
        },
        (error) => console.log("ocurrio un error")
      );
  }

  getPeriodos(id: string) {
    this.generalService.getPeriodosService(id)
      .subscribe(
        (data) => {
          this.periodosArr = data.resultFisrt;
          let idVal = this.periodosArr.length > 0 ? this.periodosArr[0].code: null;
          this.formu.controls.periodo.setValue(idVal);
        },
        (error) => console.log("ocurrio un error")
      );
  }

  getData() {
    console.log("getData", this.formu.value);
    this.mantavanzadoService.getDataPeriodosService(this.formu.value).subscribe(
      (data) => this.ELEMENT_DATA = data,
      (error) => console.log("ocurrio un error equivalencias")
    );
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  saveButon(val){
    if(this.formu.valid){
      console.log("valid", this.formu.value);
    }else{
      console.log("invalid", this.formu.get('compania').value);
      this.formu.markAllAsTouched();
    }
  }

}
