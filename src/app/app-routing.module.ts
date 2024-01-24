import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontrolComponent } from './Dashboard/Forms/formcontrol/formcontrol.component';
import { HomeComponent } from './Dashboard/home/home/home.component';
import { SelectComponent } from './Dashboard/Forms/select/select.component';
import { CheckRadiosComponent } from './Dashboard/Forms/check-radios/check-radios.component';
import { InputComponent } from './Dashboard/Forms/input/input.component';
import { AccordionComponent } from './Dashboard/Components/accordion/accordion.component';
import { AlertComponent } from './Dashboard/Components/alert/alert.component';
import { ButtonComponent } from './Dashboard/Components/button/button.component';
import { CardComponent } from './Dashboard/Components/card/card.component';
import { CarouselComponent } from './Dashboard/Components/carousel/carousel.component';
import { ModalComponent } from './Dashboard/Components/modal/modal.component';
import { NavbarComponent } from './Dashboard/Components/navbar/navbar.component';
import { OffcanvasComponent } from './Dashboard/Components/offcanvas/offcanvas.component';
import { CollapseComponent } from './Dashboard/Components/collapse/collapse.component';
import { OsmMapComponent } from './osm-map/osm-map.component';
import { MapComponent } from './map/map.component';

let routes: Routes;
routes = [
  // Forms --------------------------------------------------------------
  {path: 'formcontrol', component: FormcontrolComponent},
  {path: 'home', component: HomeComponent},
  {path: 'select', component: SelectComponent},
  {path: 'check', component: CheckRadiosComponent},
  {path: 'input', component: InputComponent},
  // Components --------------------------------------------------------------
  {path: 'accordion', component: AccordionComponent},
  {path: 'alert', component: AlertComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'card', component: CardComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'cpllapse', component: CollapseComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'offcanvas', component: OffcanvasComponent},
  {path: 'map', component:OsmMapComponent},
  {path: 'mapL', component:MapComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
