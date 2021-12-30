import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'
import NavHome from '../components/navhome'

const name = 'Tim Kao'
export const siteTitle = 'Tim Kao\'s Portfolio'

export default function Navbar({home}) {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light d-lg-flex align-items-center">
      <div className="container-xl">
        <NavHome {...home}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item h-100">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item h-100">
              <Link href="/articles">
                <a className="nav-link">Articles</a>
              </Link>
            </li>
            <li className="nav-item h-100">
              <Link href="/write">
                <a className="nav-link">Write</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap h-100">
              <Button className="nav-link">
                  Signup
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}