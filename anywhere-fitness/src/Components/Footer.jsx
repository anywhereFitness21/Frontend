import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/style.css';
import '../styles/utilities.css'

const Footer = () => {
    
    return (
        <>
        <section id="contact" className='bg-secondary'>
        <div className="inner">
            <section className='split'>
                <form method="post" action="#" className='contact-form'>
                    <div className="fields">
                        <div className="field half">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="actions">
                        <button className='btn-primary'>Sumbit Message</button>
                       <button className='btn-white'>Clear</button>
                    </div>
                </form>
            </section>
            <section className="split">
              
                    <div className="contact-method">
                       <FontAwesomeIcon icon={faEnvelope}/>
                        <h3>Email</h3>
                        <a href="#">information@untitled.tld</a>
                    </div>
                
                
                    <div className="contact-method">
                    <FontAwesomeIcon icon={faPhone}/>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
           
         
                    <div className="contact-method">
                    <FontAwesomeIcon icon={faHome}/>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
            </section>
        </div>
    </section>
         <footer id="footer" className='bg-secondary'>
						<div class="footer-inner">
							<ul class="footer-icons">
								<li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li><span class="label">Twitter</span>
								<li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
								<li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
								<li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
								<li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
							</ul>
							<ul class="copyright">
								<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</footer>
        </>
    )
}

export default Footer;