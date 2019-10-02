import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent {
  @Input() title: string;
  @Input() breadcrumbs: Array<string>;
  constructor() { }

}
