import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

export const Newsboard = ({category}) => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c446d8dc59ef42b996012f89b95deca4`;
        const fetchData = async () => {
            const dataFetched = await fetch(url);
            const jsonData = await dataFetched.json();
            setArticles(jsonData.articles)
        }
        fetchData();
    }, [category])
  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        {articles?.length > 0 && articles.map((news, index) => {
            return <NewsItem key={index} title={news.titlr} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
    

  )
}
