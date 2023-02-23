// Librerias o modulos de NodeJS y su configuración
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const fs = require('fs');

// Variables de entorno (Puerto)
app.set('port', process.env.PORT || 4001);

// Middleware
app.use(morgan('dev')); 
app.use(express.json());

// Recibir peticiones de otros puertos o host
app.use(cors());
// {origin: "http://localhost:4200"}
// Routes
app.use(require('./routers/request.routes'))

// Parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;