const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { 
        useNewUrlParser: true 
    }
);

//require('./src/model/Product');
//biblioteca que faz um "require" em todos os arquivos da pasta que vc colocar
requireDir('./src/model');

const Product = mongoose.model('Product');

//criando primeira rota
// app.get('/', (req, res) => {
//     Product.create({
//         title: "React Nativa",
//         description: "Build native apps with React",
//         url: "http://github.com/facebook/react-native"
//     });

//     res.send('Hello World !');
// });

////Primeira rota
app.use('/api', require('./src/Routes'));

app.listen(3001);