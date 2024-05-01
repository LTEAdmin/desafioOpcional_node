const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => { 

})

app.get("/crear", (req, res) => {
    const { archivo, contenido } = req.query;
    fs.writeFileSync(path.join(__dirname, archivo), contenido);
    res.send("Archivo creado");
})

app.get("/leer", (req, res) => {
    const { archivo } = req.query;
    const contenido = fs.readFileSync(path.join(__dirname, archivo), "utf-8");
    res.send(contenido);
})

app.get("/eliminar", (req, res) => {
    const { archivo } = req.query;
    fs.unlinkSync(path.join(__dirname, archivo));
    res.send("Archivo eliminado");
})

app.get("/modificar", (req, res) => {
    const archivos = fs.readdirSync(path.join(__dirname));  
    res.send(archivos);
})  


app.listen( port, () => console.log(`Listening on port http://localhost:${port}`) )