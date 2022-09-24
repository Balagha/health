import React from "react";
import { Helmet } from "react-helmet";
import DashBoardFullSidebar from "./dashBoardfullSidebar";
import DashboardSideBar from "./dashboardSideBar";
import TopNavigator from "./dashBoardTopNavigator";

import Footer from "./footer";
import ShowAndHidePassword from "./showhide_password";


function Form() {
  return (
    <div>
      <Helmet>
        {/* <!-- Bootstrap --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
        <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
        {/* <!-- Font Awesome --> */}
        <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
        {/* <!-- NProgress --> */}
        <link href="../vendors/nprogress/nprogress.css" rel="stylesheet"/>
        {/* <!-- Custom Theme Style --> */}
        <link href="../build/css/custom.min.css" rel="stylesheet"/>
      </Helmet>
      
      <body className="nav-md">
        <div className="container body">
            <div className="main_container">
                <DashBoardFullSidebar/>
                <TopNavigator/>
                {/* <!-- /top navigation --> */}

                {/* <!-- page content --> */}
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Form Validation</h3>
                            </div>

                            <div className="title_right">
                                <div className="col-md-5 col-sm-5 form-group pull-right top_search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for..."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-default" type="button">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Form validation <small>sub title</small></h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li><a className="close-link"><i className="fa fa-close"></i></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="x_content">
                                        <form className="" action="" method="post" noValidate>
                                            <p>For alternative validation library <code>parsleyJS</code> check out in the <a href="form.html">form page</a>
                                            </p>
                                            <span className="section">Personal Info</span>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Name<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control" data-validate-length-range="6" data-validate-words="2" name="name" placeholder="ex. John f. Kennedy" required />
                                                </div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Occupation<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control" name="occupation" data-validate-length-range="5,15" type="text" /></div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">email<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control" name="email" required type="email" /></div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Confirm email address<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control" type="email"  name="confirm_email" data-validate-linked='email' required /></div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Number <span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control" type="number" name="number" data-validate-minmax="10,100"/></div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Date<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control"  type="date" name="date" required/></div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Time<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control"  type="time" name="time" required/></div>
                                            </div>
                                            
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Password<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                 <ShowAndHidePassword/> 
                                                </div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Repeat password<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control" type="password" name="password2" data-validate-linked='password' required /></div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">Telephone<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input className="form-control" type="tel"  name="phone" required data-validate-length-range="8,20" /></div>
                                            </div>
                                            <div className="field item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3  label-align">message<span className="required">*</span></label>
                                                <div className="col-md-6 col-sm-6">
                                                    <textarea required name='message'></textarea></div>
                                            </div>
                                            <div className="ln_solid">
                                                <div className="form-group">
                                                    <div className="col-md-6 offset-md-3">
                                                        <button type='submit' className="btn btn-primary">Submit</button>
                                                        <button type='reset' className="btn btn-success">Reset</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
            <script src="../vendors/validator/multifield.js"></script>
            <script src="../vendors/validator/validator.js"></script>
            {/* <!-- jQuery --> */}
            <script src="../vendors/jquery/dist/jquery.min.js"></script>
            {/* <!-- Bootstrap --> */}
            <script src="../vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            {/* <!-- FastClick --> */}
            <script src="../vendors/fastclick/lib/fastclick.js"></script>
            {/* <!-- NProgress --> */}
            <script src="../vendors/nprogress/nprogress.js"></script>
            {/* <!-- validator --> */}
            {/* <!-- <script src="../vendors/validator/validator.js"></script> --> */}

            {/* <!-- Custom Theme Scripts --> */}
            <script src="../build/js/custom.min.js"></script>
        </Helmet>

  </body>

    </div>
  );
}
export default Form;

