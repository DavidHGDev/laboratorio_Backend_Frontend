import { prisma } from "../config/prisma.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";


export const getUser = async (req, res, next) => {
    const data = await prisma.user.findMany();
    res.json(data);
}

export const createUser = async (req, res, next) => {
    const { name, phone, password, email } = req.body;
     
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
        data: {
            name,
            phone,
            email,
            password: hashPassword
        }
    });

    
    res.json(newUser);
}