import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { prisma } from "../config/prisma.js";
import { env } from "../config/env.js";

export const loginAuth = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if(!user){
        return res.status(401).json({ message: 'usuario o contraseña inválido' })
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(401).json({ message: 'usuario o contraseña inválido' })

    //genera token, y se guardan los datos útiles
    const token = jwt.sign(
        { id: user.id, email: user.email, name: user.name }, //datos a guardar importantes en el token
        env.JWT_SECRET, //el secreto local para encriptar la contraseña
        { expiresIn: '8h'} // tiempo en el que expira la contraseña
    )

    //sacar el password de las respuesta
    const {password: _, ...newData } = user;

    res.status(200).json({
        message: 'Login Exitoso',
        token,
        user: newData
    })

    next();
}
