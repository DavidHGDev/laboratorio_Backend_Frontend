import dotenv from 'dotenv/config'
import z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3007),
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    DATABASE_URL: z.string().refine(
        (url) => url.startsWith('file:') || url.startsWith('postgresql:') || url.startsWith('postgres:')
    ),
    JWT_SECRET: z.string()
});

const envParse = envSchema.safeParse(process.env);

if(!envParse.success){
    console.error('Error al leer las variables de entorno');
    console.error(envParse.error.format());
    process.exit(1);
}

export const env = envParse.data;