import React, { Fragment } from 'react'
import logo from '../assets/site logo.jpeg'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Fragment>
            <nav>
              <Link to={'/'}>
                <img src={logo} alt='' />
              </Link>
                
                <ul>
                  <li>Home</li>
                  <li>Listing</li>
                  <li>Contact</li>
                  <li>About</li>
                  <li>All</li>
                </ul>
            </nav>
    </Fragment>
  )
}

export default Header