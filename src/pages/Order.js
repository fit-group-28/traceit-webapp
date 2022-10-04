import Navbar from "../components/NavBar"
import avatar from "../assets/avatar.jpg";
import { useState, useEffect } from "react";
import Loading from '../components/Loading';
import DashboardService from "../services/dashboardService";
import ProductDisplay from '../components/ProductDisplay';
import "../scss/order.scss";
import { CSVLink } from "react-csv";
import dashboardService from "../services/dashboardService";
import CreateOrderModal from "../components/CreateOrderModal";

const ACTIVE_STATUS = ['placed', 'transit']
const INACTIVE_STATUS = ['fulfilled', 'cancelled']

function Order() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [isActive, setIsActive] = useState(true)
    const [search, setSearch] = useState('')

    const getData = () => {
        setLoading(true)
        DashboardService.getOrders().then(
            (response) => {
                setOrders(response.data.orders)
                setFilteredOrders(response.data.orders.filter(order => ACTIVE_STATUS.includes(order.order_status)))
            }
        ).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    const onSearch = (search) => {
        const filtered = orders.filter((order) => {
            const { order_id, products } = order
            const isValid = isActive ? ACTIVE_STATUS.includes(order.order_status) : INACTIVE_STATUS.includes(order.order_status)
            return isValid && (String(order_id).toLowerCase().includes(search.toLowerCase()) || products.some(product => product.product.name.toLowerCase().includes(search.toLowerCase())))
        });
        setFilteredOrders(filtered);
        setSearch(search)
    }

    const clearFilter = () => {
        setSearch('')
    }

    // Histrory button
    const handleHistory = () => {
        setIsActive(!isActive)
        clearFilter()

        if (isActive) {
            setFilteredOrders(orders.filter(order => INACTIVE_STATUS.includes(order.order_status)))
        }

        else {
            setFilteredOrders(orders.filter(order => ACTIVE_STATUS.includes(order.order_status)))

        }
    }

    const onStatusChange = (id, status) => {
        console.log(id, status)
        dashboardService.patchOrder({ order_id: id, order_status: status }).then(() => {
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
                                    Orders
                                </h1></div>
                            </div>
                        </div>
                    </div>
                    <nav className="level pb-2 px-2">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input value={search} onChange={e => onSearch(e.target.value)} className="input search-bar" type="text" placeholder="Search for order ID, item name..." />
                                        <span className="icon is-left">
                                            <i className="fas fa-search" aria-hidden="true"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="level-right">
                            <button className="button mr-2" onClick={getData}>
                                <span className="icon">
                                    <i className="fas fa-redo"></i>
                                </span>
                            </button>

                            <CreateOrderModal onSuccess={getData} />

                            <button onClick={handleHistory} className={`button mr-2 ${isActive ? "is-warning" : "is-success"}`}>
                                {isActive
                                    ? <div key="1">
                                        <span className="icon">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <span>History</span></div>
                                    : <div key="2">
                                        <span className="icon">
                                            <i className="fas fa-clock"></i>
                                        </span>
                                        <span>Active</span></div>}
                            </button>

                            <CSVLink data={filteredOrders} className="button">
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
                                            <th style={{ width: 100 }} ></th>
                                            <th style={{ width: 200 }}>Order ID</th>
                                            <th style={{ width: 800 }}>Products</th>
                                            <th>Order Date</th>
                                            <th>Status</th>
                                            {isActive && <th style={{ paddingLeft: 70 }}>Operation</th>}
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {/* sample API data */}
                                        {filteredOrders.map((order) => {
                                            return (
                                                <tr key={order.order_id}>
                                                    <td className="is-checkbox-cell">
                                                        <label className="b-checkbox checkbox">
                                                            <input type="checkbox" value="false" />
                                                            <span className="check"></span>
                                                        </label>
                                                    </td>
                                                    <td className="is-image-cell">
                                                        <div className="image">
                                                            <figure className="image is-32x32">
                                                                <img className="is-rounded" src={avatar} alt="avatar" />
                                                            </figure>
                                                        </div>
                                                    </td>
                                                    <td>{order.order_id}</td>
                                                    <td>
                                                        <ProductDisplay products={order.products} />
                                                    </td>
                                                    <td>{String(order.date_placed).slice(0, 16)}</td>
                                                    <td>
                                                        {isActive ? <div className="control">
                                                            <div className="select">
                                                                <select defaultValue={order.order_status} onChange={(e) => onStatusChange(order.order_id, e.target.value)}>
                                                                    <option value="placed">Placed</option>
                                                                    <option value="transit">In Transit</option>
                                                                </select>
                                                            </div>
                                                        </div> : order.order_status}

                                                    </td>
                                                    {isActive && <td>
                                                        <button className="button mx-2 is-success is-light" onClick={() => onStatusChange(order.order_id, 'fulfilled')}>Complete</button>
                                                        <button className="button is-danger is-light" onClick={() => onStatusChange(order.order_id, 'cancelled')}>Cancel</button>
                                                    </td>}
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
        </Loading>

    )
}

export default Order