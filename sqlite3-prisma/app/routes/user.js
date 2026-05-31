import { prisma } from "../config/prisma.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";


export const getUser = async (req, res, next) => {
     
    const datos = {name: 'David', phone: '3103667414', password: 'admin456', email: 'admin@quantix.com'}
    const hashPassword = await bcrypt.hash(datos.password, 10)
    const newUser = await prisma.user.create({
        data: {
            name: datos.name,
            phone: datos.phone,
            email: datos.email,
            password: hashPassword
        }
    });

    const data = await prisma.user.findMany();
    res.json(data);
}

export const createUser = async (req, res, next) => {
    const data = {name: 'David', phone: '3103667414', password: 'admin456'}
    const newUser = await prisma.user.create(data);
    res.json(newUser);
}