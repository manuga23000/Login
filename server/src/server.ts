import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/routes';
import User from './models/User';

// Crea una instancia de la aplicación Express
const app = express();

// Configuración de puertos y otros ajustes
const PORT = 3000;

// Variable para controlar si se debe restablecer la base de datos al iniciar el servidor
const resetDatabaseOnStartup = false;

// Conexión a la base de datos MongoDB
mongoose
    .connect('mongodb://localhost:27017/my-database')
    .then(async () => {
        console.log('Conexión exitosa a MongoDB');

        // Restablecer la base de datos al iniciar el servidor si la variable resetDatabaseOnStartup es true
        if (resetDatabaseOnStartup) {
            await resetDatabase();
        }
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB', error);
    });

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Configurar el middleware CORS
app.use(
    cors({
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200, // Algunos navegadores pueden requerir este código de estado para las respuestas CORS exitosas
    })
);

// Usa el enrutador como middleware
app.use('/', routes);

// Resto de las configuraciones y middleware necesarios

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

// Función para restablecer la base de datos
async function resetDatabase() {
    try {
        // Eliminar todos los documentos de la colección de usuarios
        await User.deleteMany();
        console.log('Base de datos restablecida');
    } catch (error) {
        console.error('Error al restablecer la base de datos', error);
    }
}
