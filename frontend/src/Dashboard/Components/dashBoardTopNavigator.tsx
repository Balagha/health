import React from 'react'

function TopNavigator() {
  return (
    <div>
         {/*top navigation*/}
        <div className="top_nav">
            <div className="nav_menu">
                <div className="nav toggle">
                    <a href="null" id="menu_toggle"><i className="fa fa-bars"></i></a>
                </div>
                <nav className="nav navbar-nav">
                    <ul className="navbar-right style">
                        <li className="nav-item dropdown open" style={{paddingLeft: 15}}>
                            <a href=" " className="user-profile dropdown-toggle flex items-center"  id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                                <img src="/images/img.jpg" alt="" className=""/>John Doe
                            </a>
                            <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item"  href="/javascripts"> Profile</a>
                                <a className="dropdown-item"  href="/javascripts">
                                    <span className="badge bg-red pull-right">50%</span>
                                    <span>Settings</span>
                                </a>
                                <a className="dropdown-item"  href="/javascripts">Help</a>
                                <a className="dropdown-item"  href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
                            </div>
                        </li>

                        <li role="presentation" className="nav-item dropdown open">
                            <a href="/javascripts" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-envelope-o"></i>
                                <span className="badge bg-green">6</span>
                            </a>
                            <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                                <li className="nav-item">
                                    <a href="/null" className="dropdown-item">
                                        <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="null" className="dropdown-item">
                                        <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="null" className="dropdown-item">
                                        <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="null" className="dropdown-item">
                                        <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <div className="text-center">
                                        <a href="/#" className="dropdown-item">
                                            <strong>See All Alerts</strong>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/*/top navigation*/}
    </div>
  )
}

export default TopNavigator