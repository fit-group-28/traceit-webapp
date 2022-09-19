import "../scss/dashboard.scss";
import Icon from "../assets/icon.png";
import Home from "./DashboardCompontens/home";
import Sales from "./DashboardCompontens/sales";
import Orders from "./DashboardCompontens/orders";
import React, {
	Component
} from 'react'
class Dashboard extends Component {
	constructor(){
		super();
		this.state = {menu:'Home'};
	}
	preventPop(name){
		this.setState({
		    menu:name
		});
	}

	render() {
		return (
			<div class="row">
				<div class="menu">
					<div class="headTitle">DashBoard</div>
					<div className={this.state.menu === 'Home'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Home')}>
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="name">Home</div>
					</div>
					<div className={this.state.menu === 'Supply Chain'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Supply Chain')}>
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="name">Supply Chain</div>
					</div>
					<div className={this.state.menu === 'Orders'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Orders')}>
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="name">Orders</div>
					</div>
					<div className={this.state.menu === 'Sales'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Sales')}>
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="name">Sales</div>
					</div>
					<div className={this.state.menu === 'Stock'?'row list choosed':'row list'} onClick={this.preventPop.bind(this,'Stock')}>
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="name">Stock</div>
					</div>
					<div class="logout">Logout</div>
				</div>
				<div class="components">
					{this.state.menu === 'Home'&&
				        <Home></Home>
				    }
					{this.state.menu === 'Sales'&&
					    <Sales></Sales>
					}
					{this.state.menu === 'Orders'&&
					    <Orders></Orders>
					}
				</div>
			
			</div>
		);
	}
}
export default Dashboard;
