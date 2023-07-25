import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/routes';
import User from './models/User';
import * as admin from 'firebase-admin';

const serviceAccount = require('../../server/credentialfirebase.json');

// Inicializa firebase-admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'login-2aa36.firebaseapp.com',
});

const app = express();
const PORT = 3000;
const resetDatabaseOnStartup = true;

mongoose
    .connect('mongodb://localhost:27017/my-database')
    .then(async () => {
        console.log('Conexión exitosa a MongoDB');

        if (resetDatabaseOnStartup) {
            await resetDatabase();
        }
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB', error);
    });

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:3001', // Cambia esto a la dirección correcta de tu aplicación Next.js
        optionsSuccessStatus: 200,
    })
);

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

async function resetDatabase() {
    try {
        // Obtiene una referencia a la base de datos de Firebase
        const db = admin.database();
        const usersRef = db.ref('users'); // Cambia 'users' por la referencia correcta en tu base de datos

        // Elimina los usuarios en Firebase
        await usersRef.remove();

        // Elimina los usuarios en MongoDB
        await User.deleteMany();

        console.log('Base de datos restablecida');
    } catch (error) {
        console.error('Error al restablecer la base de datos', error);
    }
}
