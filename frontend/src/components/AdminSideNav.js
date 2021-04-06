import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const AdminSideNav = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState('');
  const toggleHandler = e => {
    if (toggle === '') {
      setToggle('sb-sidenav-toggled');
    } else {
      setToggle('');
    }
  };
  useEffect(() => {
    const bootScript = async () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js`;
      script.async = true;
      document.body.appendChild(script);
    };
    const jqueryScript = async () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://code.jquery.com/jquery-3.5.1.slim.min.js`;
      script.async = true;
      document.body.appendChild(script);
    };
    // const cosScript = async () => {
    //   const script = document.createElement('script')
    //   script.type = 'text/javascript'
    //   script.src = `../utils/toggleSideNav.js`
    //   script.async = true
    //   document.body.appendChild(script)
    // }
    // cosScript();
    bootScript();
    jqueryScript();
  }, []);
  return (
    <div id='toggle' className={`sb-nav-fixed ${toggle}`}>
      <nav className='sb-topnav navbar navbar-expand navbar-light bg-white'>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home' className='logo-holder'>
            <img
              src='/image/logo-folder/logo.jpg'
              className='img-fluid'
              alt='logo'
            />
          </Navbar.Brand>
        </LinkContainer>
        <button
          className='btn btn-link btn-sm order-1 order-lg-0'
          id='sidebarToggle'
          href='#'
          onClick={toggleHandler}
        >
          <i className='fas fa-bars'></i>
        </button>

        <ul className='navbar-nav ml-auto '>
          <li className='nav-item dropdown'>
            <a
              href='/admin'
              className='nav-link '
              role='button'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <i className='fas fa-user fa-2x fa-fw'></i>
            </a>
          </li>
        </ul>
      </nav>
      <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
          <nav
            className='sb-sidenav accordion sb-sidenav-dark'
            id='sidenavAccordion'
          >
            <div className='sb-sidenav-menu mt-4'>
              <div className='nav'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/admin' && 'bg-primary active'
                  }`}
                  to='/admin'
                >
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-home'></i>
                  </div>
                  Home
                </Link>
              </div>

              <div className='nav'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/admin/property' &&
                    'bg-primary active'
                  }`}
                  to='/admin/property'
                >
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-laptop-house'></i>
                  </div>
                  Properties
                </Link>
              </div>
              <div className='nav'>
                <Link className='nav-link ' href='index.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-box-open'></i>
                  </div>
                  Products
                </Link>
              </div>
              <div className='nav'>
                <Link
                  to='/admin/orders'
                  className={`nav-link ${
                    location.pathname === '/admin/orders' && 'bg-primary active'
                  }`}
                >
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-shopping-cart'></i>
                  </div>
                  Orders
                </Link>
              </div>
              <div className='nav'>
                <Link className='nav-link ' href='index.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='far fa-user'></i>
                  </div>
                  Vendors
                </Link>
              </div>
              <div className='nav'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/admin/customer' &&
                    'bg-primary active'
                  }`}
                  to='/admin/customer'
                >
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-user'></i>
                  </div>
                  Customers
                </Link>
              </div>
              <div className='nav'>
                <Link className='nav-link' href='index.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-calendar-alt'></i>
                  </div>
                  Reports
                </Link>
              </div>
              <div className='nav'>
                <Link className='nav-link' href='index.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-cog'></i>
                  </div>
                  Settings
                </Link>
              </div>
              <div className='nav'>
                <Link className='nav-link' href='index.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-cogs'></i>
                  </div>
                  Capability
                </Link>
              </div>
              <div className='nav'>
                <Link className='nav-link ' href='index.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-credit-card'></i>
                  </div>
                  Withdrawal
                </Link>
              </div>
              <div className='nav'>
                <Link className='nav-link ' href='index.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-sign-out-alt'></i>
                  </div>
                  Logout
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSideNav;
