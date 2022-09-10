import React from 'react'
import QuickSettings from "./quickSettingsArea";

function DeviceUsages() {
  return (
    <>
        <div className="col-md-4 col-sm-4 ">
            <div className="x_panel tile fixed_height_320 overflow_hidden">
                <div className="x_title">
                    <h2>Device Usage</h2>
                    <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                            <a href="src/dashBoard/Components/deviceUsagesArea#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="src/dashBoard/Components/deviceUsagesArea#">Settings 1</a>
                                <a className="dropdown-item" href="src/dashBoard/Components/deviceUsagesArea#">Settings 2</a>
                            </div>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <table className="" style={{width:"100%"}}>
                        <tr>
                            <th style={{width:"37%"}}>
                                <p>Top 5</p>
                            </th>
                            <th>
                                <div className="col-lg-7 col-md-7 col-sm-7 ">
                                    <p className="">Device</p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 ">
                                    <p className="">Progress</p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <iframe className="chartjs-hidden-iframe"
                                        style={{width: "100%", display: "block", border: 0, height: 0, margin:0, position:"absolute",inset:0}}></iframe>
                                <canvas className="canvasDoughnut" height="140px" width="140px" style={{marginTop: "15px", marginRight:"10px", marginBottom:"10px",marginLeft:"0px"}}></canvas>
                            </td>
                            <td>
                                <table className="tile_info">
                                    <tr>
                                        <td>
                                            <p><i className="fa fa-square blue"></i>IOS </p>
                                        </td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><i className="fa fa-square green"></i>Android </p>
                                        </td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><i className="fa fa-square purple"></i>Blackberry </p>
                                        </td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><i className="fa fa-square aero"></i>Symbian </p>
                                        </td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><i className="fa fa-square red"></i>Others </p>
                                        </td>
                                        <td>30%</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <QuickSettings/>
    </>
  )
}

export default DeviceUsages;