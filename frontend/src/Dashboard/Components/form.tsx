import React from "react";
import { Helmet } from "react-helmet";
import DashBoardFullSidebar from "./dashBoardfullSidebar";
import DashboardSideBar from "./dashboardSideBar";
import TopNavigator from "./dashBoardTopNavigator";

import Footer from "./footer";

function Form() {
  return (
    <div>
      <Helmet>
        <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="../vendors/nprogress/nprogress.css" rel="stylesheet"/>
        <link href="../build/css/custom.min.css" rel="stylesheet"/>
      </Helmet>

      <body className="nav-md">
    <div className="container body">
      <div className="main_container">
        <div className="col-md-3 left_col">
          <div className="left_col scroll-view">
            <div className="navbar nav_title" style={{border: "0"}}>
              <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
            </div>

            <div className="clearfix"></div>

            {/* <!-- menu profile quick info --> */}
            <div className="profile clearfix">
              <div className="profile_pic">
                <img src="images/img.jpg" alt="..." className="img-circle profile_img"/>
              </div>
              <div className="profile_info">
                <span>Welcome,</span>
                <h2>John Doe</h2>
              </div>
            </div>
            {/* <!-- /menu profile quick info --> */}

            <br />

            {/* <!-- sidebar menu --> */}
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
              <div className="menu_section">
                <h3>General</h3>
                <ul className="nav side-menu">
                  <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="index.html">Dashboard</a></li>
                      <li><a href="index2.html">Dashboard2</a></li>
                      <li><a href="index3.html">Dashboard3</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="form.html">General Form</a></li>
                      <li><a href="form_advanced.html">Advanced Components</a></li>
                      <li><a href="form_validation.html">Form Validation</a></li>
                      <li><a href="form_wizards.html">Form Wizard</a></li>
                      <li><a href="form_upload.html">Form Upload</a></li>
                      <li><a href="form_buttons.html">Form Buttons</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-desktop"></i> UI Elements <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="general_elements.html">General Elements</a></li>
                      <li><a href="media_gallery.html">Media Gallery</a></li>
                      <li><a href="typography.html">Typography</a></li>
                      <li><a href="icons.html">Icons</a></li>
                      <li><a href="glyphicons.html">Glyphicons</a></li>
                      <li><a href="widgets.html">Widgets</a></li>
                      <li><a href="invoice.html">Invoice</a></li>
                      <li><a href="inbox.html">Inbox</a></li>
                      <li><a href="calendar.html">Calendar</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="tables.html">Tables</a></li>
                      <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="chartjs.html">Chart JS</a></li>
                      <li><a href="chartjs2.html">Chart JS2</a></li>
                      <li><a href="morisjs.html">Moris JS</a></li>
                      <li><a href="echarts.html">ECharts</a></li>
                      <li><a href="other_charts.html">Other Charts</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-clone"></i>Layouts <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                      <li><a href="fixed_footer.html">Fixed Footer</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="menu_section">
                <h3>Live On</h3>
                <ul className="nav side-menu">
                  <li><a><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="e_commerce.html">E-commerce</a></li>
                      <li><a href="projects.html">Projects</a></li>
                      <li><a href="project_detail.html">Project Detail</a></li>
                      <li><a href="contacts.html">Contacts</a></li>
                      <li><a href="profile.html">Profile</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-windows"></i> Extras <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                      <li><a href="page_403.html">403 Error</a></li>
                      <li><a href="page_404.html">404 Error</a></li>
                      <li><a href="page_500.html">500 Error</a></li>
                      <li><a href="plain_page.html">Plain Page</a></li>
                      <li><a href="login.html">Login Page</a></li>
                      <li><a href="pricing_tables.html">Pricing Tables</a></li>
                    </ul>
                  </li>
                  <li><a><i className="fa fa-sitemap"></i> Multilevel Menu <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu">
                        <li><a href="#level1_1">Level One</a>
                        <li><a>Level One<span className="fa fa-chevron-down"></span></a>
                          <ul className="nav child_menu">
                            <li className="sub_menu"><a href="level2.html">Level Two</a>
                            </li>
                            <li><a href="#level2_1">Level Two</a>
                            </li>
                            <li><a href="#level2_2">Level Two</a>
                            </li>
                          </ul>
                        </li></li>
                        <li><a href="#level1_2">Level One</a>
                        </li>
                    </ul>
                  </li>                  
                  <li><a href="javascript:void(0)"><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
                </ul>
              </div>

            </div>
            {/* <!-- /sidebar menu --> */}

            {/* <!-- /menu footer buttons --> */}
            <div className="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            {/* <!-- /menu footer buttons --> */}
          </div>
        </div>

        {/* <!-- top navigation --> */}
        <div className="top_nav">
            <div className="nav_menu">
                <div className="nav toggle">
                  <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                </div>
                <nav className="nav navbar-nav">
                <ul className=" navbar-right">
                  <li className="nav-item dropdown open" style={{paddingLeft: "15px"}}>
                    <a href="javascript:;" className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                      <img src="images/img.jpg" alt=""/>John Doe
                    </a>
                    <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item"  href="javascript:;"> Profile</a>
                        <a className="dropdown-item"  href="javascript:;">
                          <span className="badge bg-red pull-right">50%</span>
                          <span>Settings</span>
                        </a>
                    <a className="dropdown-item"  href="javascript:;">Help</a>
                      <a className="dropdown-item"  href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
                    </div>
                  </li>
  
                  <li role="presentation" className="nav-item dropdown open">
                    <a href="javascript:;" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-envelope-o"></i>
                      <span className="badge bg-green">6</span>
                    </a>
                    <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <div className="text-center">
                          <a className="dropdown-item">
                            <strong>See All Alerts</strong>
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        {/* <!-- /top navigation --> */}

        {/* <!-- page content --> */}
        <div className="right_col" role="main">
          <div className="">
            <div className="page-title">
              <div className="title_left">
                <h3>Form Wizards</h3>
              </div>

              <div className="title_right">
                <div className="col-md-5 col-sm-5  form-group row pull-right top_search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
                              <button className="btn btn-secondary" type="button">Go!</button>
                          </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>

            <div className="row">

              <div className="col-md-12 col-sm-12 ">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Form Wizards <small>Sessions</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">


                    {/* <!-- Smart Wizard --> */}
                    <p>This is a basic form wizard example that inherits the colors from the selected scheme.</p>
                    <div id="wizard" className="form_wizard wizard_horizontal">
                      <ul className="wizard_steps">
                        <li>
                          <a href="#step-1">
                            <span className="step_no">1</span>
                            <span className="step_descr">
                                              Step 1<br />
                                              <small>Step 1 description</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-2">
                            <span className="step_no">2</span>
                            <span className="step_descr">
                                              Step 2<br />
                                              <small>Step 2 description</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-3">
                            <span className="step_no">3</span>
                            <span className="step_descr">
                                              Step 3<br />
                                              <small>Step 3 description</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-4">
                            <span className="step_no">4</span>
                            <span className="step_descr">
                                              Step 4<br />
                                              <small>Step 4 description</small>
                                          </span>
                          </a>
                        </li>
                      </ul>
                      <div id="step-1">
                        <form className="form-horizontal form-label-left">

                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="first-name">First Name <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6 ">
                              <input type="text" id="first-name" required className="form-control  "/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="last-name">Last Name <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6 ">
                              <input type="text" id="last-name" name="last-name" required className="form-control "/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="middle-name" className="col-form-label col-md-3 col-sm-3 label-align">Middle Name / Initial</label>
                            <div className="col-md-6 col-sm-6 ">
                              <input id="middle-name" className="form-control col" type="text" name="middle-name"/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align">Gender</label>
                            <div className="col-md-6 col-sm-6 ">
                              <div id="gender" className="btn-group" data-toggle="buttons">
                                <label className="btn btn-secondary" data-toggle-className="btn-primary" data-toggle-passive-className="btn-secondary">
                                  <input type="radio" name="gender" value="male" className="join-btn"/> &nbsp; Male &nbsp;
                                </label>
                                <label className="btn btn-primary" data-toggle-className="btn-primary" data-toggle-passive-className="btn-secondary">
                                  <input type="radio" name="gender" value="female" className="join-btn"/> Female
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align">Date Of Birth <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6 ">
                              <input id="birthday" className="date-picker form-control" required type="text"/>
                            </div>
                          </div>

                        </form>

                      </div>
                      <div id="step-2">
                        <h2 className="StepTitle">Step 2 Content</h2>
                        <p>
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                      <div id="step-3">
                        <h2 className="StepTitle">Step 3 Content</h2>
                        <p>
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                      <div id="step-4">
                        <h2 className="StepTitle">Step 4 Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>

                    </div>
                    {/* <!-- End SmartWizard Content --> */}





                    <h2>Example: Vertical Style</h2>
                    {/* <!-- Tabs --> */}
                    <div id="wizard_verticle" className="form_wizard wizard_verticle">
                      <ul className="list-unstyled wizard_steps">
                        <li>
                          <a href="#step-11">
                            <span className="step_no">1</span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-22">
                            <span className="step_no">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-33">
                            <span className="step_no">3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-44">
                            <span className="step_no">4</span>
                          </a>
                        </li>
                      </ul>

                      <div id="step-11">
                        <h2 className="StepTitle">Step 1 Content</h2>
                        <form className="form-horizontal form-label-left">

                          <span className="section">Personal Info</span>

                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="first-name">First Name <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6">
                              <input type="text" id="first-name2" required className="form-control"/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="last-name">Last Name <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6">
                              <input type="text" id="last-name2" name="last-name" required className="form-control"/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="middle-name" className="col-form-label col-md-3 col-sm-3 label-align">Middle Name / Initial</label>
                            <div className="col-md-6 col-sm-6">
                              <input id="middle-name2" className="form-control " type="text" name="middle-name"/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align">Gender</label>
                            <div className="col-md-6 col-sm-6">
                              <div id="gender2" className="btn-group" data-toggle="buttons">
                                <label className="btn btn-secondary" data-toggle-className="btn-primary" data-toggle-passive-className="btn-secondary">
                                  <input type="radio" name="gender" value="male" className="join-btn"/> &nbsp; Male &nbsp;
                                </label>
                                <label className="btn btn-primary" data-toggle-className="btn-primary" data-toggle-passive-className="btn-secondary">
                                  <input type="radio" name="gender" value="female" className="join-btn" checked/> Female
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-form-label col-md-3 col-sm-3 label-align">Date Of Birth <span className="required">*</span>
                            </label>
                            <div className="col-md-6 col-sm-6">
                              <input id="birthday2" className="date-picker form-control" required type="text"/>
                            </div>
                          </div>

                        </form>
                      </div>
                      <div id="step-22">
                        <h2 className="StepTitle">Step 2 Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                      <div id="step-33">
                        <h2 className="StepTitle">Step 3 Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                      <div id="step-44">
                        <h2 className="StepTitle">Step 4 Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                    {/* <!-- End SmartWizard Content --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /page content --> */}

        {/* <!-- footer content --> */}
        <footer>
          <div className="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
          </div>
          <div className="clearfix"></div>
        </footer>
        {/* <!-- /footer content --> */}
      </div>
    </div>

    <Helmet>
        {/* <!-- jQuery --> */}
        <script src="../vendors/jquery/dist/jquery.min.js"></script>
        {/* <!-- Bootstrap --> */}
        <script src="../vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- FastClick --> */}
        <script src="../vendors/fastclick/lib/fastclick.js"></script>
        {/* <!-- NProgress --> */}
        <script src="../vendors/nprogress/nprogress.js"></script>
        {/* <!-- jQuery Smart Wizard --> */}
        <script src="../vendors/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
        {/* <!-- Custom Theme Scripts --> */}
        <script src="../build/js/custom.min.js"></script>
    </Helmet>
	
  </body>

    </div>
  );
}
export default Form;