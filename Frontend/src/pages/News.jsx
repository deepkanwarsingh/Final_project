import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=952e9203b9c14cd4b4b251912c273712")
            .then((res) => {
                setNews(res.data.articles);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
            });
    }, []);

    return (
            
        <div className="container mx-auto p-10">
            <Navbar/>
            <div className='flex flex-wrap justify-center'>
                {news.map((val, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        <img src={val.urlToImage} className="w-full" alt="News" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{val.title}</div>
                            <p className="text-gray-700 text-base">{val.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href={val.url} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
