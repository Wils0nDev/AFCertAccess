import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-label-form',
  templateUrl: './mat-label-form.component.html',
  styleUrls: ['./mat-label-form.component.css']
})
export class MatLabelFormComponent implements OnInit {



  
  @Input() dato : string = "";
  

  constructor() { }

  ngOnInit(): void {

  }

}
