import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { ReusableComponent } from './reusable/reusable.component';

@NgModule({
  declarations: [
    ReusableComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[
    ReusableComponent
  ],
  providers: [],
})
export class AppModule { 
  constructor(injector: Injector) {
    const custom = createCustomElement(ReusableComponent, {injector: injector});
    customElements.define('app-reusable', custom);
  }

  ngDoBootstrap(){}
  
}
