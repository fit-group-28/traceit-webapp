import "../../scss/stock.scss";
import { useState } from "react";
import SeacrhIcon from "../../assets/background.png";
import Pagination from "bulma-pagination-react";
import cartImage from "../../assets/icons8-add-to-cart-64.png";
const Stock = () => {
	const stockData = [
		{
			productName: "Potato",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		},
		{
			productName: "Tomato",
			qnt: 1,
			price: "$12",
			supplier: "supplier2",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		},
		{
			productName: "Apple",
			qnt: 1,
			price: "$12",
			supplier: "supplier2",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Banana",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 5",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 6",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 7",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 8",
			qnt: 1,
			price: "$12",
			supplier: "supplier2",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 9",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 10",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 11",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 12",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 13",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 14",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 15",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 16",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 17",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 18",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 19",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 20",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 21",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 22",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 23",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 24",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "yes",
		}, {
			productName: "Product 25",
			qnt: 1,
			price: "$12",
			supplier: "supplier1",
			useBydate: "yes",
			lowStock: "yes",
			hotSale: "no",
		},
	];
	const [myOrders, setMyOrders] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [currentOrderPage, setCurrentOrderPage] = useState(1);
	const [searchWord, setSearchWord] = useState();
	const [size, setSize] = useState(5);
	const [page, setPage] = useState(1);
	const [filterStockData, setFilterStockData] = useState(stockData);
	const [supplierFilter, setSupplierFilter] = useState("all");
	const [hotSale, setHotSale] = useState("all");
	const filterStock = (e) => {
		console.log(e.target.value);
		if (!e.target.value || e.target.value === "") {
			setFilterStockData(stockData);
		} else {
			const fil = e.target.value.toLowerCase();
			const fd = stockData.filter((item) => {
				var productName = false;
				var qnt = false;
				var price = false;
				var supplier = false;
				var useBydate = false;
				var lowStock = false;
				var hotSale = false;

				productName = item.productName.toLowerCase().indexOf(fil) >= 0;
				price = item.price.toLowerCase().indexOf(fil) >= 0;
				supplier = item.supplier.toLowerCase().indexOf(fil) >= 0;
				useBydate = item.useBydate.toLowerCase().indexOf(fil) >= 0;
				lowStock = item.lowStock.toLowerCase().indexOf(fil) >= 0;
				hotSale = item.hotSale.toLowerCase().indexOf(fil) >= 0;
				return (
					productName ||
					qnt ||
					price ||
					supplier ||
					useBydate ||
					lowStock ||
					hotSale
				);
			});
			setFilterStockData(fd);
		}
	};
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
	const filterBySupplier = (e) => {
		setSupplierFilter(e.target.value)
		if (hotSale === "all") {
			if (!e.target.value || e.target.value === "" || e.target.value === "all") {
				setFilterStockData(stockData);
			} else {
				const fil = e.target.value.toLowerCase();
				const fd = stockData.filter((item) => {
					return item.supplier.toLowerCase() === fil;
				});
				setFilterStockData(fd);
			}
		} else {
			const fd = stockData.filter((item) => {
				return item.hotSale.toLowerCase() === hotSale;
			});
			if (!e.target.value || e.target.value === "" || e.target.value === "all") {
				setFilterStockData(fd);
			} else {
				const fil = e.target.value.toLowerCase();
				const fd1 = fd.filter((item) => {
					return item.supplier.toLowerCase() === fil;
				});
				setFilterStockData(fd1);
			}
		}
	}
	const filterHotSale = (e) => {
		setHotSale(e.target.value)
		if (supplierFilter === "all") {
			if (!e.target.value || e.target.value === "" || e.target.value === "all") {
				setFilterStockData(stockData);
			} else {
				const fil = e.target.value.toLowerCase();
				const fd = stockData.filter((item) => {
					return item.hotSale.toLowerCase() === fil;
				});
				setFilterStockData(fd);
			}
		} else {
			const fd = stockData.filter((item) => {
				return item.supplier.toLowerCase() === supplierFilter;
			});
			if (!e.target.value || e.target.value === "" || e.target.value === "all") {
				setFilterStockData(fd);
			} else {
				const fil = e.target.value.toLowerCase();
				const fd1 = fd.filter((item) => {
					return item.hotSale.toLowerCase() === fil;
				});
				setFilterStockData(fd1);
			}
		}
	}
	const saveSales = () => {
		setShowModal(false)
		setMyOrders([])
	}
	return (
		<div>
			{showModal && <div className="modal" style={{ display: "block" }}>
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Create Sale</p>
						<button className="delete" aria-label="close" onClick={()=>setShowModal(false)}></button>
					</header>
					<section className="modal-card-body">
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input" type="text" placeholder="e.g Apple" />
							</div>
						</div>
						<div class="field">
							<label class="label">Description</label>
							<div class="control">
								<textarea class="textarea" placeholder="Description"></textarea>
							</div>
						</div>
						<div class="field">
							<label class="label">Price</label>
							<div class="control">
								<input class="input" type="price" placeholder="e.g. 100" />
							</div>
						</div>
					</section>
					<footer className="modal-card-foot">
						<button className="button is-success" onClick={()=>saveSales()}>Save changes</button>
						<button className="button" onClick={()=>setShowModal(false)}>Cancel</button>
					</footer>
				</div>
			</div>}
			<div className="orderList box" style={{ overflowY: "auto" }}>

				<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				<input
					value={searchWord}
					onChange={(e) => filterStock(e)}
					className="input is-primary"
					type="text"
					placeholder="Search By Product"
				/>
				<div className="select is-primary">
					<select onChange={(e) => filterBySupplier(e)}>
						<option value="all">Supplier-All</option>
						<option value="supplier1">Supplier1</option>
						<option value="supplier2">Supplier2</option>
					</select>
				</div>
				<div className="select is-primary" >
					<select onChange={(e) => filterHotSale(e)}>
						<option value="all">Hot Sale - ALL</option>
						<option value="yes">Hot Sale - Yes</option>
						<option value="no">Hot Sale - No</option>
					</select>
				</div>
				<div className="title">Item List</div>
				<table className="table is-bordered is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>Product</th>
							<th>Qnt</th>
							<th>Price</th>
							<th>supplier</th>
							<th>Use by date</th>
							<th>Low stock</th>
							<th>Hot sale</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{filterStockData.slice((page - 1) * size, page * size).map((item) => (
							<tr>
								<td>{item.productName}</td>
								<td>{item.qnt}</td>
								<td>{item.price}</td>
								<td>{item.supplier}</td>
								<td>{item.useBydate}</td>
								<td>{item.lowStock}</td>
								<td>{item.hotSale}</td>
								<td style={{ cursor: "pointer" }}>
									<img src={cartImage} width="30" alt="TraceIt Logo" onClick={() => addToChart(item)}></img>
									{/* <span className="icon is-medium" >
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM252 160c0-11 9-20 20-20h44V96c0-11 9-20 20-20s20 9 20 20v44h44c11 0 20 9 20 20s-9 20-20 20H356v44c0 11-9 20-20 20s-20-9-20-20V180H272c-11 0-20-9-20-20z" /></svg>
									</span> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<Pagination
					pages={Math.ceil(filterStockData.length / size)}
					currentPage={page}
					onChange={(page) => setPage(page)}
				/>
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
							{myOrders.slice((currentOrderPage - 1) * size, currentOrderPage * size).map((order) => (
								<tr key={order.productName + order.number}>
									<td>{order.productName}</td>
									<td>{order.number}</td>
								</tr>
							)
							)}

						</tbody>
					</table>
					<button className="button is-primary" onClick={() => setShowModal(true)}>Create</button>
					<Pagination
						pages={Math.ceil(myOrders.length / size)}
						currentPage={currentOrderPage}
						onChange={(page) => setCurrentOrderPage(page)}
					/>
				</div>

			</div>

		</div>
	);
};

export default Stock;