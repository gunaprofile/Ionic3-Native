import { Component } from '@angular/core';
import { BrowserTab } from '@ionic-native/browser-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private browserTab: BrowserTab) {

  }
  async openBrowserTab(website : String){

    try{
      const isAvailable = await this.browserTab.isAvailable();
      console.log(isAvailable)

      if(isAvailable){

      }

    }catch(e){
      console.log(e)
    }

  }
}
