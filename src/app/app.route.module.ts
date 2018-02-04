import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home';


const appRoutes: Routes = [
    { path: '',  pathMatch: 'full', component: HomeComponent, data: { name: "entry"}},
    { path: 'home', component: HomeComponent, data: { name: "home"}},
    { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' },
    { path: 'product', loadChildren: 'app/pages/product/product.module#ProductModule' },
    { path: 'user', loadChildren: 'app/pages/user/user.module#UserModule' },
    { path: '**', redirectTo: '', data: { name: "redirect to entry"}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
 
  ]
})
export class AppRouteModule {}
