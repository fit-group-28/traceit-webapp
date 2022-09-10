import "../../scss/home.scss";
import Icon from "../../assets/icon.png";
import SeacrhIcon from "../../assets/background.png";
const Home = () => {
    return <div>
		<div class="head row">
			<img class="icon" src={Icon} alt="TraceIt Logo"></img>
			<img class="searchIcon" src={SeacrhIcon} alt="TraceIt Logo"></img>
			<input class="input" placeholder="Search" />
			<div class="headMenu">Dashboard</div>
			<div class="headMenu">Report</div>
			<div class="headMenu">Help</div>
			<img class="icon" src={Icon} alt="TraceIt Logo"></img>
			<div class="uesrInfo">
				<div>Group28</div>
				<div class="role">Admin</div>
			</div>
			<img class="icon" src={Icon} alt="TraceIt Logo"></img>
		</div>
		<div class="row">
			<div class="topLeft">
				<div class="row">
					<div>
						<div class="name">At a Glance</div>
						<div class="histogram">
							<div class="y-axis">
								<div class="scale">40</div>
								<div class="scale">30</div>
								<div class="scale">20</div>
								<div class="scale">10</div>
								<div class="scale">0</div>
							</div>
							<div class="x-axis row">
								<div class="scale">Social Media 1</div>
								<div class="scale">Social Media 2</div>
								<div class="scale">Social Media 3</div>
								<div class="scale">Social Media 4</div>
								<div class="scale">Social Media 5</div>
							</div>
							<div class="dataList row">
								<div class="data">
									<div class="bottom"></div>
									<div class="top"></div>
								</div>
								<div class="data">
									<div class="bottom"></div>
									<div class="top"></div>
								</div>
								<div class="data">
									<div class="bottom"></div>
									<div class="top"></div>
								</div>
								<div class="data">
									<div class="bottom"></div>
									<div class="top"></div>
								</div>
								<div class="data">
									<div class="bottom"></div>
									<div class="top"></div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="totalData">
							<div class="txt">Total Sales</div>
							<div class="money">25,000</div>
						</div>
						<div class="totalData">
							<div class="txt">Total Refund</div>
							<div class="money">50</div>
						</div>
						<div class="totalData">
							<div class="txt">Total Income</div>
							<div class="money">75,000</div>
						</div>
					</div>
				</div>
			</div>
			<div class="topMid">
				<div class="choosed module">Yearly</div>
				<div class="module">Monthly</div>
				<div class="module">Daily</div>
			</div>
			<div class="topRight">
				<div class="name">Yearly</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="order">Order 01</div>
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="order">Order 02</div>
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="order">Order 03</div>
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="order">Order 04</div>
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
			</div>
		</div>
		<div class="row bottom">
			<div class="width">
				<div class="midLeft ">
					<div class="row">
						<div class="totalTxt">Total Sales</div>
						<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
						<div class="money">1,632,400</div>
					</div>
					<div class="row">
						<div class="totalTxt">Total Wasted</div>
						<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
						<div class="money">801,366</div>
					</div>
					<div class="row">
						<div class="totalTxt">Deleted Item</div>
						<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
						<div class="money">23,884</div>
					</div>
				</div>
				<div class="bottomLeft row">
					<div class="name">Incoming Orders</div>
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
			</div>
			<div class="bottomMid">
				<div class="name">Suppliers</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="txt">tom</div>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="txt">tom</div>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="txt">tom</div>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="txt">tom</div>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="txt">tom</div>
				</div>
				<div class="row">
					<img class="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div class="txt">tom</div>
				</div>
			</div>
			<div class="bottomRight">
				<div class="name">Low InVentory</div>
				<div class="table">
					<div class="row">
						<div class="tableTitle">Item</div>
						<div class="tableTitle">Remaining</div>
					</div>
					<div class="row">
						<div class="tableLeft">Calola Oil</div>
						<div class="tableRight">1L</div>
					</div>
					<div class="row">
						<div class="tableLeft">Cedric</div>
						<div class="tableRight">0</div>
					</div>
					<div class="row">
						<div class="tableLeft">Tomato</div>
						<div class="tableRight">0</div>
					</div>
					<div class="row">
						<div class="tableLeft">potato</div>
						<div class="tableRight">0</div>
					</div>
					<div class="row">
						<div class="tableLeft"></div>
						<div class="tableRight"></div>
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default Home;