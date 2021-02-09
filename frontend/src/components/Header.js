import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  if (
    location.pathname === '/admin' ||
    location.pathname === '/admin/property' ||
    location.pathname === '/admin/customer'
  ) {
    return null;
  }

  return (
    <div>
      <Navbar expand='lg' className='header-bk-color' collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/properties'>
                <Nav.Link>REAL ESTATE</Nav.Link>
              </LinkContainer>

              <Nav.Link href='#link'>CONSULTANT</Nav.Link>
              <Nav.Link href='#home'>DESIGNER</Nav.Link>
              <Nav.Link href='#link'>MARKETER</Nav.Link>
              {/* <Nav.Link href="#link">BUILDING MATERIALS</Nav.Link> */}
            </Nav>
            <Nav className='ml-auto header-icon'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='profile'>
                    <NavDropdown.Item className='black-dropdown'>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/property-dashboard'>
                    <NavDropdown.Item className='black-dropdown'>
                      Dashboard
                    </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item
                    className='black-dropdown'
                    onClick={logoutHandler}
                  >
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
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin'>
                    <NavDropdown.Item className='black-dropdown'>
                      Dashboard
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item className='black-dropdown'>
                      Users
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item className='black-dropdown'>
                      Products
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item className='black-dropdown'>
                      Orders
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
