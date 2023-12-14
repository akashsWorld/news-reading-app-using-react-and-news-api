import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  // async componentDidMount(){
  //   let url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e41cfa494c074182a536743c8570ddf9"
  //   let data= await fetch(url);
  //   let parsedata=await data.json()
  //   this.setState({articles: parsedata.articles})
  // }

  constructor() {
    super();
    this.state = {
      country: "in",
      category: "sports",
      pageSize: 12,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  country={this.state.country}
                  category="business"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country={this.state.country}
                  category="entertainment"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  country={this.state.country}
                  category="technology"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  country={this.state.country}
                  category="sports"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general_main"
                  country={this.state.country}
                  category="general"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  country={this.state.country}
                  category="science"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  country={this.state.country}
                  category="health"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  country={this.state.country}
                  category="general"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
            <Route
              exactpath="/"
              element={
                <News
                  key="genera"
                  country={this.state.country}
                  category="general"
                  pageSize={this.state.pageSize}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
