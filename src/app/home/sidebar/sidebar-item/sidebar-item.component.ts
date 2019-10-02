import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from '../sidebar.interface';

@Component({
  selector: 'app-sidebar-item',
  template: `<li [class]="isSubmenuItem ? 'submenu-item' : 'item'" (click)="menuToggle(menuStatus)">
                <a [routerLink]="item.url">
                <fa-icon [icon]="item.icon" *ngIf="isFaIcon(item.icon); else isMaterial"></fa-icon>
                <ng-template #isMaterial><mat-icon>{{item.icon}}</mat-icon></ng-template> {{item.name}}</a>
              <app-sidebar *ngIf="!!item.children" [items]="item.children" [isSubmenu]="true" [show]="menuStatus"></app-sidebar>
             </li>`,
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() item: SidebarItem;
  @Input() isSubmenuItem: boolean;
  private menuStatus = false;

  constructor() { }

  isFaIcon(icon: string): boolean {
    return Array.isArray(icon); // fa uses ['prefix', 'icon name'] as parameter
  }

  menuToggle(flag: boolean): boolean {
    this.menuStatus = !flag;
    return this.menuStatus;
  }
}
