import React from "react";
import { Formik, useFormik } from "formik";

const FormikDemo = ()=>{

    const validate = values=>{
        const errors = {};
        if(!values.title)
        {
            errors.title = "Title required";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            genre: ''
        },
        validate,
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
                            onChange={formik.handleChange}
                            value={formik.values.title} //it works if name=initial value name
                    />
                    {formik.errors.title?  <div className="alert alert-danger">
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
                              onChange={formik.handleChange}
                              value={formik.values.description}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">
                    Genre:                            
                    </label>
                    <select id="genre" 
                            className="form-control"
                            name="genre"
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

