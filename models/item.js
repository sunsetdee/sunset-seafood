const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    name: { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    description: { type: String, required: true},
    price: { type: String, required: true, default: 0 },
    photo: { type: String },
    video: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);