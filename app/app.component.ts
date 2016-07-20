import {Component} from '@angular/core';
import {CoursesComponent} from './courses.component';

@Component({
  selector: 'my-app',
  template: '<h1>My Angular 2 Project</h1><courses></courses>',
  directives: [CoursesComponent]
})

export class AppComponent { }
