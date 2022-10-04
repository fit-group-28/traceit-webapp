import "../scss/dashboard.scss";
import { useState } from "react";
import MenuBar from "../components/MenuBar"
import Navbar from "../components/NavBar"
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
			<>
			<Navbar />
			<div className="row">
				<MenuBar preventPop={preventPop} currentOption={menu}/>
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
			</>
		);
}
export default Dashboard;
