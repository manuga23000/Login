import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
    userId: string;
    role: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: DecodedToken;
        }
    }
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // Verificar si el usuario tiene el token de autenticación
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado' });
    }

    try {
        // Verificar y decodificar el token
        const decodedToken: any = jwt.verify(token, 'secreto'); // Reemplaza 'secreto' con tu propia clave secreta

        // Verificar si el usuario es administrador
        if (decodedToken.role !== 'admin') {
            return res.status(403).json({ error: 'Acceso no autorizado' });
        }

        // Asignar el token decodificado al objeto 'user' de la solicitud
        req.user = decodedToken;

        // El usuario es administrador, continúa con la siguiente función de middleware o controlador
        next();
    } catch (error) {
        console.error('Error al verificar el token', error);
        res.status(500).json({ error: 'Error al verificar el token' });
    }
}

export default authMiddleware;
