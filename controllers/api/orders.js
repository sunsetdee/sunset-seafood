const Order = require('../../models/order');


module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    history,
};

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
}

async function setItemQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.params.itemId, req.params.qty);
    res.json(cart);
}

async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}

async function history(req, res) {
    const orders = await Order
    .find({ user: req.user._id, isPaid: true })
    .sort('-updatedAt').exec();
    res.json(orders);
}