import "../../scss/supplyChain.scss";
import { useState } from "react";
import Pagination from "bulma-pagination-react";

const SupplyChain = () => {
	const [order, setOrder] = useState();
	const [feedback, setFeedback] = useState();

	const data = [{
		productName: "Aniseed Syrup",
		orderQuantity: "3,844 units",
		totalAmount: "$1,703,520"
	},
	{
		productName: "cote de Blaye",
		orderQuantity: "1,176 units",
		totalAmount: "$1,512,000"
	},
	{
		productName: "Escargots de Bourgogne",
		orderQuantity: "1,168 units",
		totalAmount: "$3,273,760"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Louisiana Hot Spiced Okra",
		orderQuantity: "1,400 units",
		totalAmount: "$1,814,400"
	},{
		productName: "Perth Pasties",
		orderQuantity: "760 units",
		totalAmount: "$1,808,352"
	},{
		productName: "Schoggi Schokolade",
		orderQuantity: "1,508 units",
		totalAmount: "$1,793,100"
	},{
		productName: "Sir Rodney's Scones",
		orderQuantity: "1,632 units",
		totalAmount: "$966,000"
	},{
		productName: "Aniseed Syrup",
		orderQuantity: "3,844 units",
		totalAmount: "$1,703,520"
	},
	{
		productName: "cote de Blaye",
		orderQuantity: "1,176 units",
		totalAmount: "$1,512,000"
	},
	{
		productName: "Escargots de Bourgogne",
		orderQuantity: "1,168 units",
		totalAmount: "$3,273,760"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Louisiana Hot Spiced Okra",
		orderQuantity: "1,400 units",
		totalAmount: "$1,814,400"
	},{
		productName: "Perth Pasties",
		orderQuantity: "760 units",
		totalAmount: "$1,808,352"
	},{
		productName: "Schoggi Schokolade",
		orderQuantity: "1,508 units",
		totalAmount: "$1,793,100"
	},{
		productName: "Sir Rodney's Scones",
		orderQuantity: "1,632 units",
		totalAmount: "$966,000"
	},{
		productName: "Aniseed Syrup",
		orderQuantity: "3,844 units",
		totalAmount: "$1,703,520"
	},
	{
		productName: "cote de Blaye",
		orderQuantity: "1,176 units",
		totalAmount: "$1,512,000"
	},
	{
		productName: "Escargots de Bourgogne",
		orderQuantity: "1,168 units",
		totalAmount: "$3,273,760"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Louisiana Hot Spiced Okra",
		orderQuantity: "1,400 units",
		totalAmount: "$1,814,400"
	},{
		productName: "Perth Pasties",
		orderQuantity: "760 units",
		totalAmount: "$1,808,352"
	},{
		productName: "Schoggi Schokolade",
		orderQuantity: "1,508 units",
		totalAmount: "$1,793,100"
	},{
		productName: "Sir Rodney's Scones",
		orderQuantity: "1,632 units",
		totalAmount: "$966,000"
	},{
		productName: "Aniseed Syrup",
		orderQuantity: "3,844 units",
		totalAmount: "$1,703,520"
	},
	{
		productName: "cote de Blaye",
		orderQuantity: "1,176 units",
		totalAmount: "$1,512,000"
	},
	{
		productName: "Escargots de Bourgogne",
		orderQuantity: "1,168 units",
		totalAmount: "$3,273,760"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Louisiana Hot Spiced Okra",
		orderQuantity: "1,400 units",
		totalAmount: "$1,814,400"
	},{
		productName: "Perth Pasties",
		orderQuantity: "760 units",
		totalAmount: "$1,808,352"
	},{
		productName: "Schoggi Schokolade",
		orderQuantity: "1,508 units",
		totalAmount: "$1,793,100"
	},{
		productName: "Sir Rodney's Scones",
		orderQuantity: "1,632 units",
		totalAmount: "$966,000"
	},{
		productName: "Aniseed Syrup",
		orderQuantity: "3,844 units",
		totalAmount: "$1,703,520"
	},
	{
		productName: "cote de Blaye",
		orderQuantity: "1,176 units",
		totalAmount: "$1,512,000"
	},
	{
		productName: "Escargots de Bourgogne",
		orderQuantity: "1,168 units",
		totalAmount: "$3,273,760"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Grandma's Boysenberry Spread",
		orderQuantity: "1,672 units",
		totalAmount: "$880,000"
	},{
		productName: "Louisiana Hot Spiced Okra",
		orderQuantity: "1,400 units",
		totalAmount: "$1,814,400"
	},{
		productName: "Perth Pasties",
		orderQuantity: "760 units",
		totalAmount: "$1,808,352"
	},{
		productName: "Schoggi Schokolade",
		orderQuantity: "1,508 units",
		totalAmount: "$1,793,100"
	},{
		productName: "Sir Rodney's Scones",
		orderQuantity: "1,632 units",
		totalAmount: "$966,000"
	}
]
const orderData = [{
	orderNo: "ORD-001",
	customerName: "Gustavo Achong",
	rating: "Good",
	orderDefect: "None"
},
{
	orderNo: "ORD-002",
	customerName: "Catherine Abel",
	rating: "Good",
	orderDefect: "None"
},
{
	orderNo: "ORD-003",
	customerName: "Kim Abercrombie",
	rating: "Excellent",
	orderDefect: "None"
},{
	orderNo: "ORD-004",
	customerName: "Humberto Acevedo",
	rating: "Excellent",
	orderDefect: "lncorrect quantity"
},{
	orderNo: "ORD-005",
	customerName: "Pilar Ackerman",
	rating: "Good",
	orderDefect: "Damaged goods"
},{
	orderNo: "ORD-006",
	customerName: "Frances Adams",
	rating: "Poor",
	orderDefect: "lncorrect quantity"
},{
	orderNo: "ORD-007",
	customerName: "Margaret Smith",
	rating: "Fair",
	orderDefect: "None"
},{
	orderNo: "ORD-008",
	customerName: "Carla Adams",
	rating: "EGee",
	orderDefect: "None"
},
]
	const [filterOrders, setFilterOrders] = useState(data);
	const [filterFeedbacks, setFilterFeedbacks] = useState(orderData);
	const [size, setSize] = useState(5);
	const [page, setPage] = useState(1);
	const [feedbackpage, setFeedbackPage] = useState(1);
const filterOrder = (e) => {
	console.log(e.target.value)
	if(!e.target.value || e.target.value ===""){
		setFilterOrders(data)
	}else{
		const fil = e.target.value.toLowerCase()
		const fd = data.filter(item=>{

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
	if(!e.target.value || e.target.value ===""){
		setFilterFeedbacks(orderData)
	}else{
		const fil = e.target.value.toLowerCase()
		const fd = orderData.filter(item=>{
			var matchOrderNo = false;
			var matchCustomerName = false;
			var matchRating = false;
			var matchOrderDefect = false;

			matchOrderNo = item.orderNo.toLowerCase().indexOf(fil) >= 0;
			matchCustomerName = item.customerName.toLowerCase().indexOf(fil) >= 0;
			matchRating = item.rating.toLowerCase().indexOf(fil) >= 0;
			matchOrderDefect = item.orderDefect.toLowerCase().indexOf(fil) >= 0;
			return matchOrderNo || matchCustomerName || matchRating || matchOrderDefect
		})
		setFilterFeedbacks(fd)
	}
}
    return <div>
		<div className="box supplyChainPage">
			<div className="supplyChain">
			<input value={order} onChange={(e)=>filterOrder(e)} className="input is-primary  margin-bottom-10" type="text" placeholder="Search By Order" />
				<div className="title">Product Order Details - Delivered</div>
				<table className="table is-bordered is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>Product</th>
							<th>order Quantity</th>
							<th>Total Amount</th>
						</tr>
					</thead>
					<tbody>
						{filterOrders.length>0 && filterOrders.slice((page-1)*size, page*size).map((item)=>(
							<tr>
								<td>{item.productName}</td>
								<td>{item.orderQuantity}</td>
								<td>{item.totalAmount}</td>
							</tr>
						))}
					</tbody>
				</table>
				<Pagination
          pages={Math.ceil(filterOrders.length/size)}
          currentPage={page}
          onChange={(page)=>setPage(page)}
        />
			</div>
			<div className="supplyChain">
			<input value={feedback} onChange={(e)=>filterFeedback(e)} className="input is-primary margin-bottom-10" type="text" placeholder="Search By feedback" />
				<div className="title">Feedback Details - Delivered Orders</div>
				<table className="table is-bordered is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>Customer Order No</th>
							<th>Customer</th>
							<th>Rating</th>
							<th>order Defect</th>
						</tr>
					</thead>

					<tbody>
					{filterFeedbacks.length>0 && filterFeedbacks.slice((feedbackpage-1)*size, feedbackpage*size).map((item)=>(
							<tr>
								<td>{item.orderNo}</td>
								<td>{item.customerName}</td>
								<td>{item.rating}</td>
								<td>{item.orderDefect}</td>
							</tr>
						))}
					</tbody>
				</table>
				<Pagination
          pages={Math.ceil(filterFeedbacks.length/size)}
          currentPage={feedbackpage}
          onChange={(page)=>setFeedbackPage(page)}
        />
			</div>
		</div>
	</div>;
};

export default SupplyChain;
