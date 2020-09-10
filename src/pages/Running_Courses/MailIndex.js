import React, { useState } from 'react';
import "../../styles/Mail.scss";
import { useForm } from "react-hook-form";
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md';
import { Link } from 'react-router-dom';

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = data => {
        setLoading(true)
        console.log(data);
    }

    return (
        <div className="mail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-lg-0 mb-4 mb-lg-0">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header">
                                <div className="d-flex">
                                    <div><h5 className="mb-0">Send Email:</h5></div>
                                    <div className="ml-auto">
                                        <Link to="/instructor/running-courses"
                                            type="button"
                                            className="btn p-1 btn-light rounded-0 shadow-none"
                                        >
                                            <Icon icon={ic_keyboard_arrow_left} size={26} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* Subject */}
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="subject"
                                            className={errors.subject ?
                                                "form-control shadow-none error" :
                                                "form-control shadow-none"
                                            }
                                            placeholder="Subject"
                                            ref={register({
                                                required: true,
                                            })}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="form-group mb-4">
                                        <textarea
                                            type="text"
                                            name="body"
                                            className={errors.body ?
                                                "form-control shadow-none error" :
                                                "form-control shadow-none"
                                            }
                                            placeholder="Mail Body"
                                            rows="12"
                                            ref={register({
                                                required: true,
                                            })}
                                        />
                                    </div>

                                    <div className="text-right">
                                        <button type="submit" className="btn shadow-none text-white">
                                            {loading ? <span>Sending...</span> :
                                                <span>Send</span>
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;