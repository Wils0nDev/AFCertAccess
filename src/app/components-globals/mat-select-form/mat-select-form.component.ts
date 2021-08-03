import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-select-form',
  templateUrl: './mat-select-form.component.html',
  styleUrls: ['./mat-select-form.component.css']
})
export class MatSelectFormComponent implements OnInit {
  // @Input() valor: any = '';
  // @Input() invalid: boolean = false;
  // @Output() setValue = new EventEmitter();
  @Input() data: any;
  @Input() label: string = '';
  @Input() formulario: FormGroup;
  @Input() name: any;

  constructor() { }

  ngOnInit(): void {
    // this.invalid = false;
  }

  // onChange(){
  //   console.log("value: ", this.valor, this.invalid);
  //   console.log("valueForm: ", this.nombre, this.formulario);
  //   this.setValue.emit(this.valor);
  // }
}
