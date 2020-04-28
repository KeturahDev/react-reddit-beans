import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = "text"
          name = "title"
          placeholder = "Title your bean bowl!" />
        <input
          type = "text"
          name = "author"
          placeholder = "Who's eating them beans?" />
        <input
          type = "text"
          name = "content"
          placeholder = "Tell us 'bout them beans!" />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
    
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;