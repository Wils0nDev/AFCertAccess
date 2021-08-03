import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Rutas } from './utils/rutas';

const routes: Routes = [

  { path : '', component : HomeComponent, pathMatch : 'full' },
  
  { path : Rutas.mantenimientoavanzado, 
    loadChildren: () => import('./mant-avanzado/mant-avanzado.module').then(mod => mod.MantAvanzadoModule) 
  },

  { path : Rutas.inicio, 
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule) 
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
