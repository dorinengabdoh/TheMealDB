import React from 'react'

const Last = () => {
  return ( 
      <>
      <button className="more">Load More</button><br />
      <section6 className="sect6">
        <strong className="big">Deliciousness <br />to your inbox</strong>
        <p className="bold">Enjoy weekly hand picked recipes and <br /> <br />recommendations</p>
        <div className="main3">
          <input type="email" placeholder="Email Address" />
          <button className="join">JOIN</button>
        </div>
        <span className="write">By joining our newsletter you agree to our <label className="underline">Terms and
          Conditions</label></span>
      </section6>
      <section7>
        <div className="big-container">
          <div className="contain1">
            <img src="./images/Logo 2.png" alt="" />
            <p className="up">"On of other hand, we denounce with <br />righteous indignation and dislike men who are <br />
              so beguiled nd demoralized by he charms of <br />pleasure of he moment </p>
          </div>
          <div className="contain2">
            <div className="on">
              <h4>Tastebite</h4><br />
              <p> Abouts us</p><br />
              <p>Careers</p><br />
              <p>Contact Us</p><br />
              <p>Feedback</p><br />
            </div>
            <div className="on">
              <h4>Legal</h4><br />
              <p>Terms</p><br />
              <p>Conditions</p><br />
              <p>Cookies</p><br />
              <p>Copyright</p><br />
            </div>
            <div className="on">
              <h4>Follow</h4><br />
              <p>Facebook</p><br />
              <p>Twitter</p><br />
              <p>Instagram</p><br />
              <p>Youtube</p><br />
            </div>
          </div>

          <div className="media">
            <select name="" id="sel">
              <option value="">Tastebite</option>
              <option value="">Abouts us</option>
              <option value="">Careers</option>
              <option value="">Careers</option>
              <option value="">Feedback</option>
            </select>
            <select name="" id="sel">
              <option value="">Legal</option>
              <option value="">Terms</option>
              <option value="">Conditions</option>
              <option value="">Cookies</option>
              <option value="">Copyright</option>
            </select>
            <select name="" id="sel">
              <option value="">Follow</option>
              <option value="">Facebook</option>
              <option value="">Twitter</option>
              <option value="">Instagram</option>
              <option value="">Youtube</option>
            </select>
          </div>
        </div>
      </section7>
      <hr id="hr" />
        <div className="all2">
          <div className="main-contain">
            <i id="c" className="fas fa-circle fa-1x"></i>
            <p className="four"> 2020 Tastebite-All rights reserved</p>
          </div>
          <div className="footer-left">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </>
      );
}

      export default Last