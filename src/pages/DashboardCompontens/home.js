import "../../scss/home.scss";
import { useState } from "react";
import Icon from "../../assets/icon.png";
import SeacrhIcon from "../../assets/background.png";
import ReactEcharts from "echarts-for-react"; // 引入echart
function Home(props) {
  const GlanceOptions = {
    // echart 配置
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  const [currentRange, setCurrentRange] = useState("Yearly");
  const setCurrentSelect = (selection)=>{
    setCurrentRange(selection)
  }
  return (
      <div className="container">
        <div className="row">
          <div className="topLeft">
            <div className="row">
              <div style={{width: "70%"}}>
                <div className="name" >At a Glance</div>
                <div className="histogram">
                  <ReactEcharts
                    option={GlanceOptions}
                    style={{ height: 300 }}
                  />
                </div>
              </div>
              <div>
                <div className="totalData">
                  <div className=" txt">Total Sales</div>
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
            <div className={currentRange === "Yearly" ? "choosed module" : "module"} onClick={()=>setCurrentSelect("Yearly")}>Yearly</div>
            <div className={currentRange === "Monthly" ? "choosed module" : "module"} onClick={()=>setCurrentSelect("Monthly")}>Monthly</div>
            <div className={currentRange === "Daily" ? "choosed module" : "module"} onClick={()=>setCurrentSelect("Daily")}>Daily</div>
          </div>
          <div className="topRight" style={{cursor: "pointer"}}  onClick={()=>props.setCurrentPage("Orders")} >
            <div className="name">{currentRange}</div>
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
              <div className="row" style={{cursor: "pointer"}} onClick={()=>props.setCurrentPage("Sales")}>
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
            <div className="bottomLeft row" style={{cursor: "pointer"}}  onClick={()=>props.setCurrentPage("Orders")}>
              <div className="name">Incoming Orders</div>
              <img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
              <img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
              <img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
            </div>
          </div>
          <div data-test="supply-chain-card" className="bottomMid" style={{cursor: "pointer"}}  onClick={()=>props.setCurrentPage("Supply Chain")}>
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
      </div>
  );
}

export default Home;
