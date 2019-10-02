import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from './sidebar.interface';

@Component({
  selector: 'app-sidebar',
  template: `<ul [class]="isSubmenu ? (show ? 'submenu show' : 'submenu hidden') : 'menu'">
              <app-sidebar-item *ngFor="let item of items" [item]="item" [isSubmenuItem]="isSubmenu"></app-sidebar-item>
            </ul>`,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items: Array<SidebarItem>;
  @Input() isSubmenu: boolean;
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
