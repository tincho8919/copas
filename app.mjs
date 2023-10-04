import express from 'express';
import morgan from 'morgan';
import hbs from 'hbs';
import path from 'path';
import * as url from "url";
import cors from 'cors';
import { check, validationResult } from 'express-validator'


// SI NO ENCUENTRA LA CARPETA DE VIWS LE AGREGO _DIRNAME/import * as url from "url";


const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
console.log(_dirname);

const app = express();
//midldlelware
//app.use(morgan());
//app.use(morgan());
//app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirname, 'public')));

app.set('view engine', 'hbs');


app.set('views', path.join(_dirname, '/views'));

hbs.registerPartials(path.join(_dirname, '/views/partials'));


app.get('/', (req, res) => {
    
    res.render('index');
})

app.get('/login', (req, res) => {
    
    res.render('login');
})

app.get('/registro', (req, res) => {
    
    res.render('registro');
})

app.use(cors());


//solo puede existir un expor defaol por archivo
export default app;