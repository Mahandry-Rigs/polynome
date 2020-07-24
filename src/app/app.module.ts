import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrinomeComponent } from './trinome/trinome.component';
import { DeltaComponent } from './delta/delta.component';

@NgModule({
  declarations: [
    AppComponent,
    TrinomeComponent,
    DeltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
