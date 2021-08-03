import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-datepicker-form',
  templateUrl: './mat-datepicker-form.component.html',
  styleUrls: ['./mat-datepicker-form.component.css']
})
export class MatDatepickerFormComponent implements OnInit {
  
  @Input() label: string = '';
  @Input() formulario: FormGroup;
  @Input() name: any;

  constructor() { }

  ngOnInit(): void {
  }

}
