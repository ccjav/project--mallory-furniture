export function getProducts() {
  return fetch("https://mallory-furniture-admin.now.sh/api/v1/products")
    .then(response => response.json())
    .then(data => data);
  //checar catch
  // .then(posts => {
  //   return {
  //     id: subredditId,
  //     posts
  //   };
  // });
}
