import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-select-form',
  templateUrl: './mat-select-form.component.html',
  styleUrls: ['./mat-select-form.component.css']
})
export class MatSelectFormComponent implements OnInit {
  @Input() data: any;
  @Input() label: string = '';
  @Input() formulario: FormGroup;
  @Input() name: any;

  @Output() changeSelect : EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onChange(valor){
    this.changeSelect.emit(valor);
  }
}
