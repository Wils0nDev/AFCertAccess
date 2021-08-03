import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ComponentsGlobalsModule } from '../components-globals/components.globals.module';
import { ModulesMaterialModule } from '../modules_material/modules-material.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    ComponentsGlobalsModule
    ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
