import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let isFormValid = true;
            for (const inputID in state.inputs) {
                if (inputID === action.inputID) {
                    isFormValid = isFormValid && action.isValid;
                } else {
                    isFormValid = isFormValid && state.inputs[inputID].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputID]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isFormValid: isFormValid,
            };
        case "SET_FORM":
            return {
                inputs: action.inputs,
                isFormValid: action.isFormValid,
            };
        default:
            return state;
    }
};

const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isFormValid: initialFormValidity,
    });

    const handleInput = useCallback((id, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputID: id,
        });
    }, []);

    const setFormData = useCallback((inputData, isFormValid) => {
        dispatch({
            type: "SET_FORM",
            inputs: inputData,
            isFormValid: isFormValid,
        });
    });

    return [formState, handleInput, setFormData];
};

export default useForm;
