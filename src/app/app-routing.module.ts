import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABaseLayoutComponent } from './Dashboard/a-base-layout/a-base-layout.component';
import { FormControlComponent } from './Dashboard/c-forms/form-control/form-control.component';
import { FormSelectComponent } from './Dashboard/c-forms/form-select/form-select.component';
import { ChecksRadiosComponent } from './Dashboard/c-forms/checks-radios/checks-radios.component';
import { InputGroupComponent } from './Dashboard/c-forms/input-group/input-group.component';
import { FloatingLabelsComponent } from './Dashboard/c-forms/floating-labels/floating-labels.component';
import { LayoutComponent } from './Dashboard/c-forms/layout/layout.component';
import { ValidationComponent } from './Dashboard/c-forms/validation/validation.component';


const routes: Routes = [
  {path:'',component:ABaseLayoutComponent},
  {path:'form-control',component:FormControlComponent},
  {path:'form-select',component:FormSelectComponent},
  {path:'checks&radio',component:ChecksRadiosComponent},
  {path:'input-groups',component:InputGroupComponent},
  {path:'floating-labels',component:FloatingLabelsComponent},
  {path:'layout',component:LayoutComponent},
  {path:'validation',component:ValidationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
