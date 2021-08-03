import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodosComponent } from './pages/periodos/periodos.component';
import { EquivalenciaComponent } from './pages/equivalencia/equivalencia.component';
import { AnomaliasComponent } from './pages/anomalias/anomalias.component';
import { LogsProcesosComponent } from './pages/logs-procesos/logs-procesos.component';

const routes: Routes = [
  { path: 'periodos', component: PeriodosComponent },
  { path: 'equivalencias', component: EquivalenciaComponent },
  { path: 'anomalias', component: AnomaliasComponent },
  { path: 'logs', component: LogsProcesosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantAvanzadoRoutingModule { }
