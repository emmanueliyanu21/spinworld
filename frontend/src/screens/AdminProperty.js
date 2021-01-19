import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listProperties } from '../actions/propertyAction';
import { Link } from 'react-router-dom';
import AdminSideNav from '../components/AdminSideNav';

const Admin = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProperties());
  }, [dispatch]);
  const { properties } = useSelector(state => state.propertyList);
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}></Modal>
      <Row>
        <Col md={2}>
          <AdminSideNav />
        </Col>
        <Col md={10}>
          <div className='card mb-4'>
            <div className='card-header'>
              <button
                className='btn btn-success float-right'
                onClick={() => setShow(true)}
              >
                <i className='fas fa-plus mr-1'></i>
                Add property
              </button>
            </div>
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
                              Title
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
                              Type
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
                              Price
                            </th>
                            <th
                              className='sorting'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              style={{ width: '31px' }}
                            ></th>
                          </tr>
                        </thead>

                        <tbody>
                          {properties &&
                            properties.map((property, index) => (
                              <tr
                                key={property._id}
                                role='row'
                                className='even'
                              >
                                <td>{index + 1}</td>
                                <td>{property.title}</td>

                                <td>{property.type}</td>
                                <td>{property.price}</td>
                                <td>
                                  <div>
                                    <button className='btn btn-primary mr-2 '>
                                      <i class='far fa-edit mr-1'></i>
                                      edit
                                    </button>
                                    <button className='btn btn-danger'>
                                      <i className='far fa-trash-alt mr-1'></i>
                                      delete
                                    </button>
                                  </div>
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

export default Admin;
