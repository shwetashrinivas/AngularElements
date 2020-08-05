import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PopChat';

  showMessage() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-chat-window></app-chat-window>';
  }
}
