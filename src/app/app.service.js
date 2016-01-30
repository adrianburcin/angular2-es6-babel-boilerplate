import { Injectable } from 'angular2/core';

const lazyTitle = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Angular 2 with ES6(Babel) and Gulp boilerplate.');
  }, 2000);
});

@Injectable()
export class AppService {
  getTitle() {
    return lazyTitle;
  }
}
