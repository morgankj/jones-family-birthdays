import React from "react";
import styled from "styled-components";

export default function UserForm(props) {
    const { formValues, formErrors, formSubmit, inputChange, disabled } = props;

    const onSubmit = event => {
        event.preventDefault();
        formSubmit();
    };

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue);
    }

    return (
        <StyledUserForm>
            <h1>Create an Account</h1>
            <form className="formContainer" onSubmit={onSubmit} >
                <div className="errors">
                    <div>{formErrors.first_name}</div>
                    <div>{formErrors.last_name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.confirmPassword}</div>
                    <div>{formErrors.tos}</div>
                </div>
                <div className="formInputs" >
                    <label>First Name&nbsp;
                        <input 
                            value = {formValues.first_name}
                            onChange = {onChange}
                            name = 'first_name'
                            type = 'text'
                        />
                    </label>
                    <label>Last Name&nbsp;
                        <input 
                            value = {formValues.last_name}
                            onChange = {onChange}
                            name = 'last_name'
                            type = 'text'
                        />
                    </label>
                    <label>Email&nbsp;
                        <input 
                            value = {formValues.email}
                            onChange = {onChange}
                            name = 'email'
                            type = 'email'
                        />
                    </label>
                    <label>Password&nbsp;
                        <input 
                            value = {formValues.password}
                            onChange = {onChange}
                            name = 'password'
                            type = 'password'
                        />
                    </label>
                </div>
                <button disabled={disabled} id="submit">SUBMIT</button>
            </form>
        </StyledUserForm>
    );
}

const StyledUserForm = styled.div
`
`
