import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.css']
})
export class MatInputComponent implements OnInit {
  @Input() data: any;
  @Input() label: string = '';
  @Input() formulario: FormGroup;
  @Input() name: string;
  @Input() desabilitar: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
