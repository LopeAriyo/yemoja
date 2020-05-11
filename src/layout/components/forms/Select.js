import React from "react";

const Select = props => {
    return (
        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <select
                id={props.id}
                name={props.name}
                form={props.form}
                onChange={props.handleChange}
            ></select>
        </React.Fragment>
    );
};

export default Select;
