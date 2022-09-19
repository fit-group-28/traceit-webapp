
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
			<div class="top">
				<div class="title">Today`s Sales</div>
				<div class="total">Sales Summary</div>
				<div class="row">
					<div class="card">
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="money">$5K</div>
						<div>Total Sales</div>
						<div class="compare">+10% from yesterday</div>
					</div>
					<div class="card">
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="money">$5K</div>
						<div>Total Sales</div>
						<div class="compare">+10% from yesterday</div>
					</div>
					<div class="card">
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="money">$5K</div>
						<div>Total Sales</div>
						<div class="compare">+10% from yesterday</div>
					</div>
					<div class="card">
						<img class="icon" src={Icon} alt="TraceIt Logo"></img>
						<div class="money">$5K</div>
						<div>Total Sales</div>
						<div class="compare">+10% from yesterday</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="topProducts">
					<div class="title">Top Products</div>
					<div class="row table">
						<div class="tableContent">#</div>
						<div class="tableContent">name</div>
						<div class="tableContent">Popularity</div>
						<div class="tableContent">Sales</div>
					</div>
					<div class="row table">
						<div class="tableContent color">01</div>
						<div class="tableContent color">Order 01</div>
						<div class="tableContent">
							<div class="value"></div>
							<div class="percent"></div>
						</div>
						
						<div class="Sales">40%</div>
					</div>
					<div class="row table">
						<div class="tableContent color">02</div>
						<div class="tableContent color">Order 01</div>
						<div class="tableContent">
							<div class="value"></div>
							<div class="percent"></div>
						</div>
						<div class="Sales">40%</div>
					</div>
					<div class="row table">
						<div class="tableContent color">03</div>
						<div class="tableContent color">Order 01</div>
						<div class="tableContent">
							<div class="value"></div>
							<div class="percent"></div>
						</div>
						<div class="Sales">40%</div>
					</div>
					<div class="row table">
						<div class="tableContent color">04</div>
						<div class="tableContent color">Order 01</div>
						<div class="tableContent">
							<div class="value"></div>
							<div class="percent"></div>
						</div>
						<div class="Sales">40%</div>
					</div>
				</div>
				<div class="echarts">
					<div class="title">Visitor Insights</div>
					<ReactEcharts option={reportOptions} style={{ height: 400 }} />
				</div>
			</div>
		</div>
	);
}

export default Sales;
