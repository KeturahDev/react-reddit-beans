import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function BeanBowlForm(props) {
  
  function handleBeanBownSubmission(event) {
    event.preventDefault();
    props.onNewBeanBowlCreation({title: event.target.title.value, author: event.target.author.value, content: event.target.content.value, id: v4()});
  }
  return (
    <React.Fragment>
    
      
    </React.Fragment>
  )
}