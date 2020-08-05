import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[
    ChatWindowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(ChatWindowComponent, {injector: injector});
    customElements.define('app-chat-window', custom);
  }


 }
