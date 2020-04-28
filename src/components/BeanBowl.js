import React from 'react';
import PropTypes from 'prop-types';

function BeanBowl(props){

  return (
    <React.Fragment>
      <div onClick={() => props.whenBeanBowlClicked(props.id)}>
        <h2>{props.title}</h2>
        {/* <p>{props.author}</p> */}
        <p>{props.content}</p>
        {/* <p>{props.timestamp}</p> */}
        <p>{props.amountOfBeans}</p>
      </div>
    </React.Fragment>
  );
}

BeanBowl.propTypes = {
  whenBeanBowlClicked: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  timestamp: PropTypes.object,
  amountOfBeans: PropTypes.string,
  id: PropTypes.string,
}

export default BeanBowl;