import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABaseLayoutComponent } from './Dashboard/a-base-layout/a-base-layout.component';
import { BHomeComponent } from './Dashboard/b-home/b-home.component';
import { ChecksRadiosComponent } from './Dashboard/c-forms/checks-radios/checks-radios.component';
import { FloatingLabelsComponent } from './Dashboard/c-forms/floating-labels/floating-labels.component';
import { FormControlComponent } from './Dashboard/c-forms/form-control/form-control.component';
import { FormSelectComponent } from './Dashboard/c-forms/form-select/form-select.component';
import { InputGroupComponent } from './Dashboard/c-forms/input-group/input-group.component';
import { LayoutComponent } from './Dashboard/c-forms/layout/layout.component';
import { ValidationComponent } from './Dashboard/c-forms/validation/validation.component';


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
