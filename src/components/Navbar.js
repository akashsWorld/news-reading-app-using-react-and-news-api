import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News-App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  New News
                </a>
                </li> */}
    `   <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business </Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment </Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General </Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health </Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science </Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports </Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology </Link></li>`
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
