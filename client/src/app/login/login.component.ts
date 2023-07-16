import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    usernameOrEmail: string = '';
    password: string = '';

    constructor(private http: HttpClient) {}

    loginUser() {
        const userCredentials = {
            usernameOrEmail: this.usernameOrEmail,
            password: this.password,
        };

        this.http
            .post('http://localhost:3000/login', userCredentials)
            .subscribe(
                (response) => {
                    console.log('Inicio de sesión exitoso', response);
                    // Restablecer los valores del formulario
                    this.usernameOrEmail = '';
                    this.password = '';
                },
                (error) => {
                    console.error('Error al iniciar sesión', error);
                }
            );
    }
}
