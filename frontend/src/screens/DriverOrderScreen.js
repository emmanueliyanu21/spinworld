import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  deliverOrder,
  orderAssignDriver,
  orderDriver as orderDriverAction,
  orderMarkDriverDelivered,
  orderMarkDriverFailed,
} from '../actions/orderActions';
import Loader from '../components/Loader';
import ClientDashBoard from '../components/ClientDashBoard';

const DriverOrderScreen = ({ history }) => {
  const [show, setShow] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState('');
  const dispatch = useDispatch();

  const orderDriver = useSelector(state => state.orderDriver);
  const { orders, success: successDriver } = orderDriver;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const orderAssign = useSelector(state => state.orderAssignDriver);
  const { loading, success, error } = orderAssign;

  useEffect(() => {
    if (userInfo) {
      dispatch(orderDriverAction());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);

  const assignHandler = async () => {
    const { _id } = JSON.parse(localStorage.getItem('orderAssign'));
    dispatch(orderAssignDriver(_id, { driver }));
    localStorage.removeItem('orderAssign');
    setShow(false);
  };

  const deliverHandler = order => {
    dispatch(orderMarkDriverDelivered(order._id));
  };

  const failHandler = order => {
    dispatch(orderMarkDriverFailed(order._id));
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Title className='mb-4 pl-4'>Assign a driver</Modal.Title>
        <Card>
          <Form className='p-4'>
            {loading ? (
              <Loader />
            ) : (
              <>
                <Form.Control
                  as='select'
                  value={driver}
                  onChange={e => setDriver(e.target.value)}
                >
                  <option value=''>Select a driver</option>
                  {drivers.map(driver => (
                    <option value={driver._id}>{driver.businessName}</option>
                  ))}
                </Form.Control>
                <Button onClick={assignHandler} className='btn btn-block mt-4'>
                  Assign
                </Button>
              </>
            )}
          </Form>
        </Card>
      </Modal>
      <Row className='mt-4'>
        <Col md={3}>
          <ClientDashBoard />
        </Col>
        <Col md={9}>
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
                              NAME
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
                              ADDRESS
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
                              STATUS
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {orders &&
                            orders.map((order, index) => {
                              const {
                                address,
                                city,
                              } = order.order.shippingAddress;
                              return (
                                <tr key={order._id} role='row' className='even'>
                                  <td>{index + 1}</td>
                                  <td>{order.order.user.name}</td>

                                  <td>{`${address}, ${city}`}</td>
                                  <td>{order.orderStatus}</td>
                                  <td>
                                    <div className='d-flex flex-row'>
                                      <Button
                                        onClick={() => deliverHandler(order)}
                                        className={`mr-2 btn-success ${
                                          order.orderStatus === 'Delivered' &&
                                          'disabled'
                                        }`}
                                      >
                                        Mark Delivered
                                      </Button>
                                      <Button
                                        onClick={() => failHandler(order)}
                                        className={`${
                                          (order.orderStatus === 'Failed' ||
                                            order.orderStatus ===
                                              'Delivered') &&
                                          'disabled'
                                        }`}
                                      >
                                        Mark Failed
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
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

export default DriverOrderScreen;
