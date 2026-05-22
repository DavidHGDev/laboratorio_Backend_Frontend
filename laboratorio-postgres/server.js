import env from './config/env.js';
import e from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';

const __dirfile = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__dirfile);
const rutaAbsoluta = path.join(__dirname, 'public');
const app = e();

app.use(e.json({ limit: '2mb' }));
app.use(e.static(rutaAbsoluta)); //Servimos nuestro frontend


app.listen(env.PORT, () => {
    console.log(`Server Running in http://localhost:${env.PORT}`)
})