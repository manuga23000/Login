"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const User_1 = __importDefault(require("./models/User"));
// Crea una instancia de la aplicación Express
const app = (0, express_1.default)();
// Configuración de puertos y otros ajustes
const PORT = 3000;
// Variable para controlar si se debe restablecer la base de datos al iniciar el servidor
const resetDatabaseOnStartup = false;
// Conexión a la base de datos MongoDB
mongoose_1.default
    .connect('mongodb://localhost:27017/my-database')
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Conexión exitosa a MongoDB');
    // Restablecer la base de datos al iniciar el servidor si la variable resetDatabaseOnStartup es true
    if (resetDatabaseOnStartup) {
        yield resetDatabase();
    }
}))
    .catch((error) => {
    console.error('Error al conectar a MongoDB', error);
});
// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express_1.default.json());
// Configurar el middleware CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200, // Algunos navegadores pueden requerir este código de estado para las respuestas CORS exitosas
}));
// Usa el enrutador como middleware
app.use('/', routes_1.default);
// Resto de las configuraciones y middleware necesarios
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
// Función para restablecer la base de datos
function resetDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Eliminar todos los documentos de la colección de usuarios
            yield User_1.default.deleteMany();
            console.log('Base de datos restablecida');
        }
        catch (error) {
            console.error('Error al restablecer la base de datos', error);
        }
    });
}
