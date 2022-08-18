import DashBoardMenuFooter from "./dashBoardMenuFooter";
import DashboardSideBar from "./dashboardSideBar";

function DashBoardFullSidebar(){
  return (
    <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <div className="navbar nav_title" style={{ border: 0 }}>
          <a href="/dashboard" className="site_title">
            {/* <i className="fa fa-heart"></i>{" "} */}
            <img src="/images/logo.svg" className="h-[50%] pr-2 inline-block" alt="" />
            <span>National Health Service</span>
          </a>
        </div>
        <div className="clearfix"></div>
        {/*menu profile quick info */}
        <div className="profile clearfix">
          <div className="profile_pic">
            <img
              src="/images/img.jpg"
              alt="..."
              className="img-circle profile_img"
            />
          </div>
          <div className="profile_info">
            <span>Welcome,</span>
            <h2>John Doe</h2>
          </div>
        </div>
        <br />
        {/*/menu profile quick info*/}
        <DashboardSideBar />
        <DashBoardMenuFooter />
      </div>
    </div>
  );
}
export default DashBoardFullSidebar;