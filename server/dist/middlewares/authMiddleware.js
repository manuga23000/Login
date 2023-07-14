"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    // Verificar si el usuario tiene el token de autenticación
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado' });
    }
    try {
        // Verificar y decodificar el token
        const decodedToken = jsonwebtoken_1.default.verify(token, 'secreto'); // Reemplaza 'secreto' con tu propia clave secreta
        // Verificar si el usuario es administrador
        if (decodedToken.role !== 'admin') {
            return res.status(403).json({ error: 'Acceso no autorizado' });
        }
        // Asignar el token decodificado al objeto 'user' de la solicitud
        req.user = decodedToken;
        // El usuario es administrador, continúa con la siguiente función de middleware o controlador
        next();
    }
    catch (error) {
        console.error('Error al verificar el token', error);
        res.status(500).json({ error: 'Error al verificar el token' });
    }
}
exports.default = authMiddleware;
