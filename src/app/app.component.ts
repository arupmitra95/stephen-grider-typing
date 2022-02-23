import { Component } from '@angular/core';
import faker from '@faker-js/faker';

faker.lorem.sentence();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing Challange';
}
