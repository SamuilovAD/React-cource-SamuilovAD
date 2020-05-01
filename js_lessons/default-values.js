function fetchOrders(orders = 10, start){
    console.log('Getting ',orders,' starting from ',start);
}
fetchOrders(undefined, 10);
function findProducts(opts = {productsLimit: 10, offset:0}) {
    console.log(opts);
}
findProducts();