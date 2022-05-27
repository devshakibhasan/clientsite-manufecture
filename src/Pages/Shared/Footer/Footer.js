import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/Browstools')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [])


    return (
<div>

        <footer className='text-center mt-5 footer'>
            <Container>
                <Row className='row'>
                    <Col>
                        <div className='column'>
                            <h3>About Us</h3>
                            {/* <p>{products.length}</p> */}
                            <p>
                                We are e inventory based production. We store products that we need and restock them.

                            </p>
                            <div className='icons iconss'>
                                <a href=""><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                                <a href=""> <FontAwesomeIcon icon={faGithub} className='icon icon2' /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} className='icon icon3' /></a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='column'>
                            <h3>What we do</h3>
                            {/* <form className='footer-form'>
                                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                                <input type="email" placeholder='enter your email address' />
                                <button type='submit
                            '>   <FontAwesomeIcon icon={faArrowCircleRight} className='icon' /></button>
                            </form> */}
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <hr />
                            <p>Lorem ipsum dolor sit amet</p>
                            <hr />
                            <p>Lorem ipsum dolor sit amet</p>
                            <hr />
                        </div>
                    </Col>
                    <Col>
                        <div className='column column3'>
                            <h3>Contact information</h3>

                            <div className='flex'> <a href=""><FontAwesomeIcon icon={faLocationDot} className='icon icon3' /></a><p>620 Eighth Avenue,</p></div>
                            <p>United States of America</p>
                            <div className='flex'> <a href=""><FontAwesomeIcon icon={faPhone} className='icon icon3' /></a><p>+ 555 786 897</p></div>
                           

                            <p>Mon-Sat, 9:00am-7:00pm
                            </p>
                            <div className='flex'> <a href=""><FontAwesomeIcon icon={faEnvelope} className='icon icon3' /></a> <p>baumeister@qode.com</p></div>
                           

                        </div>
                    </Col>
                    <Col>
                        <div className='column column3'>
                            <h3>Officies</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <img src="https://i.ibb.co/fMQvngD/footer-img-2.png" alt="" />
                        </div>
                    </Col>
                </Row>

             
            </Container>
          

          
        </footer>
        <div className='copy'> <p><small>copyright @ {year},  All Rights Reserved </small></p></div>
</div>

    );
};

export default Footer;