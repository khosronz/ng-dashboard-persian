import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './Dashboard/base-layout/base-layout/base-layout.component';
import { FormcontrolComponent } from './Dashboard/Forms/formcontrol/formcontrol.component';
import { SelectComponent } from './Dashboard/Forms/select/select.component';
import { HomeComponent } from './Dashboard/home/home/home.component';
import { CheckRadiosComponent } from './Dashboard/Forms/check-radios/check-radios.component';
import { InputComponent } from './Dashboard/Forms/input/input.component';
import { AccordionComponent } from './Dashboard/Components/accordion/accordion.component';
import { AlertComponent } from './Dashboard/Components/alert/alert.component';
import { ButtonComponent } from './Dashboard/Components/button/button.component';
import { CardComponent } from './Dashboard/Components/card/card.component';
import { CarouselComponent } from './Dashboard/Components/carousel/carousel.component';
import { ModalComponent } from './Dashboard/Components/modal/modal.component';
import { CollapseComponent } from './Dashboard/Components/collapse/collapse.component';
import { NavbarComponent } from './Dashboard/Components/navbar/navbar.component';
import { OffcanvasComponent } from './Dashboard/Components/offcanvas/offcanvas.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OsmMapComponent } from './osm-map/osm-map.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    FormcontrolComponent,
    SelectComponent,
    HomeComponent,
    CheckRadiosComponent,
    InputComponent,
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    CardComponent,
    CarouselComponent,
    ModalComponent,
    CollapseComponent,
    NavbarComponent,
    OffcanvasComponent,
    OsmMapComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
