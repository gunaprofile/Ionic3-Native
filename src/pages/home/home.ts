import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions,BarcodeScanResult } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result : BarcodeScanResult;
  dataToEncode : String;
  constructor(private barcode: BarcodeScanner) {}
  async scanBarcode(){
    try{
      const options : BarcodeScannerOptions = {
        torchOn :true,
        prompt: 'Point your camera at barcode',

      }
      await this.barcode.scan(options); 
    }catch(error){
      console.log(error)
    }

  }

  async encodeData() {
    try{
      await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.dataToEncode); 
    }catch(error){
      console.log(error)
    }
  }

}
