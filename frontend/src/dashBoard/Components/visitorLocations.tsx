import React from 'react'
import TodoList from "./todoList";
import AppVersionsArea from "./appVersionsArea";

function VisitorLocation() {
  return (
    <>
        <div className="col-md-8 col-sm-8 ">


            <div className="row">

                <div className="col-md-12 col-sm-12 ">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Visitors location <small>geo-presentation</small></h2>
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
                                <div className="col-md-4 hidden-small">
                                    <h2 className="line_30">125.7k Views from 60 countries</h2>

                                    <table className="countries_list">
                                        <tbody>
                                        <tr>
                                            <td>United States</td>
                                            <td className="fs15 fw700 text-right">33%</td>
                                        </tr>
                                        <tr>
                                            <td>France</td>
                                            <td className="fs15 fw700 text-right">27%</td>
                                        </tr>
                                        <tr>
                                            <td>Germany</td>
                                            <td className="fs15 fw700 text-right">16%</td>
                                        </tr>
                                        <tr>
                                            <td>Spain</td>
                                            <td className="fs15 fw700 text-right">11%</td>
                                        </tr>
                                        <tr>
                                            <td>Britain</td>
                                            <td className="fs15 fw700 text-right">10%</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="world-map-gdp" className="col-md-8 col-sm-12 " style={{height:"230px"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TodoList/>
        </div>
    </>
  )
}

export default VisitorLocation