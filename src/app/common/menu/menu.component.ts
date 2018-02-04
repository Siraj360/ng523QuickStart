import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent implements OnInit {

public title:String = "Welecome to Angular 4 Quick Start"
public isShowDD: boolean = true;

  constructor(  
    private globalState: GlobalState
  ) {

      this.globalState.subscribe('Header.title', (title) => {
      this.title = title;
    });
  }

  ngOnInit() {
  }
}


