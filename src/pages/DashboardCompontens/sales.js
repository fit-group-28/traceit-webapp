
import ReactEcharts from 'echarts-for-react' // 引入echart
import Icon from "../../assets/icon.png";
import "../../scss/sales.scss";
function Sales() {
	const reportOptions = { // echart 配置
		xAxis: {
		    type: 'category',
		    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		  },
		  yAxis: {
		    type: 'value'
		  },
		  series: [
		    {
		      data: [150, 230, 224, 218, 135, 147, 260],
		      type: 'line'
		    }
		  ]
	};

	return (
		<div>
			<div className="top">
				<div className="title">Today`s Sales</div>
				<div className="total">Sales Summary</div>
				<div className="row">
					<div className="card">
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="money">$5K</div>
						<div>Total Sales</div>
						<div className="compare">+10% from yesterday</div>
					</div>
					<div className="card">
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="money">$5K</div>
						<div>Total Sales</div>
						<div className="compare">+10% from yesterday</div>
					</div>
					<div className="card">
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="money">$5K</div>
						<div>Total Sales</div>
						<div className="compare">+10% from yesterday</div>
					</div>
					<div className="card">
						<img className="icon" src={Icon} alt="TraceIt Logo"></img>
						<div className="money">$5K</div>
						<div>Total Sales</div>
						<div className="compare">+10% from yesterday</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="topProducts">
					<div className="title">Top Products</div>
					<div className="row table">
						<div className="tableContent">#</div>
						<div className="tableContent">name</div>
						<div className="tableContent">Popularity</div>
						<div className="tableContent">Sales</div>
					</div>
					<div className="row table">
						<div className="tableContent color">01</div>
						<div className="tableContent color">Order 01</div>
						<div className="tableContent">
							<div className="value"></div>
							<div className="percent"></div>
						</div>
						
						<div className="Sales">40%</div>
					</div>
					<div className="row table">
						<div className="tableContent color">02</div>
						<div className="tableContent color">Order 01</div>
						<div className="tableContent">
							<div className="value"></div>
							<div className="percent"></div>
						</div>
						<div className="Sales">40%</div>
					</div>
					<div className="row table">
						<div className="tableContent color">03</div>
						<div className="tableContent color">Order 01</div>
						<div className="tableContent">
							<div className="value"></div>
							<div className="percent"></div>
						</div>
						<div className="Sales">40%</div>
					</div>
					<div className="row table">
						<div className="tableContent color">04</div>
						<div className="tableContent color">Order 01</div>
						<div className="tableContent">
							<div className="value"></div>
							<div className="percent"></div>
						</div>
						<div className="Sales">40%</div>
					</div>
				</div>
				<div className="echarts">
					<div className="title">Visitor Insights</div>
					<ReactEcharts option={reportOptions} style={{ height: 400 }} />
				</div>
			</div>
		</div>
	);
}

export default Sales;
