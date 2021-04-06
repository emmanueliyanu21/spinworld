import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deliverOrder, listOrders } from '../actions/orderActions';
import AdminSideNav from '../components/AdminSideNav';

const AdminOrderScreen = ({ history }) => {
  const [show, setShow] = useState(false);
  const [drivers, setDriver] = useState([]);
  const dispatch = useDispatch();

  const orderList = useSelector(state => state.orderList);
  const { orders } = orderList;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);

  const assignDriverHandler = async order => {
    setShow(true);
    try {
      const user = JSON.parse(localStorage.getItem('userInfo'));
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get('/api/users/get/drivers', config);
      setDriver(data);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const clickHandler = order => {
    localStorage.removeItem('order');
    localStorage.setItem('order', JSON.stringify(order));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(JSON.parse(localStorage.getItem('order'))));
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Title className='mb-4 pl-4'>Assign a driver</Modal.Title>
        <Card>
          <Form className='p-4'>
            <Form.Control as='select'>
              <option value=''>Select a driver</option>
              {drivers.map(driver => (
                <option>{driver.businessName}</option>
              ))}
            </Form.Control>
            <Button className='btn btn-block mt-4'>Assign</Button>
          </Form>
        </Card>
      </Modal>
      <Row>
        <Col md={2}>
          <AdminSideNav />
        </Col>
        <Col md={10}>
          <div className='card mb-4'>
            <div className='card-header'></div>
            <div className='card-body'>
              <div className='table-responsive'>
                <div
                  id='dataTable_wrapper'
                  className='dataTables_wrapper dt-bootstrap4'
                >
                  <div className='row'>
                    <div className='col-sm-12'>
                      <table
                        className='table table-bordered dataTable'
                        id='dataTable'
                        width='100%'
                        cellSpacing='0'
                        role='grid'
                        aria-describedby='dataTable_info'
                        style={{ width: '100%' }}
                      >
                        <thead>
                          <tr role='row'>
                            <th
                              className='sorting_asc'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-sort='ascending'
                              aria-label='Name: activate to sort column descending'
                              style={{ width: '115px' }}
                            >
                              S/N
                            </th>
                            <th
                              className='sorting_asc'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-sort='ascending'
                              aria-label='Name: activate to sort column descending'
                              style={{ width: '115px' }}
                            >
                              USER
                            </th>
                            <th
                              className='sorting'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-label='Office: activate to sort column ascending'
                              style={{ width: '85px' }}
                            >
                              DATE
                            </th>
                            <th
                              className='sorting'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-label='Age: activate to sort column ascending'
                              style={{ width: '31px' }}
                            >
                              AMOUNT
                            </th>
                            <th
                              className='sorting'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-label='Age: activate to sort column ascending'
                              style={{ width: '31px' }}
                            >
                              PAID
                            </th>{' '}
                            <th
                              className='sorting'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-label='Age: activate to sort column ascending'
                              style={{ width: '31px' }}
                            >
                              DELIVERED
                            </th>
                            <th
                              className='sorting'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              style={{ width: '31px' }}
                            >
                              ACTIONS
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {orders &&
                            orders.map((order, index) => (
                              <tr key={order._id} role='row' className='even'>
                                <td>{index + 1}</td>
                                <td>{order.user.name}</td>

                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{`$${order.totalPrice}`}</td>
                                <td>
                                  {order.isPaid ? (
                                    order.paidAt.substring(0, 10)
                                  ) : (
                                    <i
                                      className='fas fa-times'
                                      style={{ color: 'red' }}
                                    ></i>
                                  )}
                                </td>
                                <td>
                                  {order.isDelivered ? (
                                    order.deliveredAt.substring(0, 10)
                                  ) : (
                                    <i
                                      className='fas fa-times'
                                      style={{ color: 'red' }}
                                    ></i>
                                  )}
                                </td>
                                <td>
                                  <Button
                                    onClick={() => assignDriverHandler(order)}
                                    className='btn-success'
                                  >
                                    <i class='fas fa-truck mr-1'></i>
                                    Assign driver
                                  </Button>
                                  <Button>
                                    <i class='fas fa-truck-loading mr-1'></i>
                                    Mark Delivered
                                  </Button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AdminOrderScreen;
