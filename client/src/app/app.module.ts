import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa el HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule], // Agrega HttpClientModule aquí
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
