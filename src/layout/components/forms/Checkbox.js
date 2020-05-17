import React from "react";

const Checkbox = props => {
    return (
        <label className="question-option" key={`option-${props.id}`}>
            <input
                name={props.questionName}
                type={props.type}
                checked={props.checked}
                onChange={props.handleCheck}
                value={props.name}
                // checked={
                //     props.formAnswers[props.questionName]
                //         ? props.formAnswers[props.questionName].includes(
                //               props.name
                //           )
                //         : false
                // }
            />
            {props.label}
        </label>
    );
};

export default Checkbox;
