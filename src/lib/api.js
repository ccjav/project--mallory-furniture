import { MALLORY_API_URL } from "../constants";

export function getProducts(search = {}) {
  const searchParams = new URLSearchParams(search);

  MALLORY_API_URL.search = searchParams;

  return fetch(MALLORY_API_URL)
    .then(response => response.json())
    .then(data => data);
  //checar catch
}

export function getProduct(productId) {
  return fetch(
    `https://mallory-furniture-admin.now.sh/api/v1/products/${productId}`
  )
    .then(response => response.json())
    .then(data => data);
}
