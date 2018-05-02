import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { CardIO, CardIOOptions, CardIOResponse } from '@ionic-native/card-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: CardIOResponse
  constructor(private card: CardIO, private  platform : Platform ) {

  }
  async scanCard(){
    try{
      await this.platform.ready();

      const canScan = await this.card.canScan();

      if(canScan){
        const options: CardIOOptions ={
          scanInstructions : "Scan your card to continue",
          requireExpiry : true,
          noCamera : false
        }
        this.results = await this.card.scan(options);
        console.log(this.results);
      }

    }catch(error){
      console.log(error);
    }
  }

}
