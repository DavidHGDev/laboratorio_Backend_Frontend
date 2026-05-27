import { env } from './config/env.js';
import e from 'express';
import { prisma } from './config/prisma.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import routerApp from './routes/index.js';
import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/error.hanlder.js';

const __dirfile = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__dirfile);
const rutaAbsoluta = path.join(__dirname, '../public');
const app = e();

app.use(logger) // para capturar ruta debe ser al inicio

app.use(e.json({ limit: '2mb' }));
app.use(e.static(rutaAbsoluta));
//app.use(cors());
app.use('/api', routerApp);

//middlewares
app.use(errorHandler); //va al final de todo, aquí termina el código

app.listen(env.PORT, () => { console.log(`Server running in http://localhost:${env.PORT}`) })

