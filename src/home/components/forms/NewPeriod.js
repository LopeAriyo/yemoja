import React from "react";
import Input from "../../../layout/components/forms/Input";
// import Select from "../../../layout/components/forms/Select";

const NewPeriod = props => {
    const newPeriodQuestions = [
        {
            id: 1,
            label: "How was your flow today?",
            instruction: "Rate today's intensity:",
            options: [
                { id: "intensity1", name: "Light", value: 1 },
                { id: "intensity2", name: "Medium", value: 2 },
                { id: "intensity3", name: "Heavy", value: 3 },
            ],
            element: "input",
            type: "radio",
        },
        {
            id: 2,
            label: "Did you use any of the following?",
            instruction: "Select collection method:",
            options: [
                { id: "collection1", value: 1, name: "Tampon" },
                { id: "collection2", value: 2, name: "Pad" },
                { id: "collection3", value: 3, name: "Menstural Cup" },
            ],
            element: "input",
            type: "checkbox",
        },
    ];
    return (
        <form className={"period-form"}>
            <main className="form-content">
                {newPeriodQuestions.map(question => (
                    <Input
                        id={question.id}
                        label={question.label}
                        instruction={question.instruction}
                        element={question.element}
                        type={question.type}
                        options={question.options}
                    />
                ))}
            </main>
            <footer className={"form-footer"}>
                <button
                    className={"form-button"}
                    onSubmit={
                        props.onSumbit
                            ? props.onSumbit
                            : event => event.preventDefault
                    }
                >
                    Save
                </button>
            </footer>
        </form>
    );
};

export default NewPeriod;
