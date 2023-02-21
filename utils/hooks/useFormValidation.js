import { useState } from "react";

/**
 * useFormValidation is a custom React hook that allows for Form validation in a form.
 *
 * @param {Object} data - an object containing the list of Form fields to validate
 * @param {Function} validation - a callback function that holds the validation check and returns an error based on the rules set
 * @return {Object} formData - the current state of the form data
 * @return {Object} errors - the current state of the form errors
 * @return {Function} handleChange - an event handler for validating form data on change
 * @return {Function} handleBlur - an event handler for validating form data on blur and trimming the value
 * @return {Function} validateOnSubmit - a function for validating the form data on submit
 */

const useFormValidation = (data, validation) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(data);

  // Validation function
  const handleValidation = (e, key, value) => {
    //  Stores the error returned from the callback function after comparing the values with the rules
    const error = validation(formData, key, value);

    // Sets the state error
    setErrors({
      ...errors,
      [key]: error,
    });

    // Sets the form data
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  // Handles validation on change
  const handleChange = (e) => {
    let key = e.target.id;
    let value = e.target.value;

    // Calls the handleValidation function to validate the Form field
    handleValidation(e, key, value);
  };

  // Handles validation on blur
  // Trims value on blur
  const handleBlur = (e) => {
    let key = e.target.id;
    let value = e.target.value.trim();

    // Calls the handleValidation function to validate the Form field
    handleValidation(e, key, value);
  };

  /**
   * validateOnSubmit is a function that is called when the form is submitted and is responsible for validating all Form fields.
   * it validates each field using the validation callback function and sets the errors state with any errors that occur.
   * If there are no errors, it returns true, otherwise it returns false.
   *
   * @return {Boolean} - Returns true if there are no errors during validation, otherwise returns false.
   */

  const validateOnSubmit = () => {
    let submitErrors;
    // Loops through the formData and calls the validate function on each iteration
    for (const [key, value] of Object.entries(formData)) {
      //  Stores the error returned from the callback function after comparing the values with the rules
      const error = validation(formData, key, value);

      submitErrors = {
        ...submitErrors,
        [key]: error,
      };

      // Sets the state error
      setErrors(submitErrors);
    }

    if (Object.values(submitErrors).every((value) => value === undefined)) {
      return true;
    } else {
      return false;
    }
  };

  const checkIsValid = (field) => {
    if (field in errors) {
      return errors[field] === undefined ? "success" : "error";
    }
  };

  //  Returns the necessary data
  return {
    formData,
    errors,
    checkIsValid,
    handleChange,
    handleBlur,
    validateOnSubmit,
    setFormData,
  };
};

export default useFormValidation;
