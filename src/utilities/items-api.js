// this file is for sending request to the back end for items
import sendRequest from "./send-request";

// going to express backend(route)
const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}