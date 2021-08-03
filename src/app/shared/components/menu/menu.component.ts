import { Component, OnInit, Input } from '@angular/core';
import { ResultFisrt, ResultSecond } from '../../../interfaces/menu'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu : Array<ResultSecond>

  constructor() { }

  ngOnInit(): void {  }

}
