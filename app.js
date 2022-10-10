const express =require ('express');
const path = require('path')
const rutasUsuario = require('./routes/usuario')
const rutasUProductos = require('./routes/producto')
const rutasMain = require('./routes/main')
const app = express();

const publicPath =path.resolve(__dirname, './public')

app.use(express.static(publicPath));

app.listen(3000,()=>{
    console.log("Servidor en puerto 3000");
});

app.use('/', rutasMain);

app.use('/usuario', rutasUsuario);

app.use('/producto', rutasUProductos);


// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/home.html'))
// })
// app.get('/login',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/login.html'))
// })
// app.get('/register',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/register.html'))
// })
// app.get('/detalles',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/detalleProducto.html'))
// })
// app.get('/catalogo',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/catalogo.html'))
// })