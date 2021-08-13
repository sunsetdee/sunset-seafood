const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    name: { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    description: { type: String, required: true},
    price: { type: String, required: true},
    photo: { type: String },
    video: { type: String }
}, {
    timestamps: true
});

module.exports = itemSchema;