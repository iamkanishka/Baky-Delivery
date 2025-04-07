import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-notification',
  
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}
