const mongoose = require('mongoose');
const config = require('../config');
const dbconf = `${config.mongo.host}://${config.mongo.user}:${config.mongo.password}@cluster0.iy6va.mongodb.net/${config.mongo.database}?retryWrites=true&w=majority`;

mongoose.connect(dbconf, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function(){
    console.log("DB Mongo Connected ");
});
mongoose.connection.on('error', function(err){
    console.error('[db err]', err);
});

mongoose.connection.on('disconnected', function(){
    console.log("DB Mongo Disconnected");
});

function list(model) {
    return model.find()
}

module.exports = {
    list
};

