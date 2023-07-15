import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login.component'; // Importa el LoginComponent

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent, // Agrega el LoginComponent en las declaraciones
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
