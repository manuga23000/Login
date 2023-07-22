import React, { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from '../firebase'; // Importa el archivo de configuración de Firebase

const Login: React.FC = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const styles = `
        @import url('https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css');
        @import url('https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css');
    `;

    const router = useRouter();

    const loginUser = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(usernameOrEmail, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Inicio de sesión exitoso:', user);

                // Realizar una petición POST al backend para obtener el token JWT
                fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ usernameOrEmail, password }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // Aquí puedes manejar la respuesta del backend después del inicio de sesión
                        const token = data?.token;

                        // Decodificar el payload del token JWT
                        const decodedToken = JSON.parse(
                            atob(token.split('.')[1])
                        );

                        // Redirigir al usuario según el rol
                        if (decodedToken.role === 'user') {
                            router.push('/user');
                        } else if (decodedToken.role === 'admin') {
                            router.push('/admin');
                        } else {
                            // En caso de que el rol no sea reconocido, redirigir a una página predeterminada
                            router.push('/');
                        }
                    })
                    .catch((error) => {
                        console.error('Error en el inicio de sesión:', error);
                    });
            })
            .catch((error) => {
                console.error('Error en el inicio de sesión:', error.message);
            });
    };

    const handleRegisterClick = () => {
        router.push('/register');
    };

    return (
        <section className="bg-blueGray-50 flex justify-center items-center h-screen">
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div className="w-full lg:w-4/12 px-4 pt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-blueGray-500 text-sm font-bold">
                                Sign in with
                            </h6>
                        </div>
                        <div className="btn-wrapper text-center">
                            <button
                                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                type="button"
                            >
                                <img
                                    alt="..."
                                    className="w-5 mr-1"
                                    src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                                />
                                Github
                            </button>
                            <button
                                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                type="button"
                            >
                                <img
                                    alt="..."
                                    className="w-5 mr-1"
                                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                                />
                                Google
                            </button>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-username-email"
                                >
                                    Username or Email
                                </label>
                                <input
                                    type="text"
                                    name="usernameOrEmail"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Username or Email"
                                    value={usernameOrEmail}
                                    onChange={(e) =>
                                        setUsernameOrEmail(e.target.value)
                                    }
                                />
                            </div>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {/* Resto del código ... */}
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={loginUser}
                                    disabled={!usernameOrEmail || !password}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center mt-6">
                            <p className="text-blueGray-400 text-sm">
                                <span>Don't have an account? </span>
                                <button
                                    onClick={handleRegisterClick}
                                    className="font-semibold"
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
