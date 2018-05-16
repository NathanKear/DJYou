import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { createEvent, joinEvent } from '../actions'

class UserWelcome extends Component {
    renderEventCodeField(field) {
        //console.log("renderEventCodeField", field);
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

    onSubmit({sessionCode}) {
        console.log("Submit", sessionCode);

        return new Promise((resolve, reject) => {

            this.props.joinEvent(sessionCode, ({code}) => {
                this.props.history.push(`/${code}/view`);
                resolve();
            }, (error) => {
                reject();
            });
        }).catch(() => {
            throw new SubmissionError({
                sessionCode: 'Fail'
            });
        });
    }

    onCreateNewEvent() {
        console.log("New Event");
        this.props.createEvent(({code}) => {
            this.props.history.push(`/${code}/view`);
        });
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
                        <button
                            className="btn btn-primary"
                            onClick={this.onCreateNewEvent.bind(this)}
                        >New Event</button>
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
    connect(null, { createEvent, joinEvent })(UserWelcome)
);