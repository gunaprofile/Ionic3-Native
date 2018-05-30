import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn: boolean;
  constructor(private flashlight: Flashlight, private platform : Platform) {
    this.platform.ready().then(()=>{
      this.updateFlashLightStatus();
    });
  }
  switchOn(){
    this.flashlight.switchOn();
    this.updateFlashLightStatus()
  }
  switchOff(){
    this.flashlight.switchOff();
    this.updateFlashLightStatus()
  }
  toggle(){
    this.flashlight.toggle();
    this.updateFlashLightStatus()
  }
  updateFlashLightStatus(){
    this.isOn = this.flashlight.isSwitchedOn();
  }
}
