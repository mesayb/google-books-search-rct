import React from "react";

function Nav(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn-primary" value="false" {...props} >Search</button>
        </li>
        <li className="nav-item">
          <button className="btn-danger" value='true' {...props}>Saved</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
