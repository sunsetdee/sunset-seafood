require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Shrimps', sortOrder: 10},
        {name: 'Crab', sortOrder: 20},
        {name: 'Fish', sortOrder: 30},
        {name: 'Shell Fish', sortOrder: 40},
        {name: 'Snake', sortOrder: 50},
        {name: 'Insects', sortOrder: 60},
        {name: 'Exotic Animal', sortOrder: 70},
        {name: 'Beef', sortOrder: 80},
        {name: 'Pork and Chicken', sortOrder: 90},
        {name: 'Vegetable', sortOrder: 100},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Steam Live Metapenaeus Ensis', category: categories[0], 
        description: 'Steam live Metapenaeus Ensis prawns dip in sauce of your choice', 
        price: '19.99 per lb'},
        {name: 'Steam Live Blue Crab', category: categories[1], description: 'Steam whole live blue crab serve with garlic ginger sauce',
        price: '7.99 per lb'},
        {name: 'Steam Live Manila Clams', category: categories[3], description: 'Steam live manila clams', price: '5.99 per lb'},
        {name: 'Steam Live Mussels', category: categories[3], description: 'Steam live mussels', price: '4.99 per lb'},
        {name: 'Steam Whole Live Scallop', category: categories[3], description: 'Steam whole live scallop with shell serve with chilli soy sauce', 
        price: '9.99 each'},
        {name: 'Geoduck Sashimi', category: categories[3], description: 'Live Geoduck thin sliced sashimi', price: '17.99 per lb'},
        {name: 'Japanese A5 Wagyu New York Strip Loin Roast', category: categories[7], description: 'Japanese A5 wagyu teppanyaki or shabu shabu', 
        price: '81.99 per lb'},
        {}
    ])
})