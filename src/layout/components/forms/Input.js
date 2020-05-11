import React from "react";

const Input = props => {
    const element =
        props.element === "input" ? (
            props.type === "radio" || "checkbox" ? (
                <div className="question-options" id={props.id}>
                    {props.options.map(option => (
                        <label key={option.id} className="question-option">
                            <input
                                name={props.id}
                                type={props.type}
                                value={option.id}
                                checked={
                                    props.formData[props.id]
                                        ? props.formData[props.id].includes(
                                              option.id
                                          )
                                        : false
                                }
                            />
                            <p>{option.name}</p>
                        </label>
                    ))}
                </div>
            ) : (
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={props.handleChange}
                />
            )
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={props.handleChange}
            />
        );

    return (
        <div key={props.id} className="question">
            <label className="question-label" htmlFor={props.id}>
                {props.label}
            </label>
            <p className="instruction">{props.instruction}</p>
            {element}
        </div>
    );
};

export default Input;
