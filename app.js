const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const cadastroCliente = require("./routes/cadastroRoutes");
const servico = require("./routes/servicoRoutes");
const loginRoutes = require("./routes/loginRoutes"); // <- router
const atendimento = require("./routes/atendimentosRoutes");
const pets = require("./routes/petsRoutes");
const Admins = require("./routes/adminRoutes");


const app = express();


app.use(cors())
app.use(bodyParser.json())



// rotas 
    app.use("/login", loginRoutes);
    app.use("/", atendimento);
    app.use("/", cadastroCliente);
    app.use("/admins", Admins);
    app.use("/", servico);
    app.use("/Pets",pets)


    module.exports = app 

