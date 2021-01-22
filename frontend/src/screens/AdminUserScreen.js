import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminSideNav from '../components/AdminSideNav';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { listUsers } from '../actions/userActions';
const AdminUserScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  const { users, loading } = useSelector(state => state.userList);
  return (
    <Row>
      <Col md={2}></Col>
      <AdminSideNav />
      <Col md={10} className='mt-2'>
        {loading ? (
          <Loader />
        ) : (
          <div className='card mb-4'>
            <div className='card-header'>
              <button className='btn btn-success float-right'>
                <i className='fas fa-plus mr-1'></i>
                Add User
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
                              Name
                            </th>
                            <th
                              className='sorting'
                              tabIndex='0'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-label='Position: activate to sort column ascending'
                              style={{ width: '188px' }}
                            >
                              Email
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
                              Admin
                            </th>
                            <th
                              className='sorting'
                              aria-controls='dataTable'
                              rowSpan='1'
                              colSpan='1'
                              aria-label='Age: activate to sort column ascending'
                              style={{ width: '31px' }}
                            ></th>
                          </tr>
                        </thead>

                        <tbody>
                          {users &&
                            users.map((user, index) => (
                              <tr key={user._id} role='row' className='even'>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                  {user.isAdmin ? (
                                    <i class='fas fa-check-square fa-2x text-success'></i>
                                  ) : (
                                    <i class='fas fa-times-circle fa-2x text-danger'></i>
                                  )}
                                </td>

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
                          {/* <tr role='row' className='even'>
                          <td className='sorting_1'>Cedric Kelly</td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                        </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default AdminUserScreen;
