import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='Blogs-container'>
            <PageTitle title="Blogs"></PageTitle>

            <Container className='blogs'>
                <h1 className='tex-center'>Full Stack Question</h1>
                <Row>
                    <Col className='column'  >
                        <h3><div className='blogs-question'> <div className='blogs-number'>1</div>  How will you improve the performance of a React Application?</div></h3>
                        <p className='p'>To optimize a React rendering you need to make sure that components receive
                            only necessary properties. It will let you control the CPU consumption and avoid
                            over-rendering unnecessary features. This solution will create a functional
                            component that will collect all properties and redistribute them to other components.</p>
                    </Col>
                    <Col className='column'  >
                        <h3><div className='blogs-question'> <div className='blogs-number blogs-number2'>2</div> What are the different ways to manage a state in a React application?</div></h3>
                        <p className='p'>There are four main types of state you need to properly manage in
                            your React apps.They are-
                            <p>  i.Local state.</p>
                            <p> ii.Global state.</p>
                            <p> iii.Server state.</p>
                            <p> iv.URL state.</p>




                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='column'  >
                        <h3> <div className='blogs-question'><div className='blogs-number'>3</div>How does prototypical inheritance work?</div> </h3>
                        <p className='p'>Prototypal Inheritance is a feature in Javascript.It is used to add
                            methods and properties in objects. It's a method by which an object
                            can inherit the properties and methods of another object.
                            In order to get and set the [[Prototype]] of an
                            object, we use Object. getPrototypeOf and Object.</p>
                    </Col>

                    <Col className='column'>
                        <h3><div className='blogs-question'> <div className='blogs-number'>5</div> What is a unit test? Why should write unit tests?</div></h3>
                        <p className='p'>The main purpose of unit testing is for isolating written codes to
                            test and determine if it works as intended. Unit testing is an
                            important step in the development process, because if it's done
                            correctly, it helps detect early flaws in code which can lead
                            more difficulties to find in later testing stages.</p>
                    </Col>

                </Row>
                <Row>

                    <Col className='column'>
                        <h3><div className='blogs-question'> <div className='blogs-number'>4</div> Why you do not set the state directly in React. For example, if you have const
                            [products, setProducts] = useState([]). Why you do not set products = [...] instead,
                            you use the setProducts</div></h3>
                        <p className='p'>We should never update the state directly because of the following
                            reasons-If you update it directly, calling the setState() afterwards it
                            may just replace the update you made also React will then look at the
                            virtual DOM, it also has a copy of the old virtual DOM.That's why it's
                            better to set state by setProducts.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;