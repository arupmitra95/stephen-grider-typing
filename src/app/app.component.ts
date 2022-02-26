import { Component } from '@angular/core';
import faker from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  event1: string = "";
  notMatch = 0;
  msgTEXT: string = "Failure!";

  onInput(event: Event){
    this.notMatch = 0;
    this.event1 = (<HTMLInputElement>event.target).value;

    for(let i = 0; i< this.event1.length; i++){
      if(this.event1[i] != this.randomText[i]) this.notMatch++;
    }
    
    if(this.event1.length == this.randomText.length && this.notMatch == 0) this.msgTEXT = "Success!";
    else this.msgTEXT = "Failure!";
  }

  getColor(letter: any,currTypedChar:string){
    if(letter == currTypedChar) return 'green';
    else if(letter != currTypedChar && currTypedChar != undefined) return 'red'; 
    else return 'grey';
  }
}
