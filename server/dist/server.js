"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const admin = __importStar(require("firebase-admin"));
const serviceAccount = require('../../server/credentialfirebase.json');
// Inicializa firebase-admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'login-2aa36.firebaseapp.com',
});
const app = (0, express_1.default)();
const PORT = 3000;
const resetDatabaseOnStartup = true;
mongoose_1.default
    .connect('mongodb://localhost:27017/my-database')
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Conexión exitosa a MongoDB');
    if (resetDatabaseOnStartup) {
        yield resetDatabase();
    }
}))
    .catch((error) => {
    console.error('Error al conectar a MongoDB', error);
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200,
}));
app.use('/', routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
function resetDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Obtiene una referencia a la base de datos de Firebase
            const db = admin.database();
            const usersRef = db.ref('users'); // Cambia 'users' por la referencia correcta en tu base de datos
            // Elimina los usuarios en Firebase
            yield usersRef.remove();
            // Elimina los usuarios en MongoDB
            yield User_1.default.deleteMany();
            console.log('Base de datos restablecida');
        }
        catch (error) {
            console.error('Error al restablecer la base de datos', error);
        }
    });
}
