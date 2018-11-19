import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ApoliceFormComponent } from './apolice-form/apolice-form.component';
import { ApoliceListComponent } from './apolice-list/apolice-list.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ApoliceFormComponent, ApoliceListComponent]
})
export class ApolicesModule { }