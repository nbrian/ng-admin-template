import { Component } from '@angular/core';
import FeatureConfig from '../../features/features.config.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name = FeatureConfig.name;

  constructor() { }

}
