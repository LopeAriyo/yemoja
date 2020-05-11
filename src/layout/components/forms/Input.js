import React from "react";

const Input = props => {
    const element =
        props.element === "input" ? (
            props.type === "radio" || "checkbox" ? (
                <div className="question-options" id={props.id}>
                    {props.options.map(option => (
                        <div className="question-option">
                            <input
                                type={props.type}
                                key={option.id}
                                id={option.id}
                                name={option.name}
                                value={option.value}
                            />
                            <label htmlFor={option.id}>{option.name}</label>
                        </div>
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
        <div className="question">
            <label className="question-label" htmlFor={props.id}>
                {props.label}
            </label>
            <p className="instruction">{props.instruction}</p>
            {element}
        </div>
    );
};

export default Input;
