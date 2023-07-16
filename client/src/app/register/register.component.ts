import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    firstname: string = '';
    lastname: string = '';
    username: string = '';
    email: string = '';
    password: string = '';

    constructor(private http: HttpClient) {}

    registerUser() {
        const newUser = {
            firstName: this.firstname,
            lastName: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
        };

        this.http.post('http://localhost:3000/register', newUser).subscribe(
            (response) => {
                console.log('Usuario registrado exitosamente', response);
                // Restablecer los valores del formulario
                this.firstname = '';
                this.lastname = '';
                this.username = '';
                this.email = '';
                this.password = '';
            },
            (error) => {
                console.error('Error al registrar el usuario', error);
            }
        );
    }
}
