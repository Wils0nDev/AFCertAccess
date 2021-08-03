import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.css']
})
export class MatMenuComponent implements OnInit {

  @Input() description : string = ""
  @Input() opciones;
  
  public descriptionText : string = ""
  
  constructor() { }
  
  ngOnInit(): void {
    // console.log(this.opciones);
    // this.opciones = this.opciones;
    
    this.descriptionText = this.description
  }

}
