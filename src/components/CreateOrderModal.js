import { useState, useEffect } from 'react'
import ModalCard from './ModalCard'
import DashboardService from '../services/dashboardService';

export default function CreateOrderModal({ onSuccess }) {
    const [isOpen, setIsOpen] = useState(false)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quantityMap, setQuantityMap] = useState({});

    const getProducts = () => {
        setLoading(true)
        DashboardService.getProducts().then(r => {
            setProducts(r.data.products)
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const onQuantityChange = (id, quantity) => {
        setQuantityMap({ ...quantityMap, [id]: quantity })
    }

    const clear = () => {
        setQuantityMap({})
    }

    const handleClose = () => {
        clear();
        setIsOpen(false)
    }

    const handleSubmit = () => {
        console.log(quantityMap)
        const keys = Object.keys(quantityMap)

        if (keys.length === 0 || keys.every(key => quantityMap[key] === 0)) {
            alert('Please add at least one product')
            return
        }

        const products = Object.keys(quantityMap).filter(id => quantityMap[id] !== 0).map(id => ({ product_id: Number(id), quantity: quantityMap[id] }))

        DashboardService.postOrder({ products }).then(r => {
            handleClose()
            onSuccess()
        }).catch(err => alert(err.message))
    }

    return (
        <>
            <button data-testid="add-order" onClick={() => setIsOpen(true)} className="button mr-2 is-info">
                <span className="icon">
                    <i className="fas fa-plus"></i>
                </span>
                <span>Create</span>
            </button>
            <ModalCard
                visible={isOpen}
                title="New Order"
                onClose={handleClose}
                onSave={handleSubmit}
            >
                {loading ? <span>Loading...</span> : null}
                <table className="table is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th style={{ width: 110 }}>Item</th>
                            <th style={{ width: 400 }}>Description</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map((product) => (<tr key={product.product_id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>
                                <input
                                    className="input"
                                    type="number"
                                    value={quantityMap[product.product_id] || 0}
                                    onChange={(e) => {
                                        const value = Number(e.target.value)
                                        if (value >= 0) {
                                            onQuantityChange(product.product_id, value)
                                        }
                                    }}
                                />
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </ModalCard>
        </>

    );
}