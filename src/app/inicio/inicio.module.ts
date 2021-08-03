import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { BcaCertComponent } from './pages/bca-cert/bca-cert.component';
import { ComponentsGlobalsModule } from '../components-globals/components.globals.module';
import { ModulesMaterialModule } from '../modules_material/modules-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalInicioComponent } from './components/modal-inicio/modal-inicio.component';
import { CertAutComponent } from './pages/cert-aut/cert-aut.component';
import { BandObservationsComponent } from './pages/band-observations/band-observations.component';


@NgModule({
  declarations: [BcaCertComponent, ModalInicioComponent, CertAutComponent, BandObservationsComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ComponentsGlobalsModule,
    ModulesMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InicioModule { }
