import React from 'react';
import TopTiles from "./topTiles";
import DashboardSideBar from "./dashboardSideBar";
import DashBoardMenuFooter from "./dashBoardMenuFooter";
import TopNavigator from "./dashBoardTopNavigator";
import {Helmet} from "react-helmet";
import VisitorLocation from "./visitorLocations";
import TodoList from "./todoList";
import Footer from "./footer";


export default function DashBoardMainSection() {
    return (
        <div>
            <Helmet>
                <link href="/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
                <link href="/vendors/nprogress/nprogress.css" rel="stylesheet"/>
                <link href="/vendors/iCheck/skins/flat/green.css" rel="stylesheet"/>
                <link href="/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet"/>
                <link href="/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
                <link href="/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet"/>
                <link href="/build/css/custom.min.css" rel="stylesheet" />
            </Helmet>
            <body className="nav-md">
                <div className="container body" style={{margin:0}}>
                    <div className="main_container">
                        <div className="col-md-3 left_col">
                            <div className="left_col scroll-view">
                                <div className="navbar nav_title" style={{border: 0}}>
                                    <a href="index.html" className="site_title"><i className="fa fa-heart"></i> <span>Gentelella Alela!</span></a>
                                </div>
                                <div className="clearfix"></div>
                                {/*menu profile quick info */}
                                <div className="profile clearfix">
                                    <div className="profile_pic">
                                        <img src="/images/img.jpg" alt="..." className="img-circle profile_img"/>
                                    </div>
                                    <div className="profile_info">
                                        <span>Welcome,</span>
                                        <h2>John Doe</h2>
                                    </div>
                                </div>
                                <br/>
                                {/*/menu profile quick info*/}
                                <DashboardSideBar/>
                                <DashBoardMenuFooter/>
                            </div>
                        </div>
                        <TopNavigator/>
                        <TopTiles/>
                        <Footer/>
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
)
}

