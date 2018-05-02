import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  phoneNumber : any;
  constructor(private callNumber: CallNumber, private platform: Platform ) {
    
  }
  async call(){
    await this.platform.ready();
    try{
      this.callNumber.callNumber(this.phoneNumber, true);
    }catch(error){
      console.log(error);
    }
    
  }


}
