import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-textarea',
  templateUrl: './mat-textarea.component.html',
  styleUrls: ['./mat-textarea.component.css']
})
export class MatTextareaComponent implements OnInit {
  @Input() label: string = '';
  @Input() formulario: FormGroup;
  @Input() name: string;
  @Input() desabilitar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
