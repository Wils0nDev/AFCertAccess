import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-card-title',
  templateUrl: './mat-card-title.component.html',
  styleUrls: ['./mat-card-title.component.css']
})
export class MatCardTitleComponent implements OnInit {


  @Input() title : string = ""
  public titlema : string = ""


  constructor() { }

  ngOnInit(): void {

    this.titlema = this.title 
  }

}
