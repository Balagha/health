import React from 'react'
import VisitorLocation from "./visitorLocations";
import TodoList from "./todoList";

function RecentActivities() {
  return (
    <>
        {/*<div className="row">*/}
            <div className="col-md-4 col-sm-4 ">
                <div className="x_panel">
                    <div className="x_title">
                        <h2>Recent Activities <small>Sessions</small></h2>
                        <ul className="nav navbar-right panel_toolbox">
                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-expanded="false"><i className="fa fa-wrench"></i></a>
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

                            <ul className="list-unstyled timeline widget">
                                <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie
                                                makers. They were where you met the producers that could fund your
                                                project, and if the buyers liked your flick, they’d pay to Fast-forward
                                                and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie
                                                makers. They were where you met the producers that could fund your
                                                project, and if the buyers liked your flick, they’d pay to Fast-forward
                                                and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie
                                                makers. They were where you met the producers that could fund your
                                                project, and if the buyers liked your flick, they’d pay to Fast-forward
                                                and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block">
                                        <div className="block_content">
                                            <h2 className="title">
                                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                            </h2>
                                            <div className="byline">
                                                <span>13 hours ago</span> by <a>Jane Smith</a>
                                            </div>
                                            <p className="excerpt">Film festivals used to be do-or-die moments for movie
                                                makers. They were where you met the producers that could fund your
                                                project, and if the buyers liked your flick, they’d pay to Fast-forward
                                                and… <a>Read&nbsp;More</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <VisitorLocation/>
    </>
  )
}

export default RecentActivities