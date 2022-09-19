import "../../scss/orders.scss";
import SeacrhIcon from "../../assets/background.png";
const Sales = () => {
    return <div>
		<div class="orderList">
			<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
			<input class="input" placeholder="Search" />
			
			<div class="row table">
				<div class="tableContent">Product</div>
				<div class="tableContent">Qnt</div>
				<div class="tableContent">Price</div>
			</div>
			<div class="row table">
				<div class="tableContent color">Product 1</div>
				<div class="tableContent color">1</div>
				<div class="tableContent color">$12</div>
			</div>
			<div class="row table">
				<div class="tableContent color">Product 2</div>
				<div class="tableContent color">2</div>
				<div class="tableContent color">$12</div>
			</div>
			<div class="row table">
				<div class="tableContent color">Product 3</div>
				<div class="tableContent color">3</div>
				<div class="tableContent color">$12</div>
			</div>
			<div class="row table">
				<div class="tableContent color">Product 4</div>
				<div class="tableContent color">4</div>
				<div class="tableContent color">$12</div>
			</div>
			<div class="totalPrice">Total：<span>$48</span></div>
		</div>
	</div>;
};

export default Sales;