// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let u, i, c, o;