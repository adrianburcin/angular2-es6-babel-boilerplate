import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <p>{{title}}</p>
  `
})
export class AppComponent {
  title = 'My first Angular2 ES6 Babel app';
}
