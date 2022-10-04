import Navbar from "../components/NavBar"
import bag from "../assets/bag.png";
import { useState, useEffect } from "react";
import Loading from '../components/Loading';
import DashboardService from "../services/dashboardService";
import "../scss/order.scss";
import { CSVLink } from "react-csv";
import QuantityOperation from "../components/QuantityOperation";

function Order() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [isReadOnly, setIsReadOnly] = useState(true)
    const [search, setSearch] = useState('')

    const getData = () => {
        setLoading(true)
        DashboardService.getInventory().then(
            (response) => {
                setItems(response.data.inventory)
                setFilteredItems(response.data.inventory)
            }
        ).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    // const onSearch = (search) => {
    //     const filtered = orders.filter((order) => {
    //         const { order_id, products } = order
    //         const isValid = isActive ? ACTIVE_STATUS.includes(order.order_status) : INACTIVE_STATUS.includes(order.order_status)
    //         return isValid && (String(order_id).toLowerCase().includes(search.toLowerCase()) || products.some(product => product.product.name.toLowerCase().includes(search.toLowerCase())))
    //     });
    //     setFilteredOrders(filtered);
    //     setSearch(search)
    // }

    const onSearch = (search) => {
        const filtered = items.filter((item) => {
            const { product, quantity } = item
            return product.name.toLowerCase().includes(search.toLowerCase()) || String(quantity).toLowerCase().includes(search.toLowerCase())
        });
        setFilteredItems(filtered);
        setSearch(search)
    }

    const onQuantityChange = (id, quantity) => {
        const newItems = [...items]
        const index = newItems.findIndex(item => item.product.product_id === id)
        newItems[index].quantity = quantity
        setItems(newItems)
        onSearch(search, newItems)
    }

    const onRefresh = () => {
        getData()
        setIsReadOnly(true)
    }

    const onSave = () => {
        if (isReadOnly) {
            setIsReadOnly(false)
        } else {
            const promises = items.map(item => DashboardService.patchInventory({ product_id: item.product.product_id, quantity: item.quantity }))
            Promise.all(promises).then(() => {
                setIsReadOnly(true);
                getData()
            }).catch(err => alert(err.message))
        }

    }

    const onDelete = (id) => {
        // 调用删除接口 成功则调用getData 
        DashboardService.patchInventory({ product_id: id, quantity: 0 }).then(
            () => {
                getData()
            }).catch(err => alert(err.message))
    }

    return (
        <Loading loading={loading}>
            <div>
                <Navbar></Navbar>
                <section className="hero is-hero-bar">
                    <div className="hero-body">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item"><h1 className="title">
                                    Inventory
                                </h1></div>
                            </div>
                        </div>
                    </div>
                    <nav className="level pb-2 px-2">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input value={search} onChange={e => onSearch(e.target.value)} className="input search-bar" type="text" placeholder="Search for item ID, item name..." />
                                        <span className="icon is-left">
                                            <i className="fas fa-search" aria-hidden="true"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="level-right">
                            <button className="button mr-2" onClick={onRefresh}>
                                <span className="icon">
                                    <i className="fas fa-redo"></i>
                                </span>
                            </button>

                            <button onClick={onSave} className={`button mr-2 ${isReadOnly ? "is-success" : "is-warning"}`}>
                                {isReadOnly ?
                                    <div key='666'>
                                        <span className="icon">
                                            <i className="fas fa-pen"></i>
                                        </span>
                                        <span>Edit</span></div> : <div key='667'><span className="icon">
                                            <i className="fas fa-save"></i>
                                        </span>
                                        <span>Save</span></div>}
                            </button>

                            <CSVLink data={filteredItems} className="button">
                                <span className="icon">
                                    <i className="fas fa-file-download"></i>
                                </span>
                                <span>Export</span>
                            </CSVLink>
                        </div>
                    </nav>
                </section>

                <div className="card has-table">
                    <div className="card-content">
                        <div className="b-table has-pagination">
                            <div className="table-wrapper">
                                <table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th className="is-checkbox-cell" style={{ width: 50 }}>
                                                <label className="b-checkbox checkbox">
                                                    <input type="checkbox" value="false" />
                                                    <span className="check"></span>
                                                </label>
                                            </th>
                                            <th style={{ width: 100 }}></th>
                                            <th style={{ width: 200 }}>Item ID</th>
                                            <th style={{ width: 300 }}>Item Name</th>
                                            <th style={{ width: 600 }}>Supplier</th>
                                            <th>Quantity</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {/* sample API data */}
                                        {filteredItems.map((item) => {
                                            return (
                                                <tr key={item.product.product_id}>
                                                    <td className="is-checkbox-cell">
                                                        <label className="b-checkbox checkbox">
                                                            <input type="checkbox" value="false" />
                                                            <span className="check"></span>
                                                        </label>
                                                    </td>
                                                    <td className="is-image-cell">
                                                        <div className="image">
                                                            <figure className="image is-32x32">
                                                                <img className="is-rounded" src={bag} alt="bag" />
                                                            </figure>
                                                        </div>
                                                    </td>
                                                    <td>{item.product.product_id}</td>
                                                    <td>{item.product.name}</td>
                                                    <td>{item.product.supplier.name}</td>
                                                    <td><QuantityOperation value={item.quantity} onChange={value => onQuantityChange(item.product.product_id, value)} isReadOnly={isReadOnly} /></td>
                                                    <td>
                                                        <button onClick={() => onDelete(item.product.product_id)} disabled={!isReadOnly} className="button is-danger is-light">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </Loading >

    )
}

export default Order