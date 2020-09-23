import React, { useState, useEffect } from 'react';
import "../../styles/Dashboard.scss";
import { Icon } from 'react-icons-kit';
import { star, starOutline, starHalf } from 'react-icons-kit/typicons';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';

const Index = () => {
    const [loading, setLoading] = useState(false)
    const [payments, setPayments] = useState([])

    useEffect(() => {
        const fatchDeshboardData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}users`)
                setPayments(response.data)
                setLoading(false)
            } catch (error) {
                /*TODO: 404-not found,500- unauthorized user*/
            }
        }

        fatchDeshboardData()
    }, [])
    return (
        <div className="dashboard">
            {/*TODO: MUST BE ADD LOADER*/}
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-lg-6 mb-4 pl-lg-0">
                            <div className="card border-0 shadow-sm card-1">
                                <div className="card-body">
                                    <h1>20 <span>Course completed</span></h1>
                                    <p>My current rating</p>
                                    <div>
                                        <Icon className="rating-icon" icon={star} size={28} />
                                        <Icon className="rating-icon" icon={star} size={28} />
                                        <Icon className="rating-icon" icon={starHalf} size={28} />
                                        <Icon className="rating-icon" icon={starOutline} size={28} />
                                        <Icon className="rating-icon" icon={starOutline} size={28} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-4 personal-info pr-lg-0">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <table className="table table-borderless table-sm">
                                        <tbody>
                                            <tr>
                                                <td>Id:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>Name:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>Phone:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>E-mail:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>Id:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>Join Date:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>Complete Course:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>Qualification:</td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>Review:</td>
                                                <td>123</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Payment History */}
                        <div className="col-12 px-lg-0 mb-4 payment-details">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <table className="table table-sm table-borderless table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <td>Date-Time</td>
                                                <td>Course Name</td>
                                                <td>Reason</td>
                                                <td>Amount</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {payments.length > 0 && payments.map((payment, i) =>
                                                <tr key={i}>
                                                    <td>10 Sep, 2020</td>
                                                    <td>Web develop with JavaScript</td>
                                                    <td>some reason</td>
                                                    <td>2000 tk.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="total-payment">
                                        <p className="mb-0">Total: 500 tk</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default Index;
