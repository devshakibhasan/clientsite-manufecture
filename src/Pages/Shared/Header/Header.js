import { signOut } from 'firebase/auth';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li>{
               user && <Link to="/dashboard">dashboard</Link>
            }</li>
       

        <li><Link to="/managetools">Manage Tools</Link></li>

        <li><Link to="/Blogs">Blogs</Link></li>
        <li>{user ? <button className="btn btn-ghost text-white"  onClick={handleSignOut} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div  className="navbar ">
            <div className='container'>

          
<div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-white">Manufecture Tools</a>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end text-white">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
        </div>
        </div>
        
    );
};

export default Navbar;



// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import './Header.css'
// const Header = () => {
//     const [user] = useAuthState(auth);

//     const handleSignOut = () => {
//         signOut(auth);
//     }

//     return (
//         <>
        
//             <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" className='navbar'>
//                 <Container>
//                     <Navbar.Brand as={Link} to="/">
                     
//                         Be Stock
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="mx-auto">
//                             <Nav.Link href="home" active>Home</Nav.Link>
//                             {
//                                 user &&  <Nav.Link as={Link} to="dashBoard" > Dashboard</Nav.Link>
//                             }
                           
//                             <Nav.Link as={Link} to="orders" >my orders</Nav.Link>
//                             <Nav.Link as={Link} to="myItem" >Add a review</Nav.Link>
//                             <Nav.Link as={Link} to="myItem" >my profile</Nav.Link>
//                             <Nav.Link as={Link} to="myItem" >payment page</Nav.Link>
//                             <Nav.Link as={Link} to="myPortfolio" >my portfolio</Nav.Link>
//                             <Nav.Link as={Link} to="manageproduct" >Manage Product</Nav.Link>
//                             <Nav.Link as={Link} to="Blogs" >Blogs</Nav.Link>
//                         </Nav>
//                         <Nav>
//                             {
//                                 user ?
//                                     <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
//                                     :
//                                     <Nav.Link as={Link} to="login" >
//                                         Login
//                                     </Nav.Link>
//                             }
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// };

// export default Header;