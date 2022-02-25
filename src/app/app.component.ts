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
  currIndex: number = 0;
  match: boolean = false;
  notMatch = 0;
  msgTEXT: string = "Failure!";

  onInput(event: Event){
    this.notMatch = 0;
    this.event1 = (<HTMLInputElement>event.target).value;
    // this.currIndex = this.event1.length -1;
    // if(this.event1.charAt(this.currIndex) == this.randomText.charAt(this.currIndex)){
    //   console.log("Match");
    // // }
    // console.log("this.event1", this.event1);
    // console.log("this.event1.length", this.event1.length);
    for(let i = 0; i< this.event1.length; i++){
      if(this.event1[i] == this.randomText[i]){
      }
      else {
        this.notMatch++;
      }
    }
    // console.log("this.event1.length and this.randomText.length", this.event1.length, this.randomText.length);
    if(this.event1.length == this.randomText.length 
      && this.notMatch == 0){
        this.msgTEXT = "Success!";
    }
    else {
        this.msgTEXT = "Failure!";
    }  
  }
  getColor(letter: any,currTypedChar:string){
    if(letter == currTypedChar)
    {
      console.log("if:",letter, " ",currTypedChar);
      return 'green';
    } 
    else if(letter != currTypedChar){
      console.log("elseif:",letter, " ",currTypedChar);
      return 'red';
    } 
    else{
      console.log("else:",letter, " ",currTypedChar);
      return 'grey';
    } 
  }
}
