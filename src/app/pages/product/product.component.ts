import {Component} from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeInDown, slideInDown } from 'ng-animate';

@Component({
  selector: 'product',
  templateUrl: './product.html',
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),  
  ],
})
export class ProductComponent{

  constructor() {
   
  }


}
