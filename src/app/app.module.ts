import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABaseLayoutComponent } from './dashboard/a-base-layout/a-base-layout.component';
import { BHomeComponent } from './dashboard/b-home/b-home.component';
import { ChecksRadiosComponent } from './dashboard/c-forms/checks-radios/checks-radios.component';
import { FloatingLabelsComponent } from './dashboard/c-forms/floating-labels/floating-labels.component';
import { FormControlComponent } from './dashboard/c-forms/form-control/form-control.component';
import { FormSelectComponent } from './dashboard/c-forms/form-select/form-select.component';
import { InputGroupComponent } from './dashboard/c-forms/input-group/input-group.component';
import { LayoutComponent } from './dashboard/c-forms/layout/layout.component';
import { ValidationComponent } from './dashboard/c-forms/validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    ABaseLayoutComponent,
    BHomeComponent,
    ChecksRadiosComponent,
    FloatingLabelsComponent,
    FormControlComponent,
    FormSelectComponent,
    InputGroupComponent,
    LayoutComponent,
    ValidationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
