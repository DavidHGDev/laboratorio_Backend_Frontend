import env from './config/env.js';
import e from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routerApp from './routes/index.js'

const __dirfile = fileURLToPath(import.meta.url); //url cruda
const __dirname = path.dirname(__dirfile);
const ruta = path.join(__dirname, 'public');

const app = e();
app.use(e.json({ limit: '2mb'}));
app.use(e.static(ruta));

app.get('/inicio', (req, res) =>{ res.send( `<h1 style="color: red"> Hola Mundo </h1>` )})

app.use('/api/v1', routerApp)

app.listen(env.PORT, ()=> {console.log(`Server Running in http://localhost:${env.PORT}`)})