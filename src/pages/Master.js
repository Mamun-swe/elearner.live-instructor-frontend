import React, { useState } from 'react';
import "../styles/Master.scss"
import { Icon } from 'react-icons-kit';
import { Switch, Route } from 'react-router-dom';
import { ic_close, ic_dehaze } from 'react-icons-kit/md';
import Logo from '../assets/static/logo.png';

import SideMenu from '../components/SideMenu';
import Dashboard from '../pages/Dashboard/Index';
import RunningCourses from '../pages/Running_Courses/Index';
import MailIndex from '../pages/Running_Courses/MailIndex';
import MessageIndex from '../pages/Running_Courses/MessageIndex';
import AllCourses from '../pages/All_Courses/Index';


const Master = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="master">

            {/* Mobile Navbar */}
            <div className="custom-navbar shadow-sm d-lg-none">
                <div className="d-flex">
                    <div>
                        <img src={Logo} alt="..." />
                    </div>
                    <div className="ml-auto">
                        {show ? (
                            <button
                                type="button"
                                className="btn btn-light rounded-circle shadow-none"
                                onClick={() => setShow(false)}
                            >
                                <Icon icon={ic_close} size={24} />
                            </button>
                        ) :
                            <button
                                type="button"
                                className="btn btn-light rounded-circle shadow-none"
                                onClick={() => setShow(true)}
                            >
                                <Icon icon={ic_dehaze} size={24} />
                            </button>
                        }
                    </div>
                </div>
            </div>

            {/* Side Menu Bar */}
            <SideMenu show={show} />

            {/* Main */}
            <div className="main">
                <Switch>
                    <Route exact path="/instructor/" component={Dashboard} />
                    <Route exact path="/instructor/running-courses" component={RunningCourses} />
                    <Route exact path="/instructor/:courseId/send-mail" component={MailIndex} />
                    <Route exact path="/instructor/:courseId/send-message" component={MessageIndex} />
                    <Route exact path="/instructor/all-courses" component={AllCourses} />

                    <Route path="*">
                        <h3 className="text-center mt-5 pt-5 pt-lg-0"><b>404 Page not found x</b></h3>
                    </Route>
                </Switch>
            </div>

        </div>
    );
};

export default Master;