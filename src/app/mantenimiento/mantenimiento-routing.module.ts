import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UprespcertComponent } from './pages/uprespcert/uprespcert.component';


const routes: Routes = [
  {path: 'modificarresponsablecert', component : UprespcertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimentoRoutingModule { }
