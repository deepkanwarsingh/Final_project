import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Crypto() {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios.get('https://openapiv1.coinstats.app/coins', {
      headers: {
        'X-API-KEY': 'UqHkJSE3NYoYJgheI/j7T3hfTyWs46KbPnYMt806jbY='
      }
    })
    .then(res => setCurrency(res.data.result))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
    
      <div className="flex justify-center mb-4">
      <h2 className="text-3xl font-bold mb-4 flex-flexbox">Crypto</h2>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded px-4 py-2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Market Value</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Supply</th>
            <th className="px-4 py-2">Volume</th>
          </tr>
        </thead>
        <tbody>
          {currency.filter((val) => val.name.toLowerCase().includes(search.toLowerCase())).map((val) => (
            <tr key={val.id}>
              <td className="px-4 py-2">{val.rank}</td>
              <td className="px-4 py-2 flex items-center">
                <a href={val.websiteUrl} className="mr-2">
                  <img src={val.icon} alt="" className="w-6 h-6" />
                </a>
                <p>{val.name}</p>
              </td>
              <td className="px-4 py-2">{val.symbol}</td>
              <td className="px-4 py-2">${val.marketCap}</td>
              <td className="px-4 py-2">$ {val.price.toFixed(2)}</td>
              <td className="px-4 py-2">{val.availableSupply}</td>
              <td className="px-4 py-2">{val.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crypto;
