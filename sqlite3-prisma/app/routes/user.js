import { prisma } from "../config/prisma.js";

export const getUser = async (req, res, next) => {
    const datos = {name: 'David', phone: '3103667414'}
    const newUser = await prisma.user.create({
        data: datos
    });

    const data = await prisma.user.findMany();
    res.json(data);
}

export const createUser = async (req, res, next) => {
    const data = {name: 'David', phone: '3103667414'}
    const newUser = await prisma.user.create(data);
    res.json(newUser);
}