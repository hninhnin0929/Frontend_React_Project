import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';

const FormikDemo = ()=>{

    // const validate = values=>{
    //     console.log("Validation called");
    //     const errors = {};
    //     if(!values.title)
    //     {
    //         errors.title = "Title required";
    //     }
    //     if(!values.description)
    //     {
    //         errors.description = "Description required";
    //     }
    //     return errors;
    // };

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            genre: ''
        },
        // validate,
        validationSchema: Yup.object({
            title: Yup.string()
                .max(15, 'Title must be 15 characters or less')
                .required('Title Required'),
            description: Yup.string()
            .max(20, 'Description must be 15 characters or less')
            .required('Description Required'),
            // genre: Yup.string()
            // .required('Required'),
        }),
        onSubmit: values => {
            console.log("values = ", values);
            // alert(JSON.stringify(values, null,2));
        }
    });

    console.log("Render ");
    return(
        <div className="container col-6">
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:                            
                    </label>
                    <input type="text"                            
                            className="form-control"
                            name="title"//name=initial value
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.title} //it works if name=initial value name
                    />
                    {formik.touched.title && formik.errors.title?  <div className="alert alert-danger">
                                                {formik.errors.title}
                                            </div> 
                                        : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description:                            
                    </label>
                    <textarea id="description" 
                              className="form-control"
                              name="description"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description?  <div className="alert alert-danger">
                            {formik.errors.description}
                        </div> 
                    : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">
                    Genre:                            
                    </label>
                    <select id="genre" 
                            className="form-control"
                            name="genre"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.genre}
                        >
                        <option>Si-Fi</option>
                        <option>Crime</option>
                        <option selected>Drama</option>
                        <option>Rumor</option>
                    </select>
                </div>
                <div className="">
                    <input type="submit" className="btn btn-primary" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}
export default FormikDemo;

