import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuComponent } from './mat-menu/mat-menu.component';
import { MatToolbarComponent } from './mat-toolbar/mat-toolbar.component';
import { ModulesMaterialModule } from '../modules_material/modules-material.module';
import { MatCardTitleComponent } from './mat-card-title/mat-card-title.component';
import { MatCardFormComponent } from './mat-card-form/mat-card-form.component';
import { MatSelectFormComponent } from './mat-select-form/mat-select-form.component';
import { MatDatepickerFormComponent } from './mat-datepicker-form/mat-datepicker-form.component';
import { MatLabelFormComponent } from './mat-label-form/mat-label-form.component';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';

@NgModule({
  declarations: [MatMenuComponent, MatToolbarComponent, MatCardTitleComponent, MatSelectFormComponent, MatDatepickerFormComponent, MatLabelFormComponent, MatButtonComponent, MatCheckboxComponent],
  imports: [
    CommonModule,
    ModulesMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
        MatToolbarComponent,
        MatCardTitleComponent,
        MatLabelFormComponent,
        MatButtonComponent,
        MatSelectFormComponent,
        MatDatepickerFormComponent  
  ]
})
export class ComponentsGlobalsModule { }
