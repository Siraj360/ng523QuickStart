import {Component} from '@angular/core';
import { GlobalState } from '../../global.state';
import { UserRxService } from '../../services/user.rx.service';
import { User } from '../../models/user';
import { Http } from '@angular/http';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeInDown, slideInDown } from 'ng-animate';

@Component({
  selector: 'user',
  templateUrl: './user.html',
  providers:[UserRxService],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),  
  ],
})
export class UserComponent {
public title:String = "User Profiles"
  
  constructor(
      private globalState: GlobalState,
      private userRxService: UserRxService

  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);
   }

public users: User[];
  
   getData() {

        this.userRxService.getUsers()
        .subscribe(
              users => { this.users = users},
              err => console.error(err),
              () => console.log('done')
        );

  }


  ngOnInit() {

    this.getData();


  }
  
  
}
