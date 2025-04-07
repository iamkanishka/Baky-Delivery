import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
