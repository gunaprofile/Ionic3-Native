import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image : String;
  constructor(private camera: Camera) {
    
  }
  pictureFromCamera(){
    const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true,
          saveToPhotoAlbum: true
    }
    //Take a photo
    this.takePhoto(options);
  }
  pictureFromGallery(){
    const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true,
          saveToPhotoAlbum: true
    }
    //Take a photo
    this.takePhoto(options);
  }

  async takePhoto(options : CameraOptions){
    try{
      // take photo and store result
      const result = await this.camera.getPicture(options);

      //Append this to the dom
      this.image = `data:image/jpeg;base64,${result}`
    }catch(error){
      console.log(error)
    }
  }
  

}
