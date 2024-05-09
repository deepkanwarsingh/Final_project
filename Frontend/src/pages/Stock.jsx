import React, { useState, useEffect } from 'react';

const StockMarketPage = () => {
  const [stock, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from an API
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=ZTUQ7VJ9BOLPT29V')
      .then(response => response.json())
      .then(data => setStocks(data))
      .then(console.log(res))
      .catch(error => console.error('Error fetching stock data:', error));
  }, []);

  return (
    <div>
      <h1>Stock Market</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.companyName}</td>
              <td>{stock.price}</td>
              <td>{stock.change}</td>
              <td>{stock.percentChange}</td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default StockMarketPage;
