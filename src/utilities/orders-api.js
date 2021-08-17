// this file is for sending request to the back end for items
import sendRequest from "./send-request";

// going to express backend(route)
const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function setItemQty(itemId, qty) {
  return sendRequest(`${BASE_URL}/${itemId}/qty/${qty}`, 'PUT');
}

export function checkout() {
  return sendRequest(`${BASE_URL}/checkout`, 'PUT');
}

export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`);
}