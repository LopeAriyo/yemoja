import React, { Component } from "react";
import Input from "../../../layout/components/forms/Input";
// import Select from "../../../layout/components/forms/Select";

class NewPeriod extends Component {
    state = {
        formData: {},
    };

    newPeriodQuestions = [
        {
            id: 1,
            label: "How was your flow today?",
            instruction: "Rate today's intensity:",
            options: [
                { id: 1, name: "Light", value: 1 },
                { id: 2, name: "Medium", value: 2 },
                { id: 3, name: "Heavy", value: 3 },
            ],
            element: "input",
            type: "radio",
        },
        {
            id: 2,
            label: "Did you use any of the following?",
            instruction: "Select collection method:",
            options: [
                { id: 1, name: "Tampon" },
                { id: 2, name: "Pad" },
                { id: 3, name: "Menstural Cup" },
            ],
            element: "input",
            type: "checkbox",
        },
    ];

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        const value = isCheckbox //if  the value is coming from a checkbox then make the value a number
            ? parseInt(event.target.value)
            : event.target.value;

        if (isCheckbox) {
            if (this.state.formData[event.target.name]) {
                // if checkbox question has already been answered
                this.setState(
                    this.state.formData[event.target.name].filter(
                        answer => answer === value
                    )[0] === value
                        ? {
                              //remove from state
                              formData: {
                                  ...this.state.formData,
                                  [event.target.name]: [
                                      ...this.state.formData[
                                          event.target.name
                                      ].filter(answer => answer !== value),
                                  ],
                                  //if the option has already has been checked, uncheck it
                              },
                          }
                        : {
                              //add to state
                              formData: {
                                  ...this.state.formData,
                                  [event.target.name]: this.state.formData[
                                      event.target.name
                                  ]
                                      ? [
                                            ...this.state.formData[
                                                event.target.name
                                            ],
                                            value,
                                        ]
                                      : [value],
                              },
                          }
                );
            } else {
                this.setState({
                    formData: {
                        ...this.state.formData,
                        [event.target.name]: [value],
                    },
                });
            }

            return;
        }
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: value,
            },
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("I've been submitted");
    };

    handleReset = event => {
        event.preventDefault();
        this.setState({ formData: {} });
    };

    render() {
        return (
            <form className={"period-form"} onChange={this.handleChange}>
                <main className="form-content">
                    {this.newPeriodQuestions.map(question => (
                        <Input
                            id={question.id}
                            label={question.label}
                            instruction={question.instruction}
                            element={question.element}
                            type={question.type}
                            options={question.options}
                            formData={this.state.formData}
                        />
                    ))}
                </main>
                <footer className={"form-footer"}>
                    <button
                        className={"form-button"}
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                    <button
                        className={"form-button"}
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                </footer>
            </form>
        );
    }
}

//TODO
//+ change to use hooks

// const NewPeriod = props => {
//     const newPeriodQuestions = [
//         {
//             id: 1,
//             label: "How was your flow today?",
//             instruction: "Rate today's intensity:",
//             options: [
//                 { id: "intensity1", name: "Light", value: 1 },
//                 { id: "intensity2", name: "Medium", value: 2 },
//                 { id: "intensity3", name: "Heavy", value: 3 },
//             ],
//             element: "input",
//             type: "radio",
//         },
//         {
//             id: 2,
//             label: "Did you use any of the following?",
//             instruction: "Select collection method:",
//             options: [
//                 { id: "collection1", value: 1, name: "Tampon" },
//                 { id: "collection2", value: 2, name: "Pad" },
//                 { id: "collection3", value: 3, name: "Menstural Cup" },
//             ],
//             element: "input",
//             type: "checkbox",
//         },
//     ];

//     const handleSubmit = event => {
//         event.preventDefault();
//         console.log("I've been submitted");
//         // console.log(formState.inputs); send to the backend
//         // this.setState({ formData: {} });  reset form
//         //close form
//     };

//     return (
// <form className={"period-form"} onChange={props.handleChange}>
//     <main className="form-content">
//         {newPeriodQuestions.map(question => (
//             <Input
//                 id={question.id}
//                 label={question.label}
//                 instruction={question.instruction}
//                 element={question.element}
//                 type={question.type}
//                 options={question.options}
//                 checked={false}
//             />
//         ))}
//     </main>
//     <footer className={"form-footer"}>
//         <button className={"form-button"} onClick={handleSubmit}>
//             Save
//         </button>
//     </footer>
// </form>
//     );
// };

export default NewPeriod;
