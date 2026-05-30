import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import { env } from '../config/env.js';

export const authetincateToken = (req, res, next) => {
const token = req.header('Authorization')?.split(' ')[1];
if(!token) {
    return res.status(401).json({ error: 'Acceso denegado, token no válido'})
}

const verify = jwt.verify(token, env.JWT_SECRET, (err, user) => {
    if(err) return res.status(401).json({ error: 'invalid token'});
})

req.user = verify;

next();
}