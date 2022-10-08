import React from 'react'
import './index.css'
import logo from '../../assets/seder.png'

const Footer = () => {
    return (
        <>
        <footer className='footers'>
          <div id="bottom">
            <section id="section-info">
              <div class="organization-info">
                <div class="vcard">
                <div className='logo-center'>
                  <img src={logo} width="100" height="100"/>
                </div>
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
                  <p class="contact-info">Copyrights: SEDER GROUP</p>
                </div>
              </div>
            </section>
          </div>
        </footer>
        </>
    )
}

export default Footer