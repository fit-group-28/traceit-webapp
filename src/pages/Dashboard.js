import "../scss/dashboard.scss";
import Icon from "../assets/icon.png";
import Home from "./DashboardCompontens/home";
const Dashboard = () => {
    return (
		<div class="row">
			<div class="menu">
				<div class="headTitle">DashBoard</div>
				<div class="row list choosed">
					<img class="icon" src={Icon} alt="TraceIt Logo"></img>
					<div class="name">Home</div>
				</div>
				<div class="row list">
					<img class="icon" src={Icon} alt="TraceIt Logo"></img>
					<div class="name">Supply Chain</div>
				</div>
				<div class="row list">
					<img class="icon" src={Icon} alt="TraceIt Logo"></img>
					<div class="name">Orders</div>
				</div>
				<div class="row list">
					<img class="icon" src={Icon} alt="TraceIt Logo"></img>
					<div class="name">Sales</div>
				</div>
				<div class="row list">
					<img class="icon" src={Icon} alt="TraceIt Logo"></img>
					<div class="name">Stock</div>
				</div>
				<div class="logout">Logout</div>
			</div>
			<div class="components">
				<Home></Home>
			</div>
			
		</div>
	);
};

export default Dashboard;