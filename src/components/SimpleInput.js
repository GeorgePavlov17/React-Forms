import { useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  let formIsValid = false;

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("input is valid");
  //   }
  // }, [enteredNameIsValid]);

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);

  //   // if (event.target.value.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    // console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = '' => NOT IDEAL, DON'T MANIPULATE THE DOM
    // setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
