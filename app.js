const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const rutasUsuario = require("./src/routes/usuario");
const rutasProductos = require("./src/routes/producto");
const rutasMain = require("./src/routes/main");
const rutasAdministrador = require("./src/routes/administrador");
const rutasApi = require("./src/routes/api");
const session = require("express-session");
const cookies = require('cookie-parser');
const cors = require('cors')


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.use(express.json());

const loggedMiddleware = require("./src/middlewares/loggedMiddleware");
const adminLoggedMiddleware = require("./src/middlewares/adminLoggedMiddleware");

app.use(
  session({
    secret: "tiket secreto",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors())
// app.options('*', cors());

app.use(cookies());

app.use(adminLoggedMiddleware);
app.use(loggedMiddleware);

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.listen(3001, () => {
  console.log("Servidor en puerto 3001");
});

app.use("/", rutasMain);

app.use("/usuario", rutasUsuario);

app.use("/producto", rutasProductos);

app.use("/administrador", rutasAdministrador);

app.use("/api", rutasApi);

app.set("view engine", "ejs");

app.set("views", "./src/views");
