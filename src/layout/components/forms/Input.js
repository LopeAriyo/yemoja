import React, { useReducer } from "react";

import { validate } from "../../utils/validator";

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators),
            };
        case "TOUCH":
            return {
                ...state,
                isTouched: true,
            };
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: "",
        isTouched: false,
        isValid: false,
    });

    const handleChange = event => {
        dispatch({
            type: "CHANGE",
            value: event.target.value,
            validators: props.validators,
        });
    };

    const handleTouch = () => {
        dispatch({
            type: "TOUCH",
        });
    };

    const element =
        props.element === "input" ? (
            // props.type === "radio" || props.type === "checkbox" ? (
            //     <div className="question-options" id={props.id}>
            //         {props.options.map(option => (
            //             <label key={option.id} className="question-option">
            //                 <input
            //                     name={props.id}
            //                     type={props.type}
            //                     value={option.id}
            //                     checked={
            //                         props.formData[props.id]
            //                             ? props.formData[props.id].includes(
            //                                   option.id
            //                               )
            //                             : false
            //                     }
            //                 />
            //                 <p>{option.name}</p>
            //             </label>
            //         ))}
            //     </div>
            // ) : (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                className={props.className}
                onChange={handleChange}
                onBlur={handleTouch}
                value={inputState.value}
            />
        ) : (
            // )
            <textarea
                id={props.id}
                rows={props.rows || 3}
                className={props.className}
                onChange={handleChange}
                onBlur={handleTouch}
                value={inputState.value}
            />
        );

    return (
        <div key={props.id} className="question">
            <label className="question-label" htmlFor={props.id}>
                {props.label}
            </label>
            <p className="instruction">{props.instruction}</p>
            {element}
            {!inputState.isValid && inputState.isTouched && (
                <p
                    className={
                        props.errorTextClass ? "small-error-text" : "error-text"
                    }
                >
                    {props.errorText}
                </p>
            )}
        </div>
    );
};

export default Input;
