import React from 'react';
// import { Icon } from 'react-icons-kit';
// import {
//     view,
//     pen_1,
//     bin
// } from 'react-icons-kit/ikons';
import MobileImg from '../assets/mobile.png';

const CoursesTable = ({ courses }) => {
    return (
        <div className="data">

            {courses.length > 0 && courses.map((course, i) =>
                <div className="d-lg-flex border-bottom py-3" key={i}>
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
                    {/* <div className="ml-auto buttons">
                        <ul>
                            <li>
                                <button type="button" className="btn btn-light rounded-circle shadow-none">
                                    <Icon icon={pen_1} size={20} />
                                </button>
                            </li>
                        </ul>
                        <small className="d-none d-lg-block mt-lg-2">Last updated on 12 aug</small>
                    </div> */}
                </div>
            )}

        </div>
    );
};

export default CoursesTable;