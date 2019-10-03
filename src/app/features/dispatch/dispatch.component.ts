import { Component, AfterViewInit, OnInit } from '@angular/core';
// import 'ol/ol.css';
import {Map, View} from 'ol/src';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
declare var ol: any;
@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements AfterViewInit, OnInit {
  latitude: number = 18.5204;
  longitude: number = 73.8567;
  map: any;

  ngOnInit() {
    console.log('ngOnInit');
    // this.map = new Map({
    //   layers: [new TileLayer({
    //     source: new OSM()
    //   })],
    //   target: 'map',
    //   view: new View({
    //     center: [0, 0],
    //     zoom: 2
    //   })
    // });
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8
      })
    });
  }

  ngAfterViewInit() {
   
    
  }
}
