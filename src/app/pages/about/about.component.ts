import {Component} from '@angular/core';
import { GlobalState } from '../../global.state';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeInDown, slideInDown } from 'ng-animate';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),  
  ],
})
export class AboutComponent {
public title:String = "About this application"
  
  constructor(
      private globalState: GlobalState

  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);
   }


  
}
