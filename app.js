const express =require ('express');
const path = require('path');
const rutasUsuario = require('./src/routes/usuario');
const rutasProductos = require('./src/routes/producto');
const rutasMain = require('./src/routes/main');
const rutasAdministrador = require('./src/routes/administrador');
const methodOverride = require('method-override');
const app = express();
const session = require ('express-session');

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));
app.use(express.json());

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.use(session({
    secret: "tiket secreto",
    resave: false,
    saveUninitialized: false,
})); 

app.listen(3000,()=>{
    console.log("Servidor en puerto 3000");
});

app.use('/', rutasMain);

app.use('/usuario', rutasUsuario);

app.use('/producto', rutasProductos);

app.use('/administrador', rutasAdministrador);

app.set('view engine', 'ejs');

app.set('views', './src/views');



