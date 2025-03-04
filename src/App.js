import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
           <header>
       <div class="navbar">
            
                <div class="logo-container">

                    <a href="./index.html"><img src="./imgs/logo.svg" alt="LOGO" srcset=""/></a>
                    
                    <h3 class="logo-text"><a href="./index.html" >IMPACT INVESTMENT</a></h3>
                    
                </div>
                <nav>
                
                        <ul class="nav-links">
                            <li ><a href="./about.html" class="nav-item">About us</a></li>
                            <li ><a href="./services.html" class="nav-item">Our services</a></li>
                            <li ><a href="./checkout.html" class="nav-item">Checkout</a></li>
                        </ul>
                    
                </nav>
                <div class="button-container">
                    <button id="button">Lets Talk</button>
                </div>
        </div>
    



    </header>
    <main>

        <section class="presentation">

            <div class="introduction">
                <div class="intro-text">
                    <h1>Lets Talk Trading</h1>
                    <p>Impact investment is dedicated to provide 
                        professional services and experience to our clients, 
                        we will strive to accomplish our mission by; 
                        providing classified education about financial markets 
                        to our clients, and performing lower risk trades to 
                        maximise earning to our clients as well as the company.</p>

                </div>
                <div class="more">
                    <button class="cta-more">MORE</button>
                </div>




            </div>

            <div class="demo-container">
                <div id="chart"></div>
            </div>
          




        </section>

        <img src="./imgs/cover.png" alt="" srcset="" class="bg-blue"/>


        <section class="payment">

            <div class="payment-container">
                <ul class="methods">
                    <li><a href="#" class="method"><img src="./imgs/skrill.svg" alt="" srcset=""/></a></li>
                    <li><a href="#" class="method"><img src="./imgs/neteller.svg" alt="" srcset=""/></a></li>
                    <li><a href="#" class="method"><img src="./imgs/webmoney.svg" alt="" srcset=""/></a></li>
                    <li><a href="#" class="method"><img src="./imgs/bitcoin.svg" alt="" srcset=""/></a></li>
                </ul>
            </div>

        </section>

        <section class="services">
            <div class="intro">
                <h2>OUR SERVICES</h2>
            </div>

            <div class="list-services">
                <div class="card">
                    <img src="./imgs/candle stick.svg" alt="signal"/>
                    <h3 class="title">Signals</h3>
                    <p>We offer accurate signals to clients 
                        that do not have time to analyse the market.</p>
                    <div class="button">
                    <a href="#">Learn more</a>
                    <img src="./imgs/arrow.svg" alt="arrow"/>
                    </div>
                </div>
                <div class="card">
                    <img src="./imgs/accmgnt.svg" alt="acc"/>
                    <h3 class="title">Account Management</h3>
                    <p>Our major role is to maximize the investor's profit with lowest risk as possible.</p>
                    <div class="button">
                    <a href="#">Learn more</a>
                    <img src="./imgs/arrow.svg" alt="arrow"/>
                    </div>

                </div>
                <div class="card">
                        <img src="./imgs/copy trading.svg" alt="copy"/>
                        <h3 class="title">Impact copy trading</h3>
                        <p>What the quickest way of making huge profits through Forex? The quickest way to make profits is by Copying PRO Forex traders. </p>
                        <div class="button">
                        <a href="#">Learn more</a>
                        <img src="./imgs/arrow.svg" alt="arrow"/>
                        </div>               
                </div>
            </div>
        </section>

        <section class="testimonies">
            
                <div class="card-testimonies">
                    <div class="card-title">
                    <h2>What our Clients are saying</h2>
                    <hr/>
                    </div>
                    <div class="slider-content">
                    <div class="message">
                        <div class="profile">
                                <img src="./imgs/jp whitr.jpg" alt=""/>     
                            <h4>Joseph Masonda</h4>                  
                        </div>
                        <div class="quote">
                            <h3>“The team is so dedicated and their efforts are beyond measures!”</h3>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div class="slider">
                    <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
  <input type="radio" name="slider" title="slide2" class="slider__nav"/>
  <input type="radio" name="slider" title="slide3" class="slider__nav"/>
  <input type="radio" name="slider" title="slide4" class="slider__nav"/>
                </div>

        </section>




    </main>
    <footer>
        <div class="footer">
            <nav class="nav-footer">
                <ul class="links-footer">
                    <li ><a href="./about.html" class="footer-item">About us</a></li>
                    <li ><a href="./services.html" class="footer-item">Our services</a></li>
                    <li ><a href="./checkout.html" class="footer-item">Checkout</a></li>
                </ul>
            </nav>
            <hr class="ft-line"/>
            <div class="social-pay">
                <div class="payment-methods">
                    <h4>We accept all types of Payment
                    </h4>
                    <div class="logos">
                        <img src="./imgs/skrill.svg" alt="skrill"/>
                        <img src="./imgs/neteller.svg" alt="neteller"/>
                        <img src="./imgs/webmoney.svg" alt="webmoney"/>
                        <img src="./imgs/bitcoin.svg" alt="bitcoin"/>
                    </div>
                </div>
                <div class="social">
                    <h4>Follow us</h4>
                    <div class="social-icons">
                        <a href="#"><img src="./imgs/instagram (2).svg" alt="insta"/></a>
                        <a href="#"><img src="./imgs/facebook.svg" alt="fb"/></a>
                    </div>
                </div>
            </div>
            <hr class="ft-line"/>
            <div class="footer-text">
                <h4>Trading Foreign Exchange (Forex) and Contracts For Difference (CFDs) is highly speculative, carries a high level of risk and
                    is not appropriate for every investor. You may lose all of your capital, therefore, you should only risk a capital that you cannot afford to lose.</h4>
            </div>
            <div class="copyright">©2020 ImpactForex.| Design by <a href="https://www.kidunejoseph.hesimax.com/kidunejoseph">Joescorporation</a></div>
        </div>

    </footer>


      </div>
    );
  }
}

export default App;