import "../../scss/stock.scss";
import { useState } from "react";
import SeacrhIcon from "../../assets/background.png";
import Pagination from "bulma-pagination-react";
const Stock = () => {
  const stockData = [
    {
      productName: "Product 1",
      qnt: 1,
      price: "$12",
      supplier: "supplier1",
      useBydate: "yes",
      lowStock: "yes",
      hotSale: "yes",
    },
	{
		productName: "Product 2",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },
	  {
		productName: "Product 3",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 4",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 5",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 6",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 7",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 8",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 9",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 10",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 11",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 12",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 13",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 14",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 15",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 16",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 17",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 18",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 19",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 20",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 21",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 22",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 23",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 24",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },{
		productName: "Product 25",
		qnt: 1,
		price: "$12",
		supplier: "supplier1",
		useBydate: "yes",
		lowStock: "yes",
		hotSale: "yes",
	  },
  ];
  const [searchWord, setSearchWord] = useState();
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [filterStockData, setFilterStockData] = useState(stockData);
  const filterStock = (e) => {
    console.log(e.target.value);
    if (!e.target.value || e.target.value === "") {
      setFilterStockData(stockData);
    } else {
      const fil = e.target.value.toLowerCase();
      const fd = stockData.filter((item) => {
        var productName = false;
        var qnt = false;
        var price = false;
        var supplier = false;
        var useBydate = false;
        var lowStock = false;
        var hotSale = false;

        productName = item.productName.toLowerCase().indexOf(fil) >= 0;
        price = item.price.toLowerCase().indexOf(fil) >= 0;
        supplier = item.supplier.toLowerCase().indexOf(fil) >= 0;
        useBydate = item.useBydate.toLowerCase().indexOf(fil) >= 0;
        lowStock = item.lowStock.toLowerCase().indexOf(fil) >= 0;
        hotSale = item.hotSale.toLowerCase().indexOf(fil) >= 0;
        return (
          productName ||
          qnt ||
          price ||
          supplier ||
          useBydate ||
          lowStock ||
          hotSale
        );
      });
      setFilterStockData(fd);
    }
  };
  return (
    <div>
      <div className="orderList box">
        <img className="icon" src={SeacrhIcon} alt="TraceIt Logo"></img>
        <input
          value={searchWord}
          onChange={(e) => filterStock(e)}
          className="input is-primary"
          type="text"
          placeholder="Search By Product"
        />
        <div className="select is-primary">
          <select>
            <option>all</option>
            <option>normal</option>
            <option>Use by date</option>
          </select>
        </div>
        <div className="select is-primary">
          <select>
            <option>all</option>
            <option>normal</option>
            <option>Low stock</option>
          </select>
        </div>
        <div className="select is-primary">
          <select>
            <option>all</option>
            <option>normal</option>
            <option>Hot sale</option>
          </select>
        </div>
        <div className="title">Product List</div>
        <table className="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qnt</th>
              <th>Price</th>
              <th>supplier</th>
              <th>Use by date</th>
              <th>Low stock</th>
              <th>Hot sale</th>
            </tr>
          </thead>
          <tbody>
            {filterStockData.slice((page-1)*size, page*size).map((item) => (
              <tr>
                <td>{item.productName}</td>
                <td>{item.qnt}</td>
                <td>{item.price}</td>
                <td>{item.supplier}</td>
                <td>{item.useBydate}</td>
                <td>{item.lowStock}</td>
                <td>{item.hotSale}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          pages={Math.ceil(filterStockData.length/size)}
          currentPage={page}
          onChange={(page)=>setPage(page)}
        />
      </div>
    </div>
  );
};

export default Stock;
