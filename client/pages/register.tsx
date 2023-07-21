import React, { useState } from 'react';
import router from 'next/router';

const Register: React.FC = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const styles = `
        @import url('https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css');
        @import url('https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css');
    `;

    const resetForm = () => {
        setFirstname('');
        setLastname('');
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const registerUser = () => {
        // Objeto con los datos del usuario para enviar al backend
        const userData = {
            firstName,
            lastName,
            username,
            email,
            password,
        };

        router.push('/login');

        // Hacer la petición POST al backend para registrar al usuario
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Aquí puedes manejar la respuesta del backend después del registro
                console.log('Registro exitoso:', data);
                resetForm();
            })
            .catch((error) => {
                // Aquí obtendremos el mensaje de error del servidor y lo mostraremos en la consola
                console.error('Error en el registro:', error.message);
            });
    };
    return (
        <section className="bg-blueGray-50 flex justify-center items-center h-screen">
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div className="w-full lg:w-4/12 px-4 pt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-blueGray-500 text-sm font-bold">
                                Sign up with
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
                            <div className="flex mb-3">
                                <div className="w-1/2 mr-1">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-firstname"
                                    >
                                        Firstname
                                    </label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Firstname"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstname(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-lastname"
                                    >
                                        Lastname
                                    </label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Lastname"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastname(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-username"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    <div className="absolute right-3 top-2/4 transform -translate-y-2/4">
                                        <svg
                                            className="eye-icon w-6 h-6 text-blueGray-400 cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2 9l10-4 10 4"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 15l2 1m4-1l2-1m-6-2v6"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={registerUser}
                                    // Deshabilitar el botón si los campos requeridos no están completos
                                    disabled={
                                        !firstName ||
                                        !lastName ||
                                        !username ||
                                        !email ||
                                        !password
                                    }
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center mt-6">
                            <p className="text-blueGray-400 text-sm">
                                <span>Already have an account? </span>
                                <a href="/login" className="font-semibold">
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
