import {
  Component,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import 'rxjs/add/operator/filter';
import {
  ActivatedRoute,
  Router,
  NavigationEnd
} from '@angular/router';
import {
  Http
} from '@angular/http';


import { GlobalState } from './global.state';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Siraj360 : ngQuickStart360 - A angular 4 Quick Start';
  viewContainerRef: ViewContainerRef;

  public constructor(
    viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private globalState: GlobalState
  ) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
    
    this.globalState.subscribe('app.title', (title) => {
      this.title = title;
    });
  }

 public getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
    
  }
}
