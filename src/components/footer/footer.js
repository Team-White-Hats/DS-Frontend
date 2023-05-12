import React from 'react'
import '../home/home.css'

const  Footer =()=> {
  return (
    <div>
        <section class="footer">

<div class="box-container">

    <div class="box">
        <h3>about us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic eum veniam aut nisi. Libero autem nemo amet recusandae eveniet?</p>
    </div>
    <div class="box">
        <h3>branch locations</h3>
        <a href="#">india</a>
        <a href="#">USA</a>
        <a href="#">japan</a>
        <a href="#">france</a>
    </div>
    <div class="box">
        <h3>quick links</h3>
        <a href="#">home</a>
        <a href="#">category</a>
        <a href="#">product</a>
        <a href="#">deal</a>
        <a href="#">contact</a>
    </div>
    <div class="box">
        <h3>follow us</h3>
        <a href="#">facebook</a>
        <a href="#">twitter</a>
        <a href="#">instagram</a>
        <a href="#">linked</a>
    </div>

</div>

<h1 class="credit"> created by <span> SpellBinders </span> | all rights reserved! </h1>

</section>

    </div>
  )
}

export default Footer;