const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

// API Express
const api = require('./routes/auth.routes');

// Connexion MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Base de données connectée')
},
    error => {
        console.log("La base de données ne peut pas être connectée: " + error)
    }
)

// Supprimer l'erreur d'avertissement de MongoDB
mongoose.set('useCreateIndex', true);


// Paramètres express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Servir des ressources statiques
app.use('/public', express.static('public'));

app.use('/api', api)

// Définir le PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connecté au port ' + port)
})

// Traitement des erreurs d'express
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Quelque chose a mal tourné'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});