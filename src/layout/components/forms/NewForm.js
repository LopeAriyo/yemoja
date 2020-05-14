import React from "react";
import Input from "./Input";

const NewForm = () => {
    return (
        <form className="place-form">
            <Input
                element="input"
                type="text"
                label="Title"
                validators={[]}
                errorText="Please enter a valid title"
            />
        </form>
    );
};

export default NewForm;
