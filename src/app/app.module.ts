import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ObserveserviceService } from './observeservice.service';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

  ],
  providers: [ ObserveserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
