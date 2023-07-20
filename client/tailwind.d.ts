// tailwind.d.ts
import 'tailwindcss/tailwind.css';

declare module 'tailwindcss/tailwind.css' {
    const classes: { [key: string]: string };
    export default classes;
}
