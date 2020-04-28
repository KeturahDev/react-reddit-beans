import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function BeanBowlForm(props) {
  
  function handleBeanBownSubmission(event) {
    event.preventDefault();
    props.addingBeanBowl({title: event.target.title.value, author: event.target.author.value, content: event.target.content.value, timestamp: Date.now(), id: v4()});
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleBeanBownSubmission}
        buttonText = "Bean Me!" />
    </React.Fragment>
  );
}

BeanBowlForm.propTypes = {
  addingBeanBowl: PropTypes.func
};

export default BeanBowlForm;