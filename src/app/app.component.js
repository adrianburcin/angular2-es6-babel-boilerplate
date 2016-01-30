import { Component, OnInit } from 'angular2/core';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `
    <p>{{title}}</p>
    `,
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  ngOnInit() {
    this.title = 'Lazy loaded title will be displayed here.';
    this.appService.getTitle().then((lazyTitle) => {
      this.title = lazyTitle;
    });
  }
}
