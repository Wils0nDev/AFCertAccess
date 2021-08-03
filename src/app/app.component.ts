import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';
import { ResultFisrt, ResultSecond } from './interfaces/menu'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  public title = 'AFCertAccess';
  public resultFirst : ResultFisrt = {}
  public resultSecondArray  :  Array<ResultSecond> = []

  constructor ( private _accesosService : GeneralService){

  }

  ngOnInit(): void {

    this.redirecAccsos();
    
  }

  redirecAccsos(){

    this._accesosService.getOptionsMenu()
    .subscribe( resp => {
      this.resultFirst = resp.resultFisrt
      this.resultSecondArray = resp.resultSecond

   
      // if( this.resultFirst.CodigoCompania === '00' || this.resultFirst.CodigoCompania === '' ) {
      //     location.href ="http://www.google.com";
      //   } 

    })
  }

}
