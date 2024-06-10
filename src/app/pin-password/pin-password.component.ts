import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-password',
  templateUrl: './pin-password.component.html',
  styleUrls: ['./pin-password.component.css']
})
export class PinPasswordComponent {
  pins: string[] = ['', '', '', '', '', ''];  
  currentPinIndex = 0;  
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  addPin(num: number) {    
    if (this.currentPinIndex < this.pins.length) {      
      this.pins[this.currentPinIndex] = num.toString();      
      this.currentPinIndex++;    
    } 
    // console.log(this.pins);
   }
   removePin() {
    if (this.currentPinIndex > 0) {
      this.currentPinIndex--;
      this.pins[this.currentPinIndex] = '';
    }
  }
}
