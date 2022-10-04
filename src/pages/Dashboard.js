import "../scss/dashboard.scss";
import { useState } from "react";
import Icon from "../assets/icon.png";
import Home from "./DashboardCompontens/home";
import Sales from "./DashboardCompontens/sales";
import Orders from "./DashboardCompontens/orders";
import Stock from "./DashboardCompontens/stock";
import SupplyChain from "./DashboardCompontens/supplyChain";
import Supplier from "./DashboardCompontens/supplier";
const Dashboard = ()=>{
	const [menu, setMenu] = useState('Home')
	const preventPop = (name)=>{
		setMenu(name)
	}
		return (
			<div className="row">
				<div className="menu">
					<div className="headTitle">DashBoard</div>
					<div className={menu === 'Home'?'row list choosed':'row list'} onClick={()=>preventPop('Home')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Home</div>
					</div>
					<div className={menu === 'Supply Chain'?'row list choosed':'row list'} onClick={()=>preventPop('Supply Chain')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">SupplyChain</div>
					</div>
					<div className={menu === 'Supplier'?'row list choosed':'row list'} onClick={()=>preventPop('Supplier')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Supplier</div>
					</div>
					<div className={menu === 'Orders'?'row list choosed':'row list'} onClick={()=>preventPop('Orders')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Orders</div>
					</div>
					<div className={menu === 'Sales'?'row list choosed':'row list'} onClick={()=>preventPop('Sales')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Sales</div>
					</div>
					<div className={menu === 'Stock'?'row list choosed':'row list'} onClick={()=>preventPop('Stock')}>
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="name">Product</div>
					</div>
					<div className="logout">Logout</div>
				</div>
				<div className="components">
					{menu === 'Home'&&
				        <Home setCurrentPage={preventPop}></Home>
				    }
					{menu === 'Sales'&&
					    <Sales></Sales>
					}
					{menu === 'Orders'&&
					    <Orders></Orders>
					}
					{menu === 'Supply Chain'&&
					    <SupplyChain></SupplyChain>
					}
					{menu === 'Stock'&&
					    <Stock></Stock>
					}{menu === 'Supplier'&&
					<Supplier></Supplier>
				}
				</div>
			
			</div>
		);
}
export default Dashboard;
