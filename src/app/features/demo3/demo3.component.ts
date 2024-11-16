import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [],
  template: `
    <p>
      demo3 works!<br>
      {{title}}
    </p>
  `,
  styles: ``
})

export default class Demo3Component {
  @Input() title='';

}
