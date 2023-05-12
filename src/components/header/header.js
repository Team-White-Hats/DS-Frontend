import React from 'react'
import './header.css'
import { Link } from "react-router-dom";


const Header =()=> {



  return (
    <div>


<header>

    <div class="header-1">

        <div class="share">
            <span> follow us : </span>
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>

        <div class="call">
            <span> call us : </span>
            <a href="#">+123-456-7890</a>
        </div>

    </div>

    <div class="header-2">

        <a href="#" class="logo"> <i class="fas fa-seedling"></i> LOGO </a>

        <form action="" class="search-bar-container">
            <input type="search" id="search-bar" placeholder="search here..."/>
            <label for="search-bar" class="fas fa-search"></label>
        </form>

    </div>

    <div class="header-3">

        <div id="menu-bar" class="fas fa-bars"></div>

        <nav class="navbar">
            <a href="/">home</a>
            <a href="#category">category</a>
            <a href="#product">product</a>
            <a href="#deal">deal</a>
            <a href="#contact">contact</a>
        </nav>

        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-user-circle"></a>
            
        </div>
         <div>
            <nav>
         <ul>
       
        <li><Link to="client/login">Login</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>

         </div>
    </div>

</header>


    </div>
  )
}

export default Header;
