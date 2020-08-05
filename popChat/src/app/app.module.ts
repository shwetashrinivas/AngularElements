import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    ChatWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[
    ChatWindowComponent
  ],
  providers: [],
})
export class AppModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(ChatWindowComponent, {injector: injector});
    customElements.define('app-chat-window', custom);
  }

  ngDoBootstrap() {}
 }
