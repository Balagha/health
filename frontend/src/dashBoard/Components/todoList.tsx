import React from 'react'
import DailyActiveUsers from "./dailyActiveUsers";

function TodoList() {
    return (
        <>
            <div className="row">
                <div className="col-md-6 col-sm-6 ">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>To Do List <small>Sample tasks</small></h2>
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

                            <div className="">
                                <ul className="to_do">
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Schedule meeting with new client
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Create email address for new intern
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Have IT fix the network printer
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Copy backups to offsite location
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Food truck fixie locavors mcsweeney
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Food truck fixie locavors mcsweeney
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Create email address for new intern
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Have IT fix the network printer
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <div className="icheckbox_flat-green" style={{position: "relative"}}><input
                                                type="checkbox" className="flat"
                                                style={{position: "absolute", opacity: 0}}/>
                                                <ins className="iCheck-helper"
                                                     style={{position: "absolute",top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255)", border:" 0px", opacity: 0}}></ins>
                                            </div>
                                            Copy backups to offsite location
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <DailyActiveUsers/>
            </div>
        </>
    )
}

export default TodoList