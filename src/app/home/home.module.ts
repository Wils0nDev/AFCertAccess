import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsGlobalsModule } from '../components-globals/components.globals.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsGlobalsModule,
  ]
})
export class HomeModule { }
