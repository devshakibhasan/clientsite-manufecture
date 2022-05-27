import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Collection.css';

const Collection = () => {
    return (
        <div>
            <Container className='ourCollection'>
                <h1></h1>
                <h1></h1>
                <Row className='allCollection'>
                    <Col className="collection">
                        <img src="https://i.ibb.co/nDbrqPX/img1.jpg" alt="Snow" ></img>
                        <div className='centered'><h2>Electronic Tools</h2></div>
                    </Col>
                    <Col className="collection">
                        <img src="https://i.ibb.co/Lr7jGYZ/img2.jpg" alt="Snow" ></img>
                        <div className='centered'><h2>Tools</h2></div>
                    </Col>
                    <Col className="collection">
                        <img src="https://i.ibb.co/qN7hYjd/img3.jpg" alt="Snow" ></img>
                        <div className='centered'>
                            <h2>Build Smart House</h2>
                        </div>
                    </Col>


                    {/* <Col className="collection">
                        <img src="https://i.ibb.co/NFfw5xj/beats-narkitecture-01-removebg-preview.png" alt="Snow" ></img>
                        <div className='centered'><h2>Accessories</h2></div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Collection;