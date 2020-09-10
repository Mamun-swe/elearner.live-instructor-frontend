import React, { useState } from 'react';
import "../../styles/Message.scss";
import { useForm } from "react-hook-form";
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md';
import { Link } from 'react-router-dom';

const MessageIndex = () => {
    const { register, handleSubmit, errors } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = data => {
        setLoading(true)
        console.log(data);
    }


    return (
        <div className="message">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-lg-0 mb-4 mb-lg-0">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white p-4">
                                <div className="d-flex">
                                    <div><h5 className="mb-0">Course Message</h5></div>
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

                                    {/* Class Select */}
                                    <div className="form-group mb-4">
                                        {errors.course_class && errors.course_class.message ? (
                                            <small className="text-danger">{errors.course_class && errors.course_class.message}</small>
                                        ) : <small>Select class</small>
                                        }
                                        <select
                                            name="course_class"
                                            className="form-control shadow-none"
                                            ref={register({
                                                required: "Class is required",
                                            })}
                                        >
                                            <option value="class_1">Class 1</option>
                                            <option value="class_2">Class 2</option>
                                            <option value="class_3">Class 3</option>
                                        </select>
                                    </div>


                                    {/* Video Drive Link */}
                                    <div className="form-group mb-4">
                                        {errors.video_link && errors.video_link.message ? (
                                            <small className="text-danger">{errors.video_link && errors.video_link.message}</small>
                                        ) : <small>video drive link</small>
                                        }
                                        <input
                                            type="text"
                                            name="video_link"
                                            className="form-control shadow-none"
                                            placeholder="https://drive.google.com/drive/"
                                            ref={register({
                                                required: "Video drive link is required",
                                            })}
                                        />
                                    </div>


                                    {/* Video Drive Link */}
                                    <div className="form-group mb-4">
                                        {errors.ppt_link && errors.ppt_link.message ? (
                                            <small className="text-danger">{errors.ppt_link && errors.ppt_link.message}</small>
                                        ) : <small>PPT drive link</small>
                                        }
                                        <input
                                            type="text"
                                            name="ppt_link"
                                            className="form-control shadow-none"
                                            placeholder="https://drive.google.com/drive/"
                                            ref={register({
                                                required: "PPT drive link is required",
                                            })}
                                        />
                                    </div>


                                    <div className="text-right">
                                        <button type="submit" className="btn shadow-none text-white">
                                            {loading ? <span>Submitting...</span> :
                                                <span>Submit</span>
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

export default MessageIndex;