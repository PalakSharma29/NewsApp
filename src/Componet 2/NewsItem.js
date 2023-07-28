import React from 'react'

const NewsItem =(props)=> {
 

    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className='my-3'>
      <div className="card">
  <img src={!imageUrl?"https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA=":imageUrl} className="card-img-top" alt=".."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target= "_blank" className="btn  btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem

