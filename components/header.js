import React from "react";
import Link from "next/link";
import NavHome from "./navhome";
import { Nav } from "react-bootstrap"

// const navLinks = [
//   { name: "Home", 
//    path: "/" 
//   },
//   {
//     name: "Experiences",
//     path: "/experiences",
//   },
//   {
//     name: "Projects",
//     path: "/projects",
//   },
//   {
//     name: "Contact Me",
//     path: "/contact",
//   },
// ];

export default function Header() {
  return (
    <header>
      <Nav className="navbar navbar-expand-lg navbar-dark" >
        <div className="navbar-brand">
          <NavHome />
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <Link href='/' className="navbar-item">
              <li className="border-end border-light">
                <a className="nav-link">Home</a>
              </li>
            </Link>
            <Link href='/experiences' className="navbar-item">
              <li className="border-end border-light">
                <a className="nav-link">Experiences</a>
              </li>
            </Link>
            <Link href='/projects' className="navbar-item">
              <li className="border-end border-light">
                <a className="nav-link">Projects</a>
              </li>
            </Link>
            <Link href='/contact' className="navbar-item">
              <li>
                <a className="nav-link">Contact Me</a>
              </li>
            </Link>
          </ul>
        </div>
      </Nav>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> */}
    </header>
  );
}