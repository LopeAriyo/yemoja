const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_MINLENGTH = val => ({
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val,
});
export const VALIDATOR_MAXLENGTH = val => ({
    type: VALIDATOR_TYPE_MAXLENGTH,
    val: val,
});
export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

export const validate = (value, validators) => {
    let isValid = true;
    for (const validator of validators) {
        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0;
        }
        if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
            isValid = isValid && value.trim().length >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
            isValid = isValid && value.trim().length <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MIN) {
            isValid = isValid && +value >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX) {
            isValid = isValid && +value <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
    }
    return isValid;
};

// validate = (firstName, lastName, email, password, passwordConfirmation) => {
//     // false means no errors
//     // true means a field is invalid

//     const firstNameValidation =
//         firstName.length === 0 || //firstName must be present
//         firstName.length < 2 ||
//         firstName.length > 20; //firstName must be between 2 and 20 characters

//     const lastNameValidation =
//         lastName.length === 0 || //lastName must be present
//         lastName.length < 2 ||
//         lastName.length > 20; //lastName must be between 2 and 20 characters

//     const emailValidation = email.length === 0; //email must be present
//     //email must be unique //not validated here!
//     //STRETCH - email must be a correct email format
//     //const emailFormat =

//     const passwordValidation =
//         password.length === 0 || //password must be present
//         password.length < 8 ||
//         password.length > 20; //password must be between 8 and 20 characters

//     //STRETCH - show the user their password strength
//     //const passwordFormat =

//     const passwordConfirmationValidation =
//         passwordConfirmation.length === 0 || //passwordConfirmation must be present
//         passwordConfirmation !== password; //passwordConfirmation must match password

//     return {
//         firstName: firstNameValidation,
//         lastName: lastNameValidation,
//         email: emailValidation,
//         password: passwordValidation,
//         passwordConfirmation: passwordConfirmationValidation,
//     };
// };
