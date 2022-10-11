import "../../scss/supplyChain.scss";
import { useState } from "react";
import Pagination from "bulma-pagination-react";
import cartImage from "../../assets/icons8-add-to-cart-64.png";

const Supplier = () => {

    const [order, setOrder] = useState();
    const [feedback, setFeedback] = useState();
    const [myOrders, setMyOrders] = useState([]);

    const data = [{
        productName: "Aniseed Syrup",
        orderQuantity: "3,844 units",
        totalAmount: "$1,703,520",
        supplierID: "Supplier-001",
    },
    {
        productName: "cote de Blaye",
        orderQuantity: "1,176 units",
        totalAmount: "$1,512,000",
        supplierID: "Supplier-001",
    },
    {
        productName: "Escargots de Bourgogne",
        orderQuantity: "1,168 units",
        totalAmount: "$3,273,760",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Louisiana Hot Spiced Okra",
        orderQuantity: "1,400 units",
        totalAmount: "$1,814,400",
        supplierID: "Supplier-001",
    }, {
        productName: "Perth Pasties",
        orderQuantity: "760 units",
        totalAmount: "$1,808,352",
        supplierID: "Supplier-001",
    }, {
        productName: "Schoggi Schokolade",
        orderQuantity: "1,508 units",
        totalAmount: "$1,793,100",
        supplierID: "Supplier-001",
    }, {
        productName: "Sir Rodney's Scones",
        orderQuantity: "1,632 units",
        totalAmount: "$966,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Aniseed Syrup",
        orderQuantity: "3,844 units",
        totalAmount: "$1,703,520",
        supplierID: "Supplier-001",
    },
    {
        productName: "cote de Blaye",
        orderQuantity: "1,176 units",
        totalAmount: "$1,512,000",
        supplierID: "Supplier-001",
    },
    {
        productName: "Escargots de Bourgogne",
        orderQuantity: "1,168 units",
        totalAmount: "$3,273,760",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Louisiana Hot Spiced Okra",
        orderQuantity: "1,400 units",
        totalAmount: "$1,814,400",
        supplierID: "Supplier-001",
    }, {
        productName: "Perth Pasties",
        orderQuantity: "760 units",
        totalAmount: "$1,808,352",
        supplierID: "Supplier-001",
    }, {
        productName: "Schoggi Schokolade",
        orderQuantity: "1,508 units",
        totalAmount: "$1,793,100",
        supplierID: "Supplier-001",
    }, {
        productName: "Sir Rodney's Scones",
        orderQuantity: "1,632 units",
        totalAmount: "$966,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Aniseed Syrup",
        orderQuantity: "3,844 units",
        totalAmount: "$1,703,520",
        supplierID: "Supplier-001",
    },
    {
        productName: "cote de Blaye",
        orderQuantity: "1,176 units",
        totalAmount: "$1,512,000",
        supplierID: "Supplier-001",
    },
    {
        productName: "Escargots de Bourgogne",
        orderQuantity: "1,168 units",
        totalAmount: "$3,273,760",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Louisiana Hot Spiced Okra",
        orderQuantity: "1,400 units",
        totalAmount: "$1,814,400",
        supplierID: "Supplier-001",
    }, {
        productName: "Perth Pasties",
        orderQuantity: "760 units",
        totalAmount: "$1,808,352",
        supplierID: "Supplier-005",
    }, {
        productName: "Schoggi Schokolade",
        orderQuantity: "1,508 units",
        totalAmount: "$1,793,100",
        supplierID: "Supplier-008",
    }, {
        productName: "Sir Rodney's Scones",
        orderQuantity: "1,632 units",
        totalAmount: "$966,000",
        supplierID: "Supplier-007",
    }, {
        productName: "Aniseed Syrup",
        orderQuantity: "3,844 units",
        totalAmount: "$1,703,520",
        supplierID: "Supplier-006",
    },
    {
        productName: "cote de Blaye",
        orderQuantity: "1,176 units",
        totalAmount: "$1,512,000",
        supplierID: "Supplier-001",
    },
    {
        productName: "Escargots de Bourgogne",
        orderQuantity: "1,168 units",
        totalAmount: "$3,273,760",
        supplierID: "Supplier-004",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Louisiana Hot Spiced Okra",
        orderQuantity: "1,400 units",
        totalAmount: "$1,814,400",
        supplierID: "Supplier-003",
    }, {
        productName: "Perth Pasties",
        orderQuantity: "760 units",
        totalAmount: "$1,808,352",
        supplierID: "Supplier-003",
    }, {
        productName: "Schoggi Schokolade",
        orderQuantity: "1,508 units",
        totalAmount: "$1,793,100",
        supplierID: "Supplier-003",
    }, {
        productName: "Sir Rodney's Scones",
        orderQuantity: "1,632 units",
        totalAmount: "$966,000",
        supplierID: "Supplier-003",
    }, {
        productName: "Aniseed Syrup",
        orderQuantity: "3,844 units",
        totalAmount: "$1,703,520",
        supplierID: "Supplier-001",
    },
    {
        productName: "cote de Blaye",
        orderQuantity: "1,176 units",
        totalAmount: "$1,512,000",
        supplierID: "Supplier-001",
    },
    {
        productName: "Escargots de Bourgogne",
        orderQuantity: "1,168 units",
        totalAmount: "$3,273,760",
        supplierID: "Supplier-001",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-003",
    }, {
        productName: "Grandma's Boysenberry Spread",
        orderQuantity: "1,672 units",
        totalAmount: "$880,000",
        supplierID: "Supplier-001",
    }, {
        productName: "Louisiana Hot Spiced Okra",
        orderQuantity: "1,400 units",
        totalAmount: "$1,814,400",
        supplierID: "Supplier-001",
    }, {
        productName: "Perth Pasties",
        orderQuantity: "760 units",
        totalAmount: "$1,808,352",
        supplierID: "Supplier-002",
    }, {
        productName: "Schoggi Schokolade",
        orderQuantity: "1,508 units",
        totalAmount: "$1,793,100",
        supplierID: "Supplier-002",
    }, {
        productName: "Sir Rodney's Scones",
        orderQuantity: "1,632 units",
        totalAmount: "$966,000",
        supplierID: "Supplier-002",
    }
    ]
    const orderData = [{
        orderNo: "Supplier-001",
        customerName: "Gustavo Achong",
        rating: "Good",
        country: "Sydney"
    },
    {
        orderNo: "Supplier-002",
        customerName: "Catherine Abel",
        rating: "Good",
        country: "Sydney"
    },
    {
        orderNo: "Supplier-003",
        customerName: "Kim Abercrombie",
        rating: "Excellent",
        country: "Sydney"
    }, {
        orderNo: "Supplier-004",
        customerName: "Humberto Acevedo",
        rating: "Excellent",
        country: "China"
    }, {
        orderNo: "Supplier-005",
        customerName: "Pilar Ackerman",
        rating: "Good",
        country: "US"
    }, {
        orderNo: "Supplier-006",
        customerName: "Frances Adams",
        rating: "Poor",
        country: "China"
    }, {
        orderNo: "Supplier-007",
        customerName: "Margaret Smith",
        rating: "Fair",
        country: "Sydney"
    }, {
        orderNo: "Supplier-008",
        customerName: "Carla Adams",
        rating: "EGee",
        country: "Sydney"
    },
    ]

    const fd = data.filter(item => {
        return item.supplierID === "Supplier-001";
    })
    const [selectedSupplierNo, setSelectedSupplierNo] = useState("Supplier-001")
    const [filterOrders, setFilterOrders] = useState(fd);
    const [filterFeedbacks, setFilterFeedbacks] = useState(orderData);
    const [size, setSize] = useState(5);
    const [page, setPage] = useState(1);
    const [feedbackpage, setFeedbackPage] = useState(1);
    const filterOrder = (e) => {
        console.log(e.target.value)
        if (!e.target.value || e.target.value === "") {
            setFilterOrders(data)
        } else {
            const fil = e.target.value.toLowerCase()
            const fd = data.filter(item => {

                var matchName = false;
                var matchQuantity = false;
                var matchAmount = false;

                matchName = item.productName.toLowerCase().indexOf(fil) >= 0;
                matchQuantity = item.orderQuantity.toLowerCase().indexOf(fil) >= 0;
                matchAmount = item.totalAmount.toLowerCase().indexOf(fil) >= 0;
                return matchName || matchQuantity || matchAmount
            })
            setFilterOrders(fd)
        }
    }

    const filterFeedback = (e) => {
        console.log(e.target.value)
        if (!e.target.value || e.target.value === "") {
            setFilterFeedbacks(orderData)
        } else {
            const fil = e.target.value.toLowerCase()
            const fd = orderData.filter(item => {
                var matchOrderNo = false;
                var matchCustomerName = false;
                var matchRating = false;
                var matchOrderDefect = false;

                matchOrderNo = item.orderNo.toLowerCase().indexOf(fil) >= 0;
                matchCustomerName = item.customerName.toLowerCase().indexOf(fil) >= 0;
                matchRating = item.rating.toLowerCase().indexOf(fil) >= 0;
                matchOrderDefect = item.country.toLowerCase().indexOf(fil) >= 0;
                return matchOrderNo || matchCustomerName || matchRating || matchOrderDefect
            })
            setFilterFeedbacks(fd)
        }
    }

    const clickSupplier = (supplierID) => {
        setSelectedSupplierNo(supplierID);
        const fd = data.filter(item => {

            return item.supplierID === supplierID;
        })
        setFilterOrders(fd)
    }
    const addToChart = (item) => {
        // {
        //     productName:"",
        //     number:22,
        // }
        let orders = myOrders;
        const index = orders.findIndex((order) => { return item.productName === order.productName })
        if (index >= 0) {
            orders[index].number++
        } else {
            orders.push({
                productName: item.productName,
                number: 1
            })
        }
        setMyOrders([...orders])
        console.log(myOrders)
    }
    return <div>
        <div className="box supplyChainPage">
            <div className="supplyChain">
                <input role="feedback-search" value={feedback} onChange={(e) => filterFeedback(e)} className="input is-primary margin-bottom-10" type="text" placeholder="Search By feedback" />
                <div className="title">Supplier</div>
                <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Supplier Code</th>
                            <th>Supplier Name</th>
                            <th>Rating</th>
                            <th>Country</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filterFeedbacks.length > 0 && filterFeedbacks.slice((feedbackpage - 1) * size, feedbackpage * size).map((item) => (
                            <tr key={item.order+item.customerName} className={selectedSupplierNo === item.orderNo ? "is-selected" : ""} onClick={() => clickSupplier(item.orderNo)}>
                                <td>{item.orderNo}</td>
                                <td>{item.customerName}</td>
                                <td>{item.rating}</td>
                                <td>{item.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    pages={Math.ceil(filterFeedbacks.length / size)}
                    currentPage={feedbackpage}
                    onChange={(page) => setFeedbackPage(page)}
                />
            </div>
            <div className="supplyChain">
                <input value={order} onChange={(e) => filterOrder(e)} className="input is-primary  margin-bottom-10" type="text" placeholder="Search By Order" />
                <div className="title">Products for Selected Supplier</div>
                <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                            {/* <th>Total Amount</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {filterOrders.length > 0 && filterOrders.slice((page - 1) * size, page * size).map((item,index) => (
                            <tr key={item.productName+item.totalAmount+index}>
                                <td>{item.productName}</td>
                                <td>{item.totalAmount}</td>
                                <td style={{ cursor: "pointer" }}>
                                <img src={cartImage} width="30" alt="TraceIt Logo" onClick={() => addToChart(item)}></img>
                                    {/* <span className="icon is-medium" onClick={() => addToChart(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM252 160c0-11 9-20 20-20h44V96c0-11 9-20 20-20s20 9 20 20v44h44c11 0 20 9 20 20s-9 20-20 20H356v44c0 11-9 20-20 20s-20-9-20-20V180H272c-11 0-20-9-20-20z" /></svg>
                                    </span> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    pages={Math.ceil(filterOrders.length / size)}
                    currentPage={page}
                    onChange={(page) => setPage(page)}
                />
            </div>
            <div className="supplyChain">
                <div className="title">Sales</div>
                <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.map((order) => (
                            <tr key={order.productName+order.number}>
                                <td>{order.productName}</td>
                                <td>{order.number}</td>
                            </tr>
                        )
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    </div>;
};

export default Supplier;
