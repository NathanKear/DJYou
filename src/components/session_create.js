import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createEvent } from '../actions'
import _ from 'lodash';

const API_KEY = "7479dba15ac30b157f00e0566900bf68eed5aeaad4dff09d3";

class SessionCreate extends Component {

    renderCreateEventCodeField(field) {
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
        this.props.createEvent(values.newSessionCode, () => {
            this.props.history.push(`/${code}/view`);
        });
    }

    foo() {
        const code = _.random(100000, 999999);
        this.props.change('newSessionCode', code);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <div>
                    <p>Please enter a code for your event or click Random</p>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="row justify-content-center">
                        <div className="col-sm-auto">
                            <Field 
                                name="newSessionCode"
                                placeholder="Enter Code"
                                component={this.renderCreateEventCodeField} 
                            />  
                        </div> 
                        <div className="col-sm-auto text-center">
                            <button type="button" onClick={this.foo.bind(this)} className="btn btn-primary">Random</button>
                        </div>
                        <div className="col-sm-auto text-center">
                            <button type="submit" className="btn btn-primary">Create Event</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    const {newSessionCode} = values;

    if (!newSessionCode || newSessionCode.length < 6) {
        errors.newSessionCode = "Session code must contain six or more characters";
    } else if (newSessionCode.length >= 20) {
        errors.newSessionCode = "Session code must contain fewer than 20 characters";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'CreateSessionForm'
})(
    connect(null, { createEvent })(SessionCreate)
);