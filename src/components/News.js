import React, { Component } from "react";
import NewsContent from "./NewsContent";

export default class News extends Component {
  constructor(props) {
    super();
    console.log("Hello")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      country:props.country,
      category:props.category,
      pageSize:props.pageSize
    };
  }
  updatePage = async (p) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=e41cfa494c074182a536743c8570ddf9&page=${p}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: p,
    });
  };


  // Demo(){
  //   console.log("Pre Button Clicked");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${"in"}&category=${"sports"}&apiKey=e41cfa494c074182a536743c8570ddf9&page=${
  //     this.state.page - 1
  //   }&pageSize=${12}`;
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData.article);
  //   this.setState({
  //     articles: parseData.articles,
  //     page: this.state.page - 1,
  //   });
  // }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=e41cfa494c074182a536743c8570ddf9&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data= await fetch(url);
    let parseData= await data.json();
    this.setState({
      articles:parseData.articles,
      pageNumber:(Math.ceil(parseData.totalResults/this.state.pageSize))
    })
  
  }
  handleOnClickPre = async () => {
    await this.updatePage(this.state.page -1);
  };
  handleOnClickNext = async () => {
    console.log("Next Button Clicked");
    await this.updatePage(this.state.page + 1);
  };

  render() {
    return (
      <div className="container my-3">
        <h2>News-Headlines</h2>
        <div className="row">
          {this.state.articles.map((ese) => {
            let { title, description, url, urlToImage } = ese;
            return (
              <div className="col-md-4" key={url}>
                <NewsContent
                  title={title}
                  description={description}
                  url={url}
                  urlToImage={urlToImage}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between my-3 ">
          <button
            onClick={this.handleOnClickPre}
            disabled={this.state.page <= 1}
            className="btn btn-primary-"
            type="button"
          >
            Previous
          </button>
          <button
            onClick={this.handleOnClickNext}
            disabled={!(this.state.page <= this.state.pageNumber)}
            className="btn btn-primary"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
