import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.scss';


const NavBar = () => {

  const [onclick, setOnClick] = useState("nav-link");

  function changeColor() {
    setOnClick("nav-link active")
  }


  return (
    <ul className="nav nav-tabs ml-1 bg-light">
      <h3>Trampa Facil</h3>

      <div className="nav nav-tabs ml-4">
        <li className="nav-item">
          <Link to="/">
            <a className="nav-link"
              aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/trabalhos">
            <a className="nav-link" href="#">Trabalhos</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/perfil">
            <a className="nav-link" href="#">Perfil</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/blog">
          <a className="nav-link" href="#">Nosso blog</a>
          </Link>

        </li>
      </div>

    </ul>
  )
}


export default NavBar;