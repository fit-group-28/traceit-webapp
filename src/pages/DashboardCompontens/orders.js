import "../../scss/orders.scss";
import SeacrhIcon from "../../assets/background.png";
const Sales = () => {
    return <div>
		<div className="orderList box">
			<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
			<input className="input is-primary" type="text" placeholder="Search By Product" />
			<div className="title">Stock List</div>
			<table className="table is-bordered is-striped is-hoverable is-fullwidth">
			    <thead>
			        <tr>
						<th>Product</th>
						<th>Qnt</th>
						<th>Price</th>
					</tr>
			    </thead>
				<tbody>
					<tr>
						<td>Product 1</td>
						<td>1</td>
						<td>$12</td>
					</tr>
					<tr>
						<td>Product 2</td>
						<td>2</td>
						<td>$12</td>
					</tr>
					<tr>
						<td>Product 3</td>
						<td>3</td>
						<td>$12</td>
					</tr>
					<tr>
						<td>Product 4</td>
						<td>4</td>
						<td>$12</td>
					</tr>
					<tr>
						<td>Product 5</td>
						<td>5</td>
						<td>$12</td>
					</tr>
				</tbody>
			</table>
			
			<div className="totalPrice">Total：<span>$48</span></div>
		</div>
	</div>;
};

export default Sales;
