import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
// Adding Lib to globaly
import 'leaflet-routing-machine';
import 'leaflet-draw';

@Component({
  selector: 'app-osm-map',
  standalone: false,
  templateUrl: './osm-map.component.html',
  styleUrl: './osm-map.component.scss'
})
export class OsmMapComponent implements AfterViewInit {

  public map!: L.Map;
  public zoom!: number;

  private locationList = [
    { lat: 37.7195265626227, lng: 46.93359375000001, title: "تبریز", Address: "تبریز خیابان اول پلاک 1", placeType: "h" },
    { lat: 35.60496409485937, lng: 51.50390625000001, title: "تهران", Address: "تهران خیابان اول پلاک 1", placeType: "h" },
    { lat: 32.54851512118243, lng: 51.767578125, title: "اصفهان", Address: "اصفهان خیابان اول پلاک 1", placeType: "h" },
    { lat: 35.783389740701296, lng: 58.88671875000001, title: "مشهد", Address: "مشهد خیابان اول پلاک 1", placeType: "h" },
    { lat: 34.562259303839774, lng: 50.93261718750001, title: "قم", Address: "قم خیابان اول پلاک 1", placeType: "h" },

    { lat: 29.231097541675027, lng: 52.99804687500001, title: "شیراز", Address: "شیراز خیابان اول پلاک 1", placeType: "r" },
    { lat: 27.061667813752774, lng: 55.98632812500001, title: "بندرلنگه", Address: "بندرلنگه خیابان اول پلاک 1", placeType: "r" },
    { lat: 29.11600059007595, lng: 60.51269531250001, title: "زاهدان", Address: "زاهدان خیابان اول پلاک 1", placeType: "r" },
    { lat: 31.767357597242206, lng: 48.91113281250001, title: "اهواز", Address: "اهواز خیابان اول پلاک 1", placeType: "r" },
    { lat: 31.767357597242206, lng: 54.31640625000001, title: "یزد", Address: "یزد خیابان اول پلاک 1", placeType: "r" }
  ];

  public latlngs = [
    [45.51, -122.68],
    [37.77, -122.43]
  ];

  public tileLayer1 = L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {});

  constructor() {
  }

  ngAfterViewInit() {
    this.map = new L.Map('map', {
      center: [32.287, 52.954],
      zoom: 5,
      layers: [this.tileLayer1]
    });

    var myIcon = L.icon({
      iconUrl: 'assets/images/1.png',
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });

    //
    // Routing
    //
    L.Routing.control({
      waypoints: [
        L.latLng(29.231097541675027, 52.99804687500001),
        L.latLng(27.061667813752774, 55.98632812500001),
        L.latLng(29.11600059007595, 60.51269531250001)
      ]
    }).addTo(this.map);


    // Drawing Line
    //
    // var polyline = L.polyline(
    //   [
    //     [29.231097541675027, 52.99804687500001],
    //     [27.061667813752774, 55.98632812500001],
    //     [29.11600059007595, 60.51269531250001]
    //   ], { color: 'red' }).addTo(this.map);
    // this.map.fitBounds(polyline.getBounds());

    var drawnItems = L.featureGroup().addTo(this.map);
    
    this.map.addControl(new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      },
      draw: {
        polygon: {
          allowIntersection: false,
          showArea: true
        }
      }
    }));

    this.map.on(L.Draw.Event.CREATED, function (event) {
      var layer = event.layer;

      drawnItems.addLayer(layer);
    });



    for (let i = 0; i < this.locationList.length; i++) {
      if (this.locationList[i].placeType === "h") {
        L.marker([this.locationList[i].lat, this.locationList[i].lng], { icon: myIcon }).addTo(this.map);
      } else {
        L.marker([this.locationList[i].lat, this.locationList[i].lng], { icon: myIcon }).addTo(this.map);
      }
    }
  }

  ngOnDestroy() {
    this.map.clearAllEventListeners;
    this.map.remove();
  };

}




