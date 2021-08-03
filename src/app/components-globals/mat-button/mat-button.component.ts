import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { mantavanzado } from '../../mant-avanzado/interfaces/mantavanzado';

@Component({
  selector: 'app-mat-button',
  templateUrl: './mat-button.component.html',
  styleUrls: ['./mat-button.component.css']
})
export class MatButtonComponent implements OnInit {


  @Output() buscar: EventEmitter<String> = new EventEmitter();
  public mantavanzo : mantavanzado = {}

  
  @Input() titlebutton : string = ""
  public titleb : string = ""

  @Input() icon : string = ""
  public icontitle : string = ""

  @Input() submit : string = ""
  public tsubmit : string = ""

  @Output() saveClick : EventEmitter<String> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {

    this.titleb = this.titlebutton
    this.icontitle = this.icon
    this.tsubmit = this.submit

  }

  ngButton(){
  this.saveClick.emit('hola')
  }

}
