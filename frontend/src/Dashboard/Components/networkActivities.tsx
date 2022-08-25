import React from 'react'
import AppVersionsArea from "./appVersionsArea";
function NetworkActivities() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12 ">
          <div className="dashboard_graph">

            <div className="row x_title">
              <div className="col-md-6">
                <h3>Network Activities <small>Graph title sub-title</small></h3>
              </div>
              <div className="col-md-6">
                <div id="reportrange" className="pull-right"
                     style={{background:"#fff",cursor:"pointer", paddingLeft: "5px", paddingRight: "10px",border:1, borderColor:"#ccc"}}>
                  <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
                  <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-9 ">
              <div id="chart_plot_01" className="demo-placeholder">
                <canvas className="flot-base"
                        style={{direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "584px", height: "280px"}}
                        width="584" height="280"></canvas>
                <div className="flot-text"
                     style={{position: "absolute", inset: "0px", fontSize:"smaller", color: "rgb(84, 84, 84)"}}>
                  <div className="flot-x-axis flot-x1-axis xAxis x1Axis"
                       style={{position: "absolute", inset: "0px", display: "block"}}>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", maxWidth: "99px", top: "263px", left: "30px", textAlign: "center"}}>Jan
                      01
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", maxWidth: "99px", top: "263px", left: "121px", textAlign: "center"}}>Jan
                      02
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", maxWidth: "99px", top: "263px", left: "211px", textAlign: "center"}}>Jan
                      03
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", maxWidth: "99px", top: "263px", left: "302px", textAlign: "center"}}>Jan
                      04
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", maxWidth: "99px", top: "263px", left: "392px", textAlign: "center"}}>Jan
                      05
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", maxWidth: "99px", top: "263px", left: "483px", textAlign: "center"}}>Jan
                      06
                    </div>
                  </div>
                  <div className="flot-y-axis flot-y1-axis yAxis y1Axis"
                       style={{position: "absolute", inset: "0px", display: "block"}}>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "250px", left: "13px", textAlign: "right"}}>0
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "231px", left: "7px", textAlign: "right"}}>10
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "212px", left: "7px", textAlign: "right"}}>20
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "192px", left: "7px", textAlign: "right"}}>30
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "173px", left: "7px", textAlign: "right"}}>40
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "154px", left: "7px", textAlign: "right"}}>50
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "135px", left: "7px", textAlign: "right"}}>60
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "115px", left: "7px", textAlign: "right"}}>70
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "96px", left: "7px", textAlign: "right"}}>80
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "77px", left: "7px", textAlign: "right"}}>90
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "58px", left: "1px", textAlign: "right"}}>100
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "38px", left: "2px", textAlign: "right"}}>110
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "19px", left: "1px", textAlign: "right"}}>120
                    </div>
                    <div className="flot-tick-label tickLabel"
                         style={{position: "absolute", top: "0px", left: "1px", textAlign: "right"}}>130
                    </div>
                  </div>
                </div>
                <canvas className="flot-overlay"
                        style={{direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "584px", height: "280px"}}
                        width="584" height="280"></canvas>
              </div>
            </div>
            <div className="col-md-3 col-sm-3  bg-white">
              <div className="x_title">
                <h2>Top Campaign Performance</h2>
                <div className="clearfix"></div>
              </div>

              <div className="col-md-12 col-sm-12 ">
                <div>
                  <p>Facebook Campaign</p>
                  <div className="">
                    <div className="progress progress_sm" style={{width:"76%"}}>
                      <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="80"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Twitter Campaign</p>
                  <div className="">
                    <div className="progress progress_sm" style={{width:"76%"}}>
                      <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 ">
                <div>
                  <p>Conventional Media</p>
                  <div className="">
                    <div className="progress progress_sm" style={{width:"76%"}}>
                      <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="40"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Bill boards</p>
                  <div className="">
                    <div className="progress progress_sm" style={{width:"76%"}}>
                      <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="clearfix"></div>
          </div>
        </div>

      </div>
      <br/>
      <AppVersionsArea/>


    </>
  )
}

export default NetworkActivities