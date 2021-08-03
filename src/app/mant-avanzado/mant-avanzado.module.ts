import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantAvanzadoRoutingModule } from './mant-avanzado-routing.module';
import { PeriodosComponent } from './pages/periodos/periodos.component';
import { ComponentsGlobalsModule } from '../components-globals/components.globals.module';
import { ModulesMaterialModule } from '../modules_material/modules-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquivalenciaComponent } from './pages/equivalencia/equivalencia.component';
import { AnomaliasComponent } from './pages/anomalias/anomalias.component';
import { LogsProcesosComponent } from './pages/logs-procesos/logs-procesos.component';

@NgModule({
  declarations: [PeriodosComponent, EquivalenciaComponent, AnomaliasComponent, LogsProcesosComponent],
  imports: [
    CommonModule,
    MantAvanzadoRoutingModule,
    ModulesMaterialModule,
    ComponentsGlobalsModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class MantAvanzadoModule { }
