import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {AboutComponent} from './about.component';
import {DownloadComponent} from './download.component';
import {ContactComponent} from './contact.component';
import {HomeComponent} from './home.component';



@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html',
    directives: [AboutComponent, DownloadComponent, ContactComponent, HomeComponent, ROUTER_DIRECTIVES],
    
})

@RouteConfig([
    {path: '/',        name: 'Home',       component: HomeComponent, useAsDefault:true},    
  {path: '/about',        name: 'About',       component: AboutComponent},
  {path: '/download',      name: 'Download',   component: DownloadComponent},
  {path: '/contact',      name: 'Contact',   component: ContactComponent}
])

export class AppComponent {

}