import React, { useState } from "react";
// import Input from "../../../layout/components/forms/Input";
import Checkbox from "../../../layout/components/forms/Checkbox";

const NewPeriod = props => {
    const newPeriodQuestions = [
        {
            id: 1,
            name: "intensity",
            label: "How was your flow today?",
            instruction: "Rate today's intensity:",
            options: [
                { id: 1, name: "light", label: "Light" },
                { id: 2, name: "medium", label: "Medium" },
                { id: 3, name: "heavy", label: "Heavy" },
            ],
            element: "input",
            type: "radio",
        },
        {
            id: 2,
            name: "collection ",
            label: "Did you use any of the following?",
            instruction: "Select collection method:",
            options: [
                { id: 1, name: "tampon", label: "Tampon" },
                { id: 2, name: "pad", label: "Pad" },
                { id: 3, name: "menstural cup", label: "Menstural Cup" },
            ],
            element: "input",
            type: "checkbox",
        },
    ];

    const [checked, setChecked] = useState({ newPeriodForm: {} });

    const handleCheck = event => {
        const isCheckbox = event.target.type === "checkbox";

        if (isCheckbox) {
            setChecked({
                newPeriodForm: {
                    //add to state
                    ...checked.newPeriodForm,
                    [event.target.name]: checked.newPeriodForm[
                        event.target.name
                    ]
                        ? //if question has already been answered update it

                          //finds if the option has already been answered for the existing question
                          checked.newPeriodForm[event.target.name].filter(
                              answerToRemove =>
                                  answerToRemove === event.target.value
                          )[0]
                            ? [
                                  // removes existing option that has been unchecked
                                  ...checked.newPeriodForm[
                                      event.target.name
                                  ].filter(
                                      option => option !== event.target.value
                                  ),
                              ]
                            : [
                                  // adds new option to the list of existing checked options
                                  ...checked.newPeriodForm[event.target.name],
                                  event.target.value,
                              ]
                        : //if question hasn't been answered yet, add it
                          [event.target.value],
                },
            });
        } else {
            setChecked({
                //updates state of radio button
                newPeriodForm: {
                    ...checked.newPeriodForm,
                    [event.target.name]: event.target.value,
                },
            });
        }
        return;
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("I've been submitted");
        // console.log(formState.inputs); //send to the backend
        // this.setState({ formData: {} });  reset form
        //close form
    };

    const handleReset = event => {
        event.preventDefault();
        console.log("I've been reset");
        // this.setState({ formData: {} });
    };

    return (
        <form className={"period-form"}>
            <main className="form-content">
                {newPeriodQuestions.map(question => (
                    <div>
                        <p>{question.label}</p>
                        <div
                            className="question-options"
                            id={`question-${question.id}`}
                        >
                            {question.options.map(option => (
                                <Checkbox
                                    type={question.type}
                                    questionName={question.name}
                                    id={option.id}
                                    name={option.name}
                                    label={option.label}
                                    formAnswers={checked.newPeriodForm}
                                    checked={checked[option.name]}
                                    handleCheck={handleCheck}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </main>
            <footer className={"form-footer"}>
                <button className={"form-button"} onClick={handleSubmit}>
                    Save
                </button>
                <button className={"form-button"} onClick={handleReset}>
                    Reset
                </button>
            </footer>
        </form>
    );
};

export default NewPeriod;
