export const getProducts = () => {
  return fetch('./mock-data/products.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => data);
}