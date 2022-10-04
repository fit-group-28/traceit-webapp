import "../../scss/orders.scss";
import SeacrhIcon from "../../assets/background.png";
const Sales = () => {
    return <div>
		<div className="orderList">
			<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
			<input className="input" placeholder="Search" />
			
			<div className="row table">
				<div className="tableContent">Product</div>
				<div className="tableContent">Qnt</div>
				<div className="tableContent">Price</div>
			</div>
			<div className="row table">
				<div className="tableContent color">Product 1</div>
				<div className="tableContent color">1</div>
				<div className="tableContent color">$12</div>
			</div>
			<div className="row table">
				<div className="tableContent color">Product 2</div>
				<div className="tableContent color">2</div>
				<div className="tableContent color">$12</div>
			</div>
			<div className="row table">
				<div className="tableContent color">Product 3</div>
				<div className="tableContent color">3</div>
				<div className="tableContent color">$12</div>
			</div>
			<div className="row table">
				<div className="tableContent color">Product 4</div>
				<div className="tableContent color">4</div>
				<div className="tableContent color">$12</div>
			</div>
			<div className="totalPrice">Total：<span>$48</span></div>
		</div>
	</div>;
};

export default Sales;