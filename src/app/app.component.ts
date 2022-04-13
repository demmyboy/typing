import { Component } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText = ''; 
  randomText = faker.vehicle.vehicle();

  userInput(value:string){
    this.enteredText = value;
    console.log("I just wrote " + value)
    
  }
  compare(randomLetter:string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending'
    }
    return enteredLetter === randomLetter ? 'correct' : 'incorrect';      

  }

}
