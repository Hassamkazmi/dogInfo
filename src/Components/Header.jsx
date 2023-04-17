import React, { Fragment } from 'react'
import logo from '../assets/cosmetics-jar.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Fragment>
            <nav>
              <Link to={'/'}>
              <h2 className='logo'>Logo</h2>
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