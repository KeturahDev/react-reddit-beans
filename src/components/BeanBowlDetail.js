import React from "react";
import PropTypes from "prop-types";

function BeanBowlDetail(props){
  const { selectedBeanBowl } = props;

  return (
    <React.Fragment>
      <h1>Bean Bowl Detail</h1>
      <h3>{selectedBeanBowl.title}</h3>
      <h4><em>{selectedBeanBowl.author} - {selectedBeanBowl.timestamp}</em></h4>
      <hr />
      <p>{selectedBeanBowl.content}</p>
      <hr />
      <h6>{selectedBeanBowl.amountOfBeans}</h6>
      {/* <button onClick={ props.onClickingEdit }>Update Bean Bowl</button>
      <button onClick={()=> onClickingDelete(beanBowl.id) }>Delete Bean Bowl</button> */}
    </React.Fragment>
  )
}
BeanBowlDetail.propTypes = {
  selectedBeanBowl: PropTypes.object
}
export default BeanBowlDetail;