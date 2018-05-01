import { Component } from '@angular/core';

//Import Actionsheet
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
let buttonLabelsToShow = ['Share via Facebook', 'Share via Twitter'];
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   /** Action Sheet Options */
  options: ActionSheetOptions = {
    title: 'Share This Image with the World',
    subtitle: 'Choose from the various Options',
    buttonLabels: buttonLabelsToShow,
    addCancelButtonWithLabel: 'Cancel',
    addDestructiveButtonWithLabel: 'Delete',
    destructiveButtonLast: true
  }

  constructor(private actionSheet: ActionSheet) {}

  showActionSheet() {
    this.actionSheet.show(this.options).then((buttonClickedIndex: number) => {
      console.log('Button pressed is' + buttonClickedIndex)
    }).catch((err) => {
      console.log(err)
    });
  }

}
