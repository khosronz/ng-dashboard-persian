import {AfterViewInit, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent  {
  private map : any;
  constructor() {
  }




}
