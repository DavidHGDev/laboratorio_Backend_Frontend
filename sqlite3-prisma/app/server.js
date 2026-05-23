import { env } from './config/env.js';
import e from 'express';
import { prisma } from './config/prisma.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __dirfile = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__dirfile);
const rutaAbsoluta = path.join(__dirname, 'public');
const app = e();

app.use(e.json({ limit: '2mb' }));
app.use(e.static(rutaAbsoluta));
app.use(cors());

app.listen(env.PORT, () => { console.log(`Server running in http://localhost:${env.PORT}`) })

