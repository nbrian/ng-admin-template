import { Component, OnInit } from '@angular/core';
import { SidebarItem } from './sidebar/sidebar.interface';
import FeatureConfig from '../features/features.config.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submenuItems: Array<SidebarItem> = FeatureConfig.menu;
  test = ['fas', 'square'];
  constructor() { }

  ngOnInit() {
  }

}
