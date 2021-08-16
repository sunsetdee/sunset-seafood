const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.cart);


router.get('/history', ordersCtrl.history);

router.put('/checkout', ordersCtrl.checkout);

router.put('/:itemId/qty/:qty', ordersCtrl.setItemQtyInCart);

module.exports = router; 





