import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  buttonValue: string;

  toggle() {
    if (confirm('are you sure')) {
      alert('yes');
    } else {
      alert('no');
    }
  }

  blur() {
    alert('blur');
  }

  keyup() {
    alert('keyup');
  }

  keyFunc(x) {
    // appending the updated value to the variable
    alert(x.target.value);
  }

  onChange(e) {
    alert(e.target.value);
 }
}
