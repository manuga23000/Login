import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
        private router: Router
    ) {}

    registerUser() {
        const newUser = {
            firstName: this.firstname,
            lastName: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
        };

        this.http.post('http://localhost:3000/register', newUser).subscribe(
            (response: any) => {
                console.log('Usuario registrado exitosamente', response);

                const toastrConfig: Partial<IndividualConfig> = {
                    timeOut: 2000, // Duración de 2 segundos (en milisegundos)
                };
                this.toastr.success(
                    'User registered successfully',
                    'Success',
                    toastrConfig
                );

                // Restablecer los valores del formulario
                this.firstname = '';
                this.lastname = '';
                this.username = '';
                this.email = '';
                this.password = '';

                // Redirigir al componente de inicio de sesión
                this.router.navigate(['/login']);
            },
            (error) => {
                console.error('Error al registrar el usuario', error);
            }
        );
    }
}
