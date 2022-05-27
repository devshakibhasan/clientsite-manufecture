import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDotCircle, faEnvelopeOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './MyPortfolio.css';
import $ from 'jquery';
class MyPortfolio extends Component {
    render() {



   
        
        
        
        return (
            <div className='myPortfolio'>

                <div class="container-fluid py-5" id="about">
                    <div class="container">
                        <div class="position-relative d-flex align-items-center justify-content-center">
                            <h1 class="display-1 text-uppercase text-white" >About</h1>
                            <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-lg-5 pb-4 pb-lg-0">
                                <img class="img-fluid rounded w-100" src="https://i.ibb.co/9YtxzNw/281800585-373117068127844-228047907600662402-n.jpg" alt=""></img>
                            </div>
                            <div class="col-lg-7">
                                <h3 class="mb-4">UI/UX Designer and Web Developer</h3>
                                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                                <div class="row mb-3 textT ms-5">
                                    <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">Kate Winslet</span></h6></div>
                                    <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">1 April 1990</span></h6></div>
                                    <div class="col-sm-6 py-2"><h6>Degree: <span class="text-secondary">Master</span></h6></div>
                                    <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">10 Years</span></h6></div>
                                    <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">+012 345 6789</span></h6></div>
                                    <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">info@example.com</span></h6></div>
                                    <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">123 Street, New York, USA</span></h6></div>
                                    <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                                </div>
                                <a href="" class="btn btn-outline-primary mr-4">Hire Me</a>
                                <a href="" class="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="container-fluid py-5" id="qualification">
                    <div class="container">
                        <div class="position-relative d-flex align-items-center justify-content-center">
                            <h1 class="display-1 text-uppercase text-white" >Quality</h1>
                            <h1 class="position-absolute text-uppercase text-primary">Education and Expericence</h1>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <h3 class="mb-4">My Education</h3>
                                <div class="border-left border-secndary pt-2 pl-4 ml-2">
                                    <div class="position-relative mb-4">
                                        <FontAwesomeIcon icon={faDotCircle} className='text-primary position-absolute iconC' />  <i class="far fa-dot-circle text-primary position-absolute"  ></i>
                                        <h5 class="font-weight-bold mb-1">Master In CSE</h5>
                                        <p class="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                    </div>
                                    <div class="position-relative mb-4">
                                        <FontAwesomeIcon icon={faDotCircle} className='text-primary position-absolute iconC' />    <i class="far fa-dot-circle text-primary position-absolute"  ></i>
                                        <h5 class="font-weight-bold mb-1">Master In CSE</h5>
                                        <p class="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                    </div>
                                    <div class="position-relative mb-4">
                                        <FontAwesomeIcon icon={faDotCircle} className='text-primary position-absolute iconC' />   <i class="far fa-dot-circle text-primary position-absolute"  ></i>
                                        <h5 class="font-weight-bold mb-1">Master In CSE</h5>
                                        <p class="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <h3 class="mb-4">My Expericence</h3>
                                <div class="border-left border-secndary pt-2 pl-4 ml-2">
                                    <div class="position-relative mb-4">
                                        <FontAwesomeIcon icon={faDotCircle} className='text-primary position-absolute iconC' />     <i class="far fa-dot-circle text-primary position-absolute"  ></i>
                                        <h5 class="font-weight-bold mb-1">Web Designer</h5>
                                        <p class="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                    </div>
                                    <div class="position-relative mb-4">
                                        <FontAwesomeIcon icon={faDotCircle} className='text-primary position-absolute iconC' />    <i class="far fa-dot-circle text-primary position-absolute"  ></i>
                                        <h5 class="font-weight-bold mb-1">Web Designer</h5>
                                        <p class="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                    </div>
                                    <div class="position-relative mb-4">
                                        <FontAwesomeIcon icon={faDotCircle} className='text-primary position-absolute iconC' />       <i class="far fa-dot-circle text-primary position-absolute"  ></i>
                                        <h5 class="font-weight-bold mb-1">Web Designer</h5>
                                        <p class="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Qualification End --> */}


                {/* <!-- Skill Start --> */}
                <div class="container-fluid py-5" id="skill">
                    <div class="container">
                        <div class="position-relative d-flex align-items-center justify-content-center">
                            <h1 class="display-1 text-uppercase text-white">Skills</h1>
                            <h1 class="position-absolute text-uppercase text-primary">My Skills</h1>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">HTML</h6>
                                        <h6 class="font-weight-bold">95%</h6>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">CSS</h6>
                                        <h6 class="font-weight-bold">85%</h6>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">React</h6>
                                        <h6 class="font-weight-bold">90%</h6>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">Firebase</h6>
                                        <h6 class="font-weight-bold">90%</h6>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">Javascript</h6>
                                        <h6 class="font-weight-bold">90%</h6>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">Angular JS</h6>
                                        <h6 class="font-weight-bold">95%</h6>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">Node js</h6>
                                        <h6 class="font-weight-bold">85%</h6>
                                    </div>
                                    <div class="progress ">
                                        <div class="progress-barbg-dark" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="skill mb-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="font-weight-bold">Mongodb</h6>
                                        <h6 class="font-weight-bold">85%</h6>
                                    </div>
                                    <div class="progress ">
                                        <div class="progress-barbg-dark" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Skill End --> */}


                {/* <!-- Contact Start --> */}
    <div class="container-fluid py-5" id="contact">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase text-white" >Contact</h1>
                <h1 class="position-absolute text-uppercase text-primary">Contact Me</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact-form text-center">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <input type="text" class="form-control p-4" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group col-sm-6">
                                    <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

            </div>
        );
    }
}

export default MyPortfolio;
