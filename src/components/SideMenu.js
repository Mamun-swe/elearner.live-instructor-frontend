import React from 'react';
import '../styles/Side-Menu.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import {
    ic_dashboard,
    ic_apps,
    ic_list,
    ic_settings,
    ic_account_circle,
    ic_notifications,
    ic_power_settings_new
} from 'react-icons-kit/md';
import Logo from '../assets/static/logo.png';

const SideMenu = (props) => {
    const history = useHistory();

    const notificationsCount = "10000000";

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="menu">
            <div className={props.show ? "side-menu open-menu shadow" : "side-menu shadow"}>
                <div className="logo-section mb-3 text-lg-center">
                    <img src={Logo} className="img-fluid" alt="..." />
                </div>

                <NavLink exact activeClassName="isActive" to="/instructor/">
                    <Icon icon={ic_dashboard} size={18} />
                    <span className="ml-2">dashboard</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/instructor/running-courses">
                    <Icon icon={ic_apps} size={18} />
                    <span className="ml-2">My Running Courses</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/instructor/all-courses">
                    <Icon icon={ic_list} size={18} />
                    <span className="ml-2">My All Courses</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/instructor/notifications">
                    <div className="d-flex">
                        <div>
                            <Icon icon={ic_notifications} size={18} />
                            <span className="ml-2">Notifications</span>
                        </div>
                        <div className="ml-auto">
                            {notificationsCount.length > 3 ?
                                <span>{notificationsCount.slice(0, 3)}+</span>
                                :
                                <span>{notificationsCount}</span>
                            }
                        </div>
                    </div>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/instructor/settings">
                    <Icon icon={ic_settings} size={18} />
                    <span className="ml-2">Settings</span>
                </NavLink>

                <NavLink exact activeClassName="isActive" to="/instructor/profile/me">
                    <Icon icon={ic_account_circle} size={18} />
                    <span className="ml-2">My Profile</span>
                </NavLink>



                <button type="button" className="btn btn-block shadow-none rounded-0" onClick={logout}>
                    <Icon icon={ic_power_settings_new} size={18} />
                    <span className="ml-2">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default SideMenu;