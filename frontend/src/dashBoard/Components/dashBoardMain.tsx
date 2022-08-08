import React from 'react';
import TopTiles from "./topTiles";
import DashboardSideBar from "./dashboardSideBar";
import DashBoardMenuFooter from "./dashBoardMenuFooter";
import TopNavigator from "./dashBoardTopNavigator";
import {Helmet} from "react-helmet";


export default function DashBoardMainSection() {
    return (
        <div>
            <Helmet>
                <link href="./vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="./vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
                <link href="./build/css/custom.min.css" rel="stylesheet"/>
            </Helmet>
            <body className="nav-md">
                <div className="container body" style={{margin:0}}>
                    <div className="main_container">
                        <div className="col-md-3 left_col">
                            <div className="left_col scroll-view">
                                <div className="navbar nav_title" style={{border: 0}}>
                                    <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
                                </div>
                                <div className="clearfix"></div>
                                {/*menu profile quick info */}
                                <div className="profile clearfix">
                                    <div className="profile_pic">
                                        <img src="src/Components/DashBoard/templeteConvert" alt="..." className="img-circle profile_img"/>
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

                    </div>
                </div>
            <Helmet>
                <script src="./vendors/jquery/dist/jquery.min.js"></script>
                <script src="./vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
                <script src="./build/js/custom.min.js"></script>
            </Helmet>
            </body>
        </div>
)
}

