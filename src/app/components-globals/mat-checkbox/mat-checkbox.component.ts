import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-checkbox',
  templateUrl: './mat-checkbox.component.html',
  styleUrls: ['./mat-checkbox.component.css']
})
export class MatCheckboxComponent implements OnInit {


  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false

  constructor() { }

  ngOnInit(): void {
  }

}
