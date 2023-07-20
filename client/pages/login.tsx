// /pages/login.tsx
import React from 'react';

const templateHTML = `
<link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
/>
<link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
/>

<section class="bg-blueGray-50 flex justify-center items-center h-screen">
    <div class="w-full lg:w-4/12 px-4 pt-6">
        <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
            <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                    <h6 class="text-blueGray-500 text-sm font-bold">
                        Sign in with
                    </h6>
                </div>
                <div class="btn-wrapper text-center">
                    <button
                        class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                    >
                        <img
                            alt="..."
                            class="w-5 mr-1"
                            src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                        />Github
                    </button>
                    <button
                        class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                    >
                        <img
                            alt="..."
                            class="w-5 mr-1"
                            src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                        />Google
                    </button>
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                    <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            for="grid-username-email"
                            >Username or Email</label
                        >
                        <input
                            type="text"
                            name="usernameOrEmail"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Username or Email"
                            [(ngModel)]="usernameOrEmail"
                        />
                    </div>
                    <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            for="grid-password"
                            >Password</label
                        >
                        <div class="relative">
                            <input
                                type="password"
                                name="password"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Password"
                                [(ngModel)]="password"
                            />
                            <div
                                class="absolute right-3 top-2/4 transform -translate-y-2/4"
                            >
                                <svg
                                    class="eye-icon w-6 h-6 text-blueGray-400 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2 9l10-4 10 4"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 15l2 1m4-1l2-1m-6-2v6"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-6">
                        <button
                            class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="button"
                            (click)="loginUser()"
                            [disabled]="!usernameOrEmail || !password"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <div class="flex justify-center mt-6">
                    <p class="text-blueGray-400 text-sm">
                        <span>Don't have an account? </span>
                        <a routerLink="/register" class="font-semibold"
                            >Register</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const Login: React.FC = () => {
    return <div dangerouslySetInnerHTML={{ __html: templateHTML }} />;
};

export default Login;