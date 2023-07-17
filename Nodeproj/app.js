const express = require('express');
const mysql = require('mysql2');
const connection = require('./connection');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
