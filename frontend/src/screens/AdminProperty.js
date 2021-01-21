import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import GooglePlacesAutocomplete, {
  getLatLng,
  geocodeByAddress,
} from 'react-google-places-autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import {
  listProperties,
  deleteProperty,
  createProperty,
} from '../actions/propertyAction';

import AdminSideNav from '../components/AdminSideNav';

const AdminProperty = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('land');
  const [room, setRoom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [toilet, setToilet] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('rent');
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState('');
  const [latitude, setLatittude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [garage, setGarage] = useState(false);
  const dispatch = useDispatch();

  const { properties } = useSelector(state => state.propertyList);
  const { success } = useSelector(state => state.propertyDelete);

  const {
    error: errorCreate,
    loading: loadingCreate,
    success: successCreate,
  } = useSelector(state => state.propertyCreate);

  useEffect(() => {
    dispatch(listProperties());
  }, [dispatch, success, successCreate]);

  const deleteHandler = id => {
    if (window.confirm('are you sure you want to delete')) {
      dispatch(deleteProperty(id));
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      createProperty({
        title,
        price,
        type,
        room,
        bathroom,
        toilet,
        description,
        category,
        address,
        latitude,
        longitude,
        garage,
      })
    );
    setShow(false);
    setTitle('');
    setPrice('');
    setRoom('');
    setBathroom('');
    setToilet('');
    setDescription('');
  };
  const onChangeHandler = value => {
    setAddress(value.label);
    geocodeByAddress(value.label)
      .then(results => getLatLng(results[0]))
      .then(res => {
        console.log(res);
        setLatittude(res.lat);
        setLongitude(res.lng);
      });
  };
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={e => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                required
                as='select'
                placeholder='Enter category example rent, sale'
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value='rent'>rent</option>
                <option value='sale'>sale</option>
                <option value='short let'>short let</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='type'>
              <Form.Label>Type</Form.Label>
              <Form.Control
                required
                as='select'
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <option value='land'>land</option>
                <option value='flat'>flat</option>
                <option value='house'>house</option>
              </Form.Control>
            </Form.Group>
            {(type === 'house' || type === 'flat') && (
              <Form.Group className='mt-4'>
                <Form.Check
                  type='checkbox'
                  id='garage'
                  label='Select if property has garage'
                  checked={garage}
                  onChange={() => {
                    setGarage(!garage);
                  }}
                />
              </Form.Group>
            )}
            <Form.Group controlId='Address'>
              <Form.Label>Address</Form.Label>
              <GooglePlacesAutocomplete
                apiKey='AIzaSyCxxJCkw3wokAorMMsWOXVbTPAqGt2bgYE'
                selectProps={{
                  onChange: onChangeHandler,
                }}
              />
            </Form.Group>
            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={e => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Number of Bedrooms</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter number of bedrooms'
                value={room}
                onChange={e => setRoom(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='bathroom'>
              <Form.Label>Number of bathroom</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Number of bathroom'
                value={bathroom}
                onChange={e => setBathroom(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='toilet'>
              <Form.Label>Number of toilet</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Number of toilet'
                value={toilet}
                onChange={e => setToilet(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter description'
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='success'>
              Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
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
                                      <i className='far fa-edit mr-1'></i>
                                      edit
                                    </button>
                                    <button
                                      onClick={() =>
                                        deleteHandler(property._id)
                                      }
                                      className='btn btn-danger'
                                    >
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

export default AdminProperty;
