import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Flexbox
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {​​​​​​​​ MatNativeDateModule }​​​​​​​​ from '@angular/material/core';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule
    
  ]
})
export class ModulesMaterialModule { }
