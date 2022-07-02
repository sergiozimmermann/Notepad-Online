import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarNotaComponent } from './notepad/criar-nota/criar-nota.component';
import { NotepadComponent } from './notepad/notepad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    , NotepadComponent
    , CriarNotaComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
