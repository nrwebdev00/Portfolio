import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () =>{
        console.log('logout')
    }

    return (
        <header>
            <Navbar className='header' variant='dark' expand='lg' collapseOnSelect>
                <LinkContainer to='/'>
                    <Navbar.Brand className='justify-content-start'>Nathon Reed Portfolio</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-center'>
                   <Nav.Item>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                   <Nav.Link href="/about">About Nathon</Nav.Link>
                   </Nav.Item>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                   <Nav.Item>
                    <Nav.Link href="https://github.com/nrwebdev00"><FaGithub /></Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                   <Nav.Link href="https://twitter.com/ReedNathon"><FaTwitter /></Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link href="https://www.facebook.com/nathon.reed"><FaFacebook /></Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                   {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
                   </Nav.Item>
                   
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header
