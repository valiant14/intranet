import React from 'react'
import './index.css'
const Footer = () => {
    return (
        <>
        <footer>
    <div id="bottom">
      <section id="section-info">
        <div class="organization-info">
          <div class="vcard">
            <h2>
              <a href="./">LOGO</a>
            </h2>
            <p class="contact-info">
              <span class="org fn">Seder Group of Company</span>
              <br></br>
              <span class="adr"><span class="street-address">12345 Al Malqa District</span> <br></br><span class="locality">Riyadh</span>,
            <span class="region">Saudi Arabia</span> <span class="postal-code">98765</span></span>
            </p>
            <p class="phone-numbers">
              <span class="tel-admission">
                <span class="label">Phone:</span>
                <a href="tel:+1-123-456-7890" class="tel">123-460-6666</a>
              </span>
              <br></br>
              <span class="tel-campus-safety">
                <span class="label">Toll Free:</span>
                <a href="tel:+1-800-555-5555" class="tel">1-800-555-5555</a>
              </span>
            </p>
          </div>
        </div>
        <nav class="footer-nav">
          <div class="nav-group">
            <div class="container">
              <h4>
                <a href="About">About</a>
              </h4>
              <ul>
                <li>
                  <a href="Members">Members</a>
                </li>
                <li>
                  <a href="History">History</a>
                </li>
                <li>
                  <a href="Questions">Questions</a>
                </li>
                <li>
                  <a href="Mission&amp;Values">Mission &amp; Values</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div class="nav-group">
            <div class="container">
              <h4>
                <a href="#">Team</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Creative Services</a>
                </li>
                <li>
                  <a href="#">Web Communications</a>
                </li>
                <li>
                  <a href="#">Media Information</a>
                </li>
              </ul>
              <h4>
                <a href="#">Careers</a>
              </h4>
              <ul>
                <li>
                  <a href="#">UX Design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div class="nav-group">
            <div class="container">
              <h4>
                <a href="#">Resources</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Human Resources</a>
                </li>
                <li>
                  <a href="#">Information Technology Services</a>
                </li>
                <li>
                  <a href="#">Email Services</a>
                </li>
                <li>
                  <a href="#">Safety Policy</a>
                </li>
                <li>
                  <a href="#">Emergency</a>
                </li>
                <li>
                  <a href="#">Bookstore</a>
                </li>
                <li>
                  <a href="#">Childcare</a>
                </li>
              </ul>
            </div>
          </div> */}
        </nav>
        <div class="site-info">
          <p class="copyright">Creative Commons <a href="https://creativecommons.org/licenses/by-sa/4.0/">SEDER</a> | <a href="TermsofUse">Terms of Use</a> | <a href="PrivacyPolicy">Privacy Policy</a></p>
        </div>
      </section>
    </div>

        </footer>
        </>
    )
}

export default Footer