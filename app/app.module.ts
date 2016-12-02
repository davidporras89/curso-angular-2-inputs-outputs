import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiComponenteModulo } from './mi-componente/mi-componente.modulo';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MiComponenteModulo],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
