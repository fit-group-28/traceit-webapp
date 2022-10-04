import request from './request';

const order_URL = "/api/order";
const inventory_URL = "/api/inventory";
const supplier_URL = "/api/supplier";
const product_URL = "/api/product";

const getOrders = () => {
    return request(order_URL)
}

const patchOrder = (data) => {
    return request(order_URL, { method: "PATCH", data })
}

const postOrder = (data) => {
    return request(order_URL, { method: "POST", data })
}

const getInventory = () => {
    return request(inventory_URL)
}

const patchInventory = (data) => {
    return request(inventory_URL, { method: "PATCH", data })
}


const getSuppliers = () => {
    return request(supplier_URL)
}

const getProducts = () => {
    return request(product_URL)
}




const dashboardService = {
    getOrders,
    getInventory,
    getSuppliers,
    patchOrder,
    postOrder,
    getProducts,
    patchInventory
}

export default dashboardService