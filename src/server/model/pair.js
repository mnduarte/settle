const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    description: { type: String, required: true },
    base: { type: String, required: true },
    symbol_to_pair: { type: String, required: true },
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});



module.exports = mongoose.model('Pair', schema, 'pair');