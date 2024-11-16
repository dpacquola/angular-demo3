import {Component, inject} from '@angular/core';
import {NavbarComponent} from './core/components/navbar.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  template: `

    <app-navbar />

    <div class="max-w-screen-lg mx-3 lg:mx-auto">
      <router-outlet />
    </div>
  `,
})


export class AppComponent {

  //Tecniche per iniettare un servizio!!!
  /*
  PRIMA TECNICA

  constructor(router: Router) {


   // //al caricamento della pagina dopo 4 secondi salto alla demo1
   // setTimeout(()=> {
   //   router.navigateByUrl('demo1')
   // },4000)


    //resto in ascolto degli eventi del router
    router. events.subscribe(event => {
    //console.log(event) //questo scrive però su tutti i tipi di eventi
    if(event instanceof NavigationEnd) {
      console.log(event.url)
    }
  })
 */


  //SECONDA TECNICA
  router = inject(Router)

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Usando inject: ' + event.url)
      }
    });
  }

}
