import "../scss/dashboard.scss";
import Icon from "../assets/icon.png";
import Home from "./DashboardCompontens/home";
import Sales from "./DashboardCompontens/sales";
import Orders from "./DashboardCompontens/orders";
import Stock from "./DashboardCompontens/stock";
import SupplyChain from "./DashboardCompontens/supplyChain";
import Supplier from "./DashboardCompontens/supplier";

import React, {
	Component
} from 'react'
class Dashboard extends Component {
	constructor(){
		super();
		this.state = {menu:'Home'};
		this.preventPop = this.preventPop.bind(this)
	}
	preventPop(name){
		this.setState({
		    menu:name
		});
	}

	render() {
		return (
			<div className="row">
				<div className="menu">
					<div className="headTitle">DashBoard</div>
					<div className={this.state.menu === 'Home'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Home')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Home</div>
					</div>
					<div className={this.state.menu === 'Supply Chain'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Supply Chain')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">SupplyChain</div>
					</div>
					<div className={this.state.menu === 'Supplier'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Supplier')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Supplier</div>
					</div>
					<div className={this.state.menu === 'Orders'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Orders')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Orders</div>
					</div>
					<div className={this.state.menu === 'Sales'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Sales')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Sales</div>
					</div>
					<div className={this.state.menu === 'Stock'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Stock')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Product</div>
					</div>
					<div className="logout">Logout</div>
				</div>
				<div className="components">
					{this.state.menu === 'Home'&&
				        <Home setCurrentPage={this.preventPop}></Home>
				    }
					{this.state.menu === 'Sales'&&
					    <Sales></Sales>
					}
					{this.state.menu === 'Orders'&&
					    <Orders></Orders>
					}
					{this.state.menu === 'Supply Chain'&&
					    <SupplyChain></SupplyChain>
					}
					{this.state.menu === 'Stock'&&
					    <Stock></Stock>
					}{this.state.menu === 'Supplier'&&
					<Supplier></Supplier>
				}
				</div>
			
			</div>
		);
	}
}
export default Dashboard;
