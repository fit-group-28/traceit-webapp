import "../../scss/home.scss";
import Icon from "../../assets/icon.png";
import SeacrhIcon from "../../assets/background.png";
const Home = () => {
    return <div>
		<div className="head row">
			<img className="icon" src={Icon} alt="TraceIt Logo"></img>
			<img className="searchIcon" src={SeacrhIcon} alt="TraceIt Logo"></img>
			<input className="input" placeholder="Search" />
			<div className="headMenu">Dashboard</div>
			<div className="headMenu">Report</div>
			<div className="headMenu">Help</div>
			<img className="icon" src={Icon} alt="TraceIt Logo"></img>
			<div className="uesrInfo">
				<div>Group28</div>
				<div className="role">Admin</div>
			</div>
			<img className="icon" src={Icon} alt="TraceIt Logo"></img>
		</div>
		<div className="row">
			<div className="topLeft">
				<div className="row">
					<div>
						<div className="name">At a Glance</div>
						<div className="histogram">
							<div className="y-axis">
								<div className="scale">40</div>
								<div className="scale">30</div>
								<div className="scale">20</div>
								<div className="scale">10</div>
								<div className="scale">0</div>
							</div>
							<div className="x-axis row">
								<div className="scale">Social Media 1</div>
								<div className="scale">Social Media 2</div>
								<div className="scale">Social Media 3</div>
								<div className="scale">Social Media 4</div>
								<div className="scale">Social Media 5</div>
							</div>
							<div className="dataList row">
								<div className="data">
									<div className="bottom"></div>
									<div className="top"></div>
								</div>
								<div className="data">
									<div className="bottom"></div>
									<div className="top"></div>
								</div>
								<div className="data">
									<div className="bottom"></div>
									<div className="top"></div>
								</div>
								<div className="data">
									<div className="bottom"></div>
									<div className="top"></div>
								</div>
								<div className="data">
									<div className="bottom"></div>
									<div className="top"></div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="totalData">
							<div className="txt">Total Sales</div>
							<div className="money">25,000</div>
						</div>
						<div className="totalData">
							<div className="txt">Total Refund</div>
							<div className="money">50</div>
						</div>
						<div className="totalData">
							<div className="txt">Total Income</div>
							<div className="money">75,000</div>
						</div>
					</div>
				</div>
			</div>
			<div className="topMid">
				<div className="choosed module">Yearly</div>
				<div className="module">Monthly</div>
				<div className="module">Daily</div>
			</div>
			<div className="topRight">
				<div className="name">Yearly</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="order">Order 01</div>
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="order">Order 02</div>
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="order">Order 03</div>
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="order">Order 04</div>
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
			</div>
		</div>
		<div className="row bottom">
			<div className="width">
				<div className="midLeft ">
					<div className="row">
						<div className="totalTxt">Total Sales</div>
						<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
						<div className="money">1,632,400</div>
					</div>
					<div className="row">
						<div className="totalTxt">Total Wasted</div>
						<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
						<div className="money">801,366</div>
					</div>
					<div className="row">
						<div className="totalTxt">Deleted Item</div>
						<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
						<div className="money">23,884</div>
					</div>
				</div>
				<div className="bottomLeft row">
					<div className="name">Incoming Orders</div>
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
				</div>
			</div>
			<div className="bottomMid">
				<div className="name">Suppliers</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="txt">tom</div>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="txt">tom</div>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="txt">tom</div>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="txt">tom</div>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="txt">tom</div>
				</div>
				<div className="row">
					<img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
					<div className="txt">tom</div>
				</div>
			</div>
			<div className="bottomRight">
				<div className="name">Low InVentory</div>
				<div className="table">
					<div className="row">
						<div className="tableTitle">Item</div>
						<div className="tableTitle">Remaining</div>
					</div>
					<div className="row">
						<div className="tableLeft">Calola Oil</div>
						<div className="tableRight">1L</div>
					</div>
					<div className="row">
						<div className="tableLeft">Cedric</div>
						<div className="tableRight">0</div>
					</div>
					<div className="row">
						<div className="tableLeft">Tomato</div>
						<div className="tableRight">0</div>
					</div>
					<div className="row">
						<div className="tableLeft">potato</div>
						<div className="tableRight">0</div>
					</div>
					<div className="row">
						<div className="tableLeft"></div>
						<div className="tableRight"></div>
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default Home;