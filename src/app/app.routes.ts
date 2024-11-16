import { Routes } from '@angular/router';
//import {Demo2Component} from './features/demo2/demo2.component';  //non serve più importarli dato che li carica se servono
import {Demo1Component} from './features/demo1/demo1.component';
//import {Demo3Component} from './features/demo3/demo3.component'; //non serve più importarlo

export const routes: Routes = [
 // { path: 'demo1', component: Demo1Component }, //in fase di produzione viene sempre caricato nel bundle il componente Demo1

  //posso passare anche dei parametri nelrouter
  { path: 'demo1', component: Demo1Component,
    data: {title: 'Hello Demo 1'}
  },

  //{ path: 'demo2', component: Demo2Component },
  //{ path: 'demo3', component: Demo3Component },

  //segue un'ottimizzazione nella gesrione del caricamento degli oggetti che vengono caricati in memoria solo quando servono
  //questo riduce il tempo di bootstrap

  //in un componente potrei avere più classi quindi devo specificare quale caricare per quel file
  { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component').then(c => c.Demo2Component) },


  //se invece ho una classe sola devo indicarla come default e allora posso eliminare il then
  { path: 'demo3', loadComponent: () => import('./features/demo3/demo3.component') ,
    data: {title: 'Titolo 3333'}
  },

  // app.routes può ricevere anche dei dati dall'URL
  { path: 'product/:productId', loadComponent: () => import('./features/product/product.component')},

  { path: '', redirectTo: 'demo1', pathMatch: 'full'}
];
