import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
    
   }

   const  updateNews = async() =>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=39a99dae97e9466f83bf9141541848c3&page=${page}&pageSize=${props.pageSize}`;
     let data = await fetch(url);
     setArticles(parsedData.articles);
     setTotalResults(parsedData.TotalResults);
     setLoading(false);
     setpage(parsedData.setPage);

     let parsedData = await data.json()
    //  console.log(parsedData);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
    updateNews();
  }, [])

const HandlePrevClick = async ()=>{
    setpage(page-1)
    updateNews();
}

const HandleNextClick = async ()=>{
      setpage(page+1)
      updateNews();
}

 const fetchMoreData = async() => {
   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=39a99dae97e9466f83bf9141541848c3&page=${page+1}&pageSize=${props.pageSize}`;
   setpage(page+1)
     let data = await fetch(url);
     let parsedData = await data.json()
     setArticles(articles.concat(parsedData.articles))
     setTotalResults(parsedData.totalResults)
     console.log(parsedData);
};
    
    return (
      <div className="Container my-3 mx-5">
      <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>NewsMonkey - Top Headlines on {capitalizeFirstLetter(props.category)}</h1>

 <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles !== totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="container">

      <div className="row">
      {articles.map((element)=>{
      return  <div className="col-md-4" key = {element.url}>
        <NewsItem  title = {element.title?element.title.slice(0,45):""} description = {element.description? element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt}/>
        </div>
      })}
      </div>
        </div>
      </InfiniteScroll>

     
      </div>
    )
  
}

News.defaultProps = {
  country : 'in',
  pageSize: 8,
  category: 'sports',
 }

 News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
  }

export default News
