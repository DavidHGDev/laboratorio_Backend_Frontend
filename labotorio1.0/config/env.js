import z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number('Debe ingresar un número válido').default(3007),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
});

const envParse = envSchema.safeParse(process.env);

if(!envParse.success){
    console.error('Error en la consulta de variables de entorno');
    console.error(envParse.error);
    process.exit(1)
};

export default envParse.data;
