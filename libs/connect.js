const mongoose = require('mongoose');

const mongodbRoute = 'mongodb+srv://Endika:peperoni69@clustertest-q0aww.mongodb.net/TestUsers?retryWrites=true&w=majority';

const mongodbOptions = {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.Promise = global.Promise

const db = mongoose.connect(mongodbRoute, mongodbOptions, (err) => {
    if (err) {
        return console.log('Error al conectar a la base de datos: ${err}')
    }
    
    console.log('Conexión a mongo correcta.')
})

module.export;