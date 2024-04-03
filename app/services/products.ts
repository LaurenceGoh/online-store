export const retrieveAllProducts = async () => {
    const results = fetch('https://dummyjson.com/products')
    .then(res => res.json())
    return results;
}
