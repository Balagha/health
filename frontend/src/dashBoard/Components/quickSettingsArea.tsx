import React from 'react'
import RecentActivities from "./recentActivities";

function QuickSettings() {
  return (
    <>
        <div className="col-md-4 col-sm-4 ">
            <div className="x_panel tile fixed_height_320">
                <div className="x_title">
                    <h2>Quick Settings</h2>
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
                    <div className="dashboard-widget-content">
                        <ul className="quick-list">
                            <li><i className="fa fa-calendar-o"></i><a href="#">Settings</a>
                            </li>
                            <li><i className="fa fa-bars"></i><a href="#">Subscription</a>
                            </li>
                            <li><i className="fa fa-bar-chart"></i><a href="#">Auto Renewal</a> </li>
                            <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a>
                            </li>
                            <li><i className="fa fa-bar-chart"></i><a href="#">Auto Renewal</a> </li>
                            <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a>
                            </li>
                            <li><i className="fa fa-area-chart"></i><a href="#">Logout</a>
                            </li>
                        </ul>

                        <div className="sidebar-widget">
                            <h4>Profile Completion</h4>
                            <canvas width="150" height="80" id="chart_gauge_01" className="" style={{width: "160px", height: "100px"}}></canvas>
                            <div className="goal-wrapper">
                                <span id="gauge-text" className="gauge-value pull-left">0</span>
                                <span className="gauge-value pull-left">%</span>
                                <span id="goal-text" className="goal-value pull-right">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RecentActivities/>

    </>
  )
}

export default QuickSettings