import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

class UserWelcome extends Component {
    renderEventCodeField(field) {
        console.log("renderEventCodeField", field);
        const { touched, error } = field.meta;
        const className = `mx-auto form-group ${ touched && error ? 'has-danger' : '' }`;
        return (
            <div className={className}>
                <input 
                    className="form-control"
                    type="text"
                    placeholder={field.placeholder}
                    {...field.input}
                />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log("Submit", values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col col-sm-auto text-center">
                        <h1 className="display-3 text-center title">dj you</h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="row justify-content-center">
                        <div className="col-sm-auto">
                            <Field 
                                name="sessionCode"
                                placeholder="Enter Code"
                                component={this.renderEventCodeField} 
                            />  
                        </div> 
                        <div className="col-sm-auto text-center">
                            <button type="submit" className="btn btn-primary">Join</button>
                        </div>
                    </div>
                </form>

                <div className="row justify-content-center">
                    <div className="col col-sm text-center">
                        <Link to="/session/create" className="btn btn-primary">New Event</Link>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.sessionCode) {
        errors.sessionCode = "Please enter a session code";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'JoinSessionForm'
})(
    connect(null, null)(UserWelcome)
);