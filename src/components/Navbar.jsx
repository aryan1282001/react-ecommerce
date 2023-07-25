import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (<>
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">E-commerce</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/">Shop<span class="sr-only">(current)</span></Link>
        </li>
        
      </ul>

      <div class="nav-item">
          <Link class="nav-link" to="/contact">Contact Us</Link>
        </div>
      <div class="nav-item">
          <Link class="nav-link" to="/cart">Cart</Link>
        </div>


    
    </div>
  </nav>
  </>
  )
}

export default Navbar
