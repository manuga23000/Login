import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
    firstName: string = '';
    lastName: string = '';
    username: string = '';
    email: string = '';
    password: string = '';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {}

    registerUser() {
        // Obtener los valores del formulario
        const firstName = this.firstName;
        const lastName = this.lastName;
        const username = this.username;
        const email = this.email;
        const password = this.password;

        // Crear un objeto con los datos del usuario
        const user = {
            firstName,
            lastName,
            username,
            email,
            password,
        };

        // Enviar la solicitud POST al backend
        this.http.post('http://localhost:3000/register', user).subscribe(
            (response) => {
                // La solicitud se ha completado con éxito
                console.log('Registro exitoso:', response);
                // Aquí puedes realizar alguna acción adicional, como mostrar un mensaje de éxito o redirigir al usuario a otra página
            },
            (error) => {
                // Ocurrió un error al realizar la solicitud
                console.error('Error de registro:', error);
                // Aquí puedes manejar el error de acuerdo a tus necesidades, como mostrar un mensaje de error al usuario
            }
        );
    }
}
