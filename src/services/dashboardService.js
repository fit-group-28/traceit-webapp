import axios from 'axios';
import request from './request';

const order_URL = "/api/order";
const inventory_URL = "/api/inventory";
const supplier_URL = "/api/supplier";
const product_URL = "/api/product";

const getOrders = () => {
    return axios.get(order_URL, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`
        }
    })

}

const patchOrder = (data) => {
    return request(order_URL, { method: "PATCH", data })
}

const postOrder = (data) => {
    return axios.post(order_URL, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`
        }
    })
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
    return axios.get(product_URL, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`
        }
    })
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