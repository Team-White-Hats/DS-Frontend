import React from "react";
import "./home.css";
import herb1 from "../../assets/imagess/herb1.jpg";
import herb2 from "../../assets/imagess/herb3.jpg";
import herb5 from "../../assets/imagess/herb6.jpg";
import herb4 from "../../assets/imagess/herb4.jpg";
import baby from "../../assets/categoryImages/baby.jpg";
import bath from "../../assets/categoryImages/bath.jpg";
import beauty from "../../assets/categoryImages/beauty.jpg";
import r1 from "../../assets/imagess/r1.jfif";
import r2 from "../../assets/imagess/r2.jpg";
import r3 from "../../assets/imagess/r3.jfif";
import supplement from "../../assets/categoryImages/supplement.jfif";
import { Swiper, SwiperSlide } from "swiper/react";

const Home2 = () => {
	let countDate = new Date("june 1, 2023 00:00:00").getTime();
	let gap;

	function countDown() {
		let now = new Date().getTime();

		gap = countDate - now;

		let second = 1000;
		let minute = second * 60;
		let hour = minute * 60;
		let day = hour * 24;

		let d = Math.floor(gap / day);
		let h = Math.floor((gap % day) / hour);
		let m = Math.floor((gap % hour) / minute);
		let s = Math.floor((gap % minute) / second);

		document.getElementById("day").innerText = d;
		document.getElementById("hour").innerText = h;
		document.getElementById("minute").innerText = m;
		document.getElementById("second").innerText = s;
	}

	setInterval(function () {
		countDown();
	}, 1000);

	return (
		<div>
			<div class="cardsliderframe">
				<div class="slider">
					<div class="slider-images">
						<div class="slider-image">
							<img src={herb1} alt="Image 1" />
						</div>
						<div class="slider-image">
							<img src={herb2} alt="Image 2" />
						</div>
						<div class="slider-image">
							<img src={herb4} alt="Image 3" />
						</div>
						<div class="slider-image">
							<img src={herb5} alt="Image 4" />
						</div>
					</div>
				</div>
			</div>

			<section class="banner-container">
				<div class="banner">
					<img src={herb1} alt="image1" />
					<div class="content">
						<span>new arrivals</span>
						<h3>Mixed Herbs</h3>
						<a href="#" class="btn">
							shop now
						</a>
					</div>
				</div>
				<div class="banner">
					<img src={herb2} alt="" />
					<div class="content">
						<span>new arrivals</span>
						<h3>
							Tea & Jasmine <br /> conditioner
						</h3>
						<a href="#" class="btn">
							shop now
						</a>
					</div>
				</div>
			</section>

			<section class="category" id="category">
				<h1 class="heading"> shop by category </h1>

				<div class="box-container">
					<div class="box">
						<img src={supplement} alt="" />
						<div class="content">
							<h3>Supplements</h3>
							<a href="/client" class="btn">
								shop now
							</a>
						</div>
					</div>
					<div class="box">
						<img src={beauty} alt="" />
						<div class="content">
							<h3>Beauty</h3>
							<a href="#" class="btn">
								shop now
							</a>
						</div>
					</div>
					<div class="box">
						<img src={baby} alt="" />
						<div class="content">
							<h3>Baby</h3>
							<a href="#" class="btn">
								shop now
							</a>
						</div>
					</div>
					<div class="box">
						<img src={bath} alt="" />
						<div class="content">
							<h3>Bath</h3>
							<a href="#" class="btn">
								shop now
							</a>
						</div>
					</div>
				</div>
			</section>

			<section class="product" id="product">
				<h1 class="heading"> new products </h1>

				<div class="box-container">
					<div class="box">
						<span class="discount">-10%</span>
						<div class="icons">
							<a href="#" class="fas fa-heart"></a>
							<a href="#" class="fas fa-share"></a>
							<a href="#" class="fas fa-eye"></a>
						</div>
						<img src={herb4} alt="" />
						<h3>latest Herbal Shampoo</h3>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<div class="quantity">
							<span> quantity : </span>
							<input
								type="number"
								min="1"
								max="100"
								value="1"
							/>
						</div>
						<div class="price">
							$14.70 <span>$18.20</span>
						</div>
						<a href="#" class="btn">
							add to cart
						</a>
					</div>

					<div class="box">
						<span class="discount">-25%</span>
						<div class="icons">
							<a href="#" class="fas fa-heart"></a>
							<a href="#" class="fas fa-share"></a>
							<a href="#" class="fas fa-eye"></a>
						</div>
						<img src={r1} alt="" />
						<h3>latest Babe shampoo</h3>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<div class="quantity">
							<span> quantity : </span>
							<input
								type="number"
								min="1"
								max="100"
								value="1"
							/>
						</div>
						<div class="price">
							$14.70 <span>$18.20</span>
						</div>
						<a href="#" class="btn">
							add to cart
						</a>
					</div>

					<div class="box">
						<span class="discount">-7%</span>
						<div class="icons">
							<a href="#" class="fas fa-heart"></a>
							<a href="#" class="fas fa-share"></a>
							<a href="#" class="fas fa-eye"></a>
						</div>
						<img src={r2} alt="" />
						<h3>latest Herbal soups</h3>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<div class="quantity">
							<span> quantity : </span>
							<input
								type="number"
								min="1"
								max="100"
								value="1"
							/>
						</div>
						<div class="price">
							$14.70 <span>$18.20</span>
						</div>
						<a href="#" class="btn">
							add to cart
						</a>
					</div>

					<div class="box">
						<span class="discount">-4%</span>
						<div class="icons">
							<a href="#" class="fas fa-heart"></a>
							<a href="#" class="fas fa-share"></a>
							<a href="#" class="fas fa-eye"></a>
						</div>
						<img src={r3} alt="" />
						<h3>latest plants</h3>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<div class="quantity">
							<span> quantity : </span>
							<input
								type="number"
								min="1"
								max="100"
								value="1"
							/>
						</div>
						<div class="price">
							$14.70 <span>$18.20</span>
						</div>
						<a href="#" class="btn">
							add to cart
						</a>
					</div>

					<div class="box">
						<span class="discount">-13%</span>
						<div class="icons">
							<a href="#" class="fas fa-heart"></a>
							<a href="#" class="fas fa-share"></a>
							<a href="#" class="fas fa-eye"></a>
						</div>
						<img src={herb5} alt="" />
						<h3>latest plants</h3>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<div class="quantity">
							<span> quantity : </span>
							<input
								type="number"
								min="1"
								max="100"
								value="1"
							/>
						</div>
						<div class="price">
							$14.70 <span>$18.20</span>
						</div>
						<a href="#" class="btn">
							add to cart
						</a>
					</div>

					<div class="box">
						<span class="discount">-20%</span>
						<div class="icons">
							<a href="#" class="fas fa-heart"></a>
							<a href="#" class="fas fa-share"></a>
							<a href="#" class="fas fa-eye"></a>
						</div>
						<img src={r1} alt="" />
						<h3>latest plants</h3>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<div class="quantity">
							<span> quantity : </span>
							<input
								type="number"
								min="1"
								max="100"
								value="1"
							/>
						</div>
						<div class="price">
							$14.70 <span>$18.20</span>
						</div>
						<a href="#" class="btn">
							add to cart
						</a>
					</div>
				</div>
			</section>

			<section class="icons-container">
				<div class="icon">
					<img src="images/icon1.png" alt="" />
					<div class="content">
						<h3>free shipping</h3>
						<p>Free shipping on order</p>
					</div>
				</div>
				<div class="icon">
					<img src="images/icon2.png" alt="" />
					<div class="content">
						<h3>100% Money Back</h3>
						<p>You’ve 30 days to Return</p>
					</div>
				</div>
				<div class="icon">
					<img src="images/icon3.png" alt="" />
					<div class="content">
						<h3>Payment Secure</h3>
						<p>100% secure payment</p>
					</div>
				</div>
				<div class="icon">
					<img src="images/icon4.png" alt="" />
					<div class="content">
						<h3>Support 24/7</h3>
						<p>Contact us anytime</p>
					</div>
				</div>
			</section>

			<section class="deal" id="deal">
				<h1 class="heading"> deal of the day </h1>

				<div class="row">
					<div class="content">
						<h3 class="title">don't miss the deal</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Recusandae rem eligendi
							repudiandae pariatur. Aut, esse molestias
							laborum sunt reprehenderit repellat officiis
							aspernatur consequatur nemo! Veritatis, ex
							architecto! Eligendi, iste nulla.
						</p>
						<div class="count-down">
							<div class="box">
								<h3 id="day">00</h3>
								<span>day</span>
							</div>
							<div class="box">
								<h3 id="hour">00</h3>
								<span>hour</span>
							</div>
							<div class="box">
								<h3 id="minute">00</h3>
								<span>minute</span>
							</div>
							<div class="box">
								<h3 id="second">00</h3>
								<span>second</span>
							</div>
						</div>
						<a href="#" class="btn">
							check out deal
						</a>
					</div>

					<div class="image">
						<img src="images/deal-img.jpg" alt="" />
					</div>
				</div>
			</section>

			<section class="contact" id="contact">
				<h1 class="heading">get in touch</h1>

				<div class="row">
					<iframe
						class="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.895920873054!2d72.83196972644954!3d19.141670564195152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1621609263469!5m2!1sen!2sin"
						allowfullscreen=""
						loading="lazy"></iframe>

					<form action="">
						<div class="inputBox">
							<input type="text" required />
							<label>name</label>
						</div>
						<div class="inputBox">
							<input type="email" required />
							<label>email</label>
						</div>
						<div class="inputBox">
							<input type="number" required />
							<label>number</label>
						</div>
						<div class="inputBox">
							<textarea
								required
								name=""
								id=""
								cols="30"
								rows="10"></textarea>
							<label>message</label>
						</div>

						<input
							type="submit"
							value="send message"
							class="btn"
						/>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Home2;
