//Importaciones
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


//Obligando al cliente a enviar solo formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://127.0.0.1:5500/',
    methods: ['POST', 'GET', 'DELETE', 'PUT']
}));

//LLamando nuestra ruta 
const routes = require('./routes/employees')

routes(app);

const { HOST, PORT } = process.env;
app.listen(PORT || 3000, ()=>{
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});