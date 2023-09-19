// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Common.css";
import "./../styles/Home.css";
import "./../styles/responsive.css";

//imgs
import customer1 from "../assets/Images/HomeImgs/customers/customer-1.jpg";
import customer2 from "../assets/Images/HomeImgs/customers/customer-2.jpg";
import customer3 from "../assets/Images/HomeImgs/customers/customer-3.jpg";
import customer4 from "../assets/Images/HomeImgs/customers/customer-4.jpg";
import customer5 from "../assets/Images/HomeImgs/customers/customer-5.jpg";
import customer6 from "../assets/Images/HomeImgs/customers/customer-6.jpg";

import hero from "../assets/Images/HomeImgs/hero.png";
import heroMin from "../assets/Images/HomeImgs/hero-min.png";

import noltalogo from "../assets/Images/test/noltaLogo.png";
import borosilLogo from "../assets/Images/test/Borosil-Logo.jpg";
import greenchef from "../assets/Images/test/greenlogo.png";

import meal1 from "../assets/Images/HomeImgs/meals/meal-1.jpg";
import meal2 from "../assets/Images/HomeImgs/meals/meal-2.jpg";

import dave from "../assets/Images/HomeImgs/customers/dave.jpg";
import ben from "../assets/Images/HomeImgs/customers/ben.jpg";
import steve from "../assets/Images/HomeImgs/customers/steve.jpg";
import hanah from "../assets/Images/HomeImgs/customers/hannah.jpg";

import galery1 from "../assets/Images/HomeImgs/gallery/gallery-1.jpg";
import galery2 from "../assets/Images/HomeImgs/gallery/gallery-2.jpg";
import galery3 from "../assets/Images/HomeImgs/gallery/gallery-3.jpg";
import galery4 from "../assets/Images/HomeImgs/gallery/gallery-4.jpg";
import galery5 from "../assets/Images/HomeImgs/gallery/gallery-5.jpg";
import galery6 from "../assets/Images/HomeImgs/gallery/gallery-6.jpg";
import galery7 from "../assets/Images/HomeImgs/gallery/gallery-7.jpg";
import galery8 from "../assets/Images/HomeImgs/gallery/gallery-8.jpg";
import galery9 from "../assets/Images/HomeImgs/gallery/gallery-9.jpg";
import galery10 from "../assets/Images/HomeImgs/gallery/gallery-10.jpg";
import galery11 from "../assets/Images/HomeImgs/gallery/gallery-11.jpg";
import galery12 from "../assets/Images/HomeImgs/gallery/gallery-12.jpg";

import CategoryCard from '../components/Ui/CategoryCard';


const Home = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <Link to="/foods" class="btn btn--full margin-right-sm">
              Start eating well
            </Link>

            <Link to="/foods" className="btn btn--outline">
              Learn more &darr;
            </Link>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src={customer1} alt="Customer photo" />
                <img src={customer2} alt="Customer photo" />
                <img src={customer3} alt="Customer photo" />
                <img src={customer4} alt="Customer photo" />
                <img src={customer5} alt="Customer photo" />
                <img src={customer6} alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <source srcSet={hero} type="image/webp" />
              <source srcSet={heroMin} type="image/png" />

              <img
                src="img/hero-min.png"
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">Top Brands</h2>
          <div className="logos">
            <img src={noltalogo} alt="Techcrunch logo" />
            <img src={borosilLogo} alt="Business Insider logo" />
            <img src={greenchef} alt="The New York Times logo" />
            <img src={greenchef} alt="Forbes logo" />
            <img src={greenchef} alt="USA Today logo" />
          </div>
        </div>
      </section>



      <section className="section-how">
        <div className="container">
          <span className="subheading">Shop by Categories</span>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5">
      <CategoryCard />

    </div>
        </div>
      </section>





      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="meal">
            <img src={meal1} className="meal-img" alt="Japanese Gyozas" />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegetarian">Vegetarian</span>
              </div>
              <p className="meal-title">Japanese Gyozas</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>74</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="meal">
            <img src={meal2} className="meal-img" alt="Avocado Salad" />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
                <span className="tag tag--paleo">Paleo</span>
              </div>
              <p className="meal-title">Avocado Salad</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>92</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="diets">
            <h3 className="heading-tertiary">Works with any diet:</h3>
            <ul className="list">
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Vegetarian</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Vegan</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Pescatarian</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Gluten-free</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Lactose-free</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Keto</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Paleo</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Low FODMAP</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container all-recipes">
          <a href="#" className="link">
            See all recipes &rarr;
          </a>
        </div>
      </section>

      <section className="section-testimonials" id="testimonials">
        <div className="testimonials-container">
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">
            Once you try it, you can t go back
          </h2>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Dave Bryson"
                src={dave}
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name">&mdash; Dave Bryson</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Ben Hadley"
                src={ben}
              />
              <blockquote className="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It s amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name">&mdash; Ben Hadley</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Steve Miller"
                src={steve}
              />
              <blockquote className="testimonial-text">
                Omnifood is a life saver! I just started a company, so there s
                no time for cooking. I couldn t live without my daily meals now!
              </blockquote>
              <p className="testimonial-name">&mdash; Steve Miller</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Hannah Smith"
                src={hanah}
              />
              <blockquote className="testimonial-text">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="testimonial-name">&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>

        <div className="gallery">
          <figure className="gallery-item">
            <img
              src={galery1}
              alt="Photo of beautifully
                arranged food"
            />
            <figcaption>Caption</figcaption>
          </figure>
          <figure className="gallery-item">
            <img
              src={galery2}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery3}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery4}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery5}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery6}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery7}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery8}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery9}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery10}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery11}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={galery12}
              alt="Photo of beautifully
                arranged food"
            />
          </figure>
        </div>
      </section>

      <section className="section-pricing" id="pricing">
        <div className="container">
          <span className="subheading">Pricing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div className="container grid grid--2-cols margin-bottom-md">
          <div className="pricing-plan pricing-plan--starter">
            <header className="plan-header">
              <p className="plan-name">Starter</p>
              <p className="plan-price">
                <span>$</span>399
              </p>
              <p className="plan-text">per month. That s just $13 per meal!</p>
            </header>
            <ul className="list">
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>1 meal per day</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Order from 11am to 9pm</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="close-outline"></ion-icon>
              </li>
            </ul>
            <div className="plan-sing-up">
              <Link to="/foods" class="btn btn--full">
                Start eating well
              </Link>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--complete">
            <header className="plan-header">
              <p className="plan-name">Complete</p>
              <p className="plan-price">
                <span>$</span>649
              </p>
              <p className="plan-text">per month. That s just $11 per meal!</p>
            </header>
            <ul className="list">
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  <strong>2 meals</strong> per day
                </span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  Order <strong>24/7</strong>
                </span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div className="plan-sing-up">
              <Link to="foods" class="btn btn--full">
                Start eating well
              </Link>
            </div>
          </div>
        </div>

        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <div className="container grid grid--4-cols">
          <div className="feature">
            <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>
            <p className="feature-title">Never cook again!</p>
            <p className="feature-text">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>
          <div className="feature">
            <ion-icon class="feature-icon" name="nutrition-outline"></ion-icon>
            <p className="feature-title">Local and organic</p>
            <p className="feature-text">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div className="feature">
            <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
            <p className="feature-title">No waste</p>
            <p className="feature-text">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div className="feature">
            <ion-icon class="feature-icon" name="pause-outline"></ion-icon>
            <p className="feature-title">Pause anytime</p>
            <p className="feature-text">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>

      <section className="section-cta" id="cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first meal for free!
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              {/* eslint-disable-next-line react/no-unknown-property */}
              <form className="cta-form" name="sign-up" netlify>
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="full-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="select-where">
                    Where did you hear from us?
                  </label>
                  <select id="select-where" name="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <Link to="signup">
                  <button className="btn btn--form">Sign up now</button>
                </Link>
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
