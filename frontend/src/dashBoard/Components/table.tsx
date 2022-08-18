import React from "react";
import { Helmet } from "react-helmet";
import DashBoardFullSidebar from "./dashBoardfullSidebar";
import DashboardSideBar from "./dashboardSideBar";
import TopNavigator from "./dashBoardTopNavigator";

import Footer from "./footer";

function Table() {
  return (
    <div>
      <Helmet>
        <link
          href="/vendors/bootstrap/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/vendors/font-awesome/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link href="/vendors/nprogress/nprogress.css" rel="stylesheet" />
        <link href="/vendors/iCheck/skins/flat/green.css" rel="stylesheet" />
        <link
          href="/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css"
          rel="stylesheet"
        />
        <link href="/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet" />
        <link
          href="/vendors/bootstrap-daterangepicker/daterangepicker.css"
          rel="stylesheet"
        />
        <link href="/build/css/custom.min.css" rel="stylesheet" />
      </Helmet>

      <body className="nav-md">
        <div className="container body">
          <div className="main_container">
            <DashBoardFullSidebar/>
            <TopNavigator/>

            {/* <!-- page content --> */}
            <div className="right_col" role="main">
              <div className="">
                <div className="page-title">
                  <div className="title_left">
                    <h3>
                      Tables <small>Some examples to get you started</small>
                    </h3>
                  </div>

                  <div className="title_right">
                    <div className="col-md-5 col-sm-5   form-group pull-right top_search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search for..."
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">
                            Go!
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="clearfix"></div>

                <div className="row" style={{ display: "block" }}>
                  <div className="col-md-6 col-sm-6  ">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>
                          Basic Tables <small>basic table subtitle</small>
                        </h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li>
                            <a className="collapse-link">
                              <i className="fa fa-chevron-up"></i>
                            </a>
                          </li>
                          <li className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-expanded="false"
                            >
                              <i className="fa fa-wrench"></i>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Settings 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Settings 2
                              </a>
                            </div>
                          </li>
                          <li>
                            <a className="close-link">
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                      <div className="x_content">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6  ">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>
                          Stripped table <small>Stripped table subtitle</small>
                        </h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li>
                            <a className="collapse-link">
                              <i className="fa fa-chevron-up"></i>
                            </a>
                          </li>
                          <li className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-expanded="false"
                            >
                              <i className="fa fa-wrench"></i>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Settings 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Settings 2
                              </a>
                            </div>
                          </li>
                          <li>
                            <a className="close-link">
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                      <div className="x_content">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix"></div>

                  <div className="col-md-6 col-sm-6  ">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>
                          Hover rows <small>Try hovering over the rows</small>
                        </h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li>
                            <a className="collapse-link">
                              <i className="fa fa-chevron-up"></i>
                            </a>
                          </li>
                          <li className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-expanded="false"
                            >
                              <i className="fa fa-wrench"></i>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Settings 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Settings 2
                              </a>
                            </div>
                          </li>
                          <li>
                            <a className="close-link">
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                      <div className="x_content">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6  ">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>
                          Bordered table <small>Bordered table subtitle</small>
                        </h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li>
                            <a className="collapse-link">
                              <i className="fa fa-chevron-up"></i>
                            </a>
                          </li>
                          <li className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-expanded="false"
                            >
                              <i className="fa fa-wrench"></i>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Settings 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Settings 2
                              </a>
                            </div>
                          </li>
                          <li>
                            <a className="close-link">
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                      <div className="x_content">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix"></div>

                  <div className="col-md-12 col-sm-12  ">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>
                          Table design <small>Custom design</small>
                        </h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li>
                            <a className="collapse-link">
                              <i className="fa fa-chevron-up"></i>
                            </a>
                          </li>
                          <li className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-expanded="false"
                            >
                              <i className="fa fa-wrench"></i>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Settings 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Settings 2
                              </a>
                            </div>
                          </li>
                          <li>
                            <a className="close-link">
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>

                      <div className="x_content">
                        <p>
                          Add className <code>bulk_action</code> to table for
                          bulk actions options on row select
                        </p>

                        <div className="table-responsive">
                          <table className="table table-striped jambo_table bulk_action">
                            <thead>
                              <tr className="headings">
                                <th>
                                  <input
                                    type="checkbox"
                                    id="check-all"
                                    className="flat"
                                  />
                                </th>
                                <th className="column-title">Invoice </th>
                                <th className="column-title">Invoice Date </th>
                                <th className="column-title">Order </th>
                                <th className="column-title">Bill to Name </th>
                                <th className="column-title">Status </th>
                                <th className="column-title">Amount </th>
                                <th className="column-title no-link last">
                                  <span className="nobr">Action</span>
                                </th>
                                <th className="bulk-actions" colSpan={7}>
                                  <a
                                    className="antoo"
                                    style={{ color: "#fff", fontWeight: "500" }}
                                  >
                                    Bulk Actions ({" "}
                                    <span className="action-cnt"> </span> ){" "}
                                    <i className="fa fa-chevron-down"></i>
                                  </a>
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr className="even pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000040</td>
                                <td className=" ">May 23, 2014 11:47:56 PM </td>
                                <td className=" ">
                                  121000210{" "}
                                  <i className="success fa fa-long-arrow-up"></i>
                                </td>
                                <td className=" ">John Blank L</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$7.45</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="odd pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000039</td>
                                <td className=" ">May 23, 2014 11:30:12 PM</td>
                                <td className=" ">
                                  121000208{" "}
                                  <i className="success fa fa-long-arrow-up"></i>
                                </td>
                                <td className=" ">John Blank L</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$741.20</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="even pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000038</td>
                                <td className=" ">May 24, 2014 10:55:33 PM</td>
                                <td className=" ">
                                  121000203{" "}
                                  <i className="success fa fa-long-arrow-up"></i>
                                </td>
                                <td className=" ">Mike Smith</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$432.26</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="odd pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000037</td>
                                <td className=" ">May 24, 2014 10:52:44 PM</td>
                                <td className=" ">121000204</td>
                                <td className=" ">Mike Smith</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$333.21</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="even pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000040</td>
                                <td className=" ">May 24, 2014 11:47:56 PM </td>
                                <td className=" ">121000210</td>
                                <td className=" ">John Blank L</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$7.45</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="odd pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000039</td>
                                <td className=" ">May 26, 2014 11:30:12 PM</td>
                                <td className=" ">
                                  121000208{" "}
                                  <i className="error fa fa-long-arrow-down"></i>
                                </td>
                                <td className=" ">John Blank L</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$741.20</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="even pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000038</td>
                                <td className=" ">May 26, 2014 10:55:33 PM</td>
                                <td className=" ">121000203</td>
                                <td className=" ">Mike Smith</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$432.26</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="odd pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000037</td>
                                <td className=" ">May 26, 2014 10:52:44 PM</td>
                                <td className=" ">121000204</td>
                                <td className=" ">Mike Smith</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$333.21</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>

                              <tr className="even pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000040</td>
                                <td className=" ">May 27, 2014 11:47:56 PM </td>
                                <td className=" ">121000210</td>
                                <td className=" ">John Blank L</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$7.45</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                              <tr className="odd pointer">
                                <td className="a-center ">
                                  <input
                                    type="checkbox"
                                    className="flat"
                                    name="table_records"
                                  />
                                </td>
                                <td className=" ">121000039</td>
                                <td className=" ">May 28, 2014 11:30:12 PM</td>
                                <td className=" ">121000208</td>
                                <td className=" ">John Blank L</td>
                                <td className=" ">Paid</td>
                                <td className="a-right a-right ">$741.20</td>
                                <td className=" last">
                                  <a href="#">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /page content --> */}

            {/* <!-- footer content --> */}
            <Footer />
            {/* <!-- /footer content --> */}
          </div>
        </div>
        <Helmet>
          <script src="/vendors/jquery/dist/jquery.min.js"></script>
          <script src="/vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
          <script src="/vendors/fastclick/lib/fastclick.js"></script>
          <script src="/vendors/nprogress/nprogress.js"></script>
          <script src="/vendors/Chart.js/dist/Chart.min.js"></script>
          <script src="/vendors/gauge.js/dist/gauge.min.js"></script>
          <script src="/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
          <script src="/vendors/iCheck/icheck.min.js"></script>
          <script src="/vendors/skycons/skycons.js"></script>
          <script src="/vendors/Flot/jquery.flot.js"></script>
          <script src="/vendors/Flot/jquery.flot.pie.js"></script>
          <script src="/vendors/Flot/jquery.flot.time.js"></script>
          <script src="/vendors/Flot/jquery.flot.stack.js"></script>
          <script src="/vendors/Flot/jquery.flot.resize.js"></script>
          <script src="/vendors/flot.orderbars/js/jquery.flot.orderBars.js"></script>
          <script src="/vendors/flot-spline/js/jquery.flot.spline.min.js"></script>
          <script src="/vendors/flot.curvedlines/curvedLines.js"></script>
          <script src="/vendors/DateJS/build/date.js"></script>
          <script src="/vendors/jqvmap/dist/jquery.vmap.js"></script>
          <script src="/vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
          <script src="/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
          <script src="/vendors/moment/min/moment.min.js"></script>
          <script src="/vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
          <script src="/build/js/custom.min.js"></script>
        </Helmet>
      </body>
    </div>
  );
}
export default Table;
