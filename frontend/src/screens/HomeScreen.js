import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2500);
  }, []);

  return (
    <>
      <Modal show={show} centered onHide={() => setShow(false)}>
        <Modal.Body>
          <Row>
            <Col>
              <Link to='/properties'>
                <i class='fas fa-house-user fa-3x'></i>
              </Link>
            </Col>
            <Col>
              <Link>
                <i class='fas fa-truck-moving fa-3x'></i>
              </Link>
            </Col>
            <Col>
              <Link>
                <i class='fas fa-palette fa-3x'></i>
              </Link>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Container>
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
