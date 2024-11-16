import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  template: `
    <p>
      demo1 works!<br>
      {{title}}
    </p>
  `,
  styles: ``
})


export class Demo1Component {
  title='';

  /*
  constructor(private activateRouter:ActivatedRoute) {
    console.log(this.activateRouter.snapshot.data['title'])
    this.title=this.activateRouter.snapshot.data['title']
  }
  */
  //oppure usando inject
  activateRoute = inject(ActivatedRoute)
  constructor() {
    this.title = this.activateRoute.snapshot.data['title'];

    //approccio più reattivo usando gli observable
    //questo ha il vantaggio che se title cambia qui ottengo i
    //cambiamenti mentre prima lo memorizzo solo una volta
    this.activateRoute.data.subscribe(res =>{
      console.log(res['title'])
    })

  }


}
