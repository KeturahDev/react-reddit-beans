import React from "react";
import PropTypes from "prop-types";
import BeanBowl from "./BeanBowl";

function BeanBowlList(props){
  return(
    <React.Fragment>
      <hr/>
    {Object.values(props.list).map((beanBowl) =>
      <BeanBowl
        whenBeanBowlClicked = { props.onBeanBowlSelection }
        title={beanBowl.title}
        author={beanBowl.author}
        content={beanBowl.content}
        timestamp={beanBowl.timestamp}
        amountOfBeans={beanBowl.amountOfBeans}
        id={beanBowl.id}
        key={beanBowl.id}/>
    )}
    </React.Fragment>
  );
}

BeanBowlList.propTypes = {
  list: PropTypes.object,
  onBeanBowlSelection: PropTypes.func
}

export default BeanBowlList;