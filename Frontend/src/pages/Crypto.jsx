import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

function Crypto() {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://openapiv1.coinstats.app/coins', {
      headers: {
        'X-API-KEY': 'UqHkJSE3NYoYJgheI/j7T3hfTyWs46KbPnYMt806jbY='
      }
    })
    .then(res => {
      setCurrency(res.data.result);
      setLoading(false); // Update loading state when data fetching is completed
    })
    .catch(err => {
      console.log(err);
      setLoading(false); // Update loading state even if there is an error
    });
  }, []);

  return (
    <div className="App">
      <div className='flex items-center px-20 md:px-[200px] py-4'>
        <h1 className='text-2xl font-extrabold mx-10'>
          <Link to="/">Devspace</Link>
        </h1>
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded px-4 py-2 w-[700px] item-center"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 flex justify-center">Dev Crypto</h2>

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
          {loading ? (
            <tr>
              <td colSpan="7" className="px-4 py-2 text-center ">
                <Loader />
              </td>
              </tr>
            
          ) : (
            currency
              .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
              .map((val) => (
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
              ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Crypto;
