import React, { useEffect, useState } from 'react';
import '../../styles/courses.scss';
import { apiURL } from '../../utils/apiURL';
import axios from 'axios';
import AllCourseTable from '../../components/AllCoursesTable';

const Index = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCourses = () => {
            setLoading(true)
            axios.get(`${apiURL}users`)
                .then(res => {
                    setCourses(res.data)
                    setLoading(false)
                })
        }

        fetchCourses()
    }, [])

    return (
        <div className="index">
            {loading ?
                <p>Loading...</p> :

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 px-lg-0">
                            <div className="card border-0 data-card mb-4">
                                <div className="card-body">
                                    <AllCourseTable courses={courses} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
};

export default Index;