import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public admobfree: AdMobFree) {
    this.showAdBanner();
    this.showInitialAd();
  }

  async showAdBanner(){
    const bannerConfig : AdMobFreeBannerConfig ={
      //id : 'ca-pub-XXXXXXXXXX',
      isTesting : true,
      autoShow : true,
      // bannerAtTop : true,

    }
    this.admobfree.banner.config(bannerConfig);
    try{
      const result = this.admobfree.banner.prepare();
      console.log(result)
    }catch(error){
      console.log(error);
    }

  }
  async showInitialAd(){
    try{
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting : true,
        autoShow : true,
      }
      this.admobfree.interstitial.config(interstitialConfig);
      const result = await this.admobfree.interstitial.prepare();
      console.log(result);
    }catch(error){
      console.log(error);
    }
  }

}
