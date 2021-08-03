import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcaCertComponent } from './pages/bca-cert/bca-cert.component';
import { CertAutComponent } from './pages/cert-aut/cert-aut.component';
import { BandObservationsComponent } from './pages/band-observations/band-observations.component';

const routes: Routes = [

  { path: 'certbandeja', component: BcaCertComponent },
  { path: 'certautomatica', component: CertAutComponent },
  { path: 'bandobservaciones', component: BandObservationsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
