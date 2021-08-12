const Item = require('../../models/item');

module.exports = {
    index,
    show,
};

async function index(req, res) {
    // when we run node seed, it will push the data we have in seed.js to the database and create those items
    // the below code will look at our database to find all the item
    const items = await Item.find({}).sort('name').populate('category').exec();
    res.json(items);
}

async function show(req, res) {
    const item = await Item.findById(req.params.id);
    res.json(item);
}