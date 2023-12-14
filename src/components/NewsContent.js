import React, { Component } from 'react'

export default class NewsContent extends Component {
   
  render() {
    let {title,description,url,urlToImage}=this.props
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={urlToImage} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <a rel="noreferrer" href={url} className="card-link" target="_blank">Read More</a>
        </div>
      </div>
    )
  }
}
