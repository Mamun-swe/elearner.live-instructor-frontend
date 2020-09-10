import React from 'react';
import { Icon } from 'react-icons-kit';
import {
    // view,
    // pen_1,
    // bin,
    speech_bubbles,
    mail
} from 'react-icons-kit/ikons';
import { Link } from 'react-router-dom';
import MobileImg from '../assets/mobile.png';

const CoursesTable = ({ courses }) => {
    return (
        <div className="data">

            {courses.length > 0 && courses.map((course, i) =>
                <div className="d-lg-flex border-bottom py-3 course" key={i}>
                    <div className="p-1">
                        <img src={MobileImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="p-2 content">
                        <h5>Mobile app development with react native</h5>
                        <ul>
                            <li><p><span>Enrollment:</span> 100</p></li>
                            <li className="pl-lg-3"><p><span>Pre-Register:</span> 100</p></li>
                            {/* <li className="pl-lg-3"><p><span>Instructor Name:</span> Abdullah Al Mamun</p></li> */}
                        </ul>
                        {/* <small className="d-lg-none">Last updated on 12 aug</small> */}
                    </div>

                    {/* Next update */}
                    <div className="ml-auto buttons">
                        <ul>
                            <li>
                                <Link to={`/instructor/${course.id}/send-message`} type="button" className="btn btn-light text-muted rounded-circle shadow-none">
                                    <Icon icon={speech_bubbles} size={20} />
                                </Link>
                                <Link to={`/instructor/${course.id}/send-mail`} type="button" className="btn btn-light text-muted rounded-circle shadow-none">
                                    <Icon icon={mail} size={20} />
                                </Link>
                            </li>
                        </ul>
                        {/* <small className="d-none d-lg-block mt-lg-2">Last updated on 12 aug</small> */}
                    </div>
                </div>
            )}

        </div>
    );
};

export default CoursesTable;