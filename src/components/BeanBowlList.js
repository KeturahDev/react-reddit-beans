import React from "react";
import PropTypes from "prop-types";
import BeanBowl from "./BeanBowl";

function BeanBowlList(props){
  return(
    <React.Fragment>
      <hr/>
    {Object.values(props.BeanBowlList).map((beanbowl) =>
      <BeanBowl
        whenBeanBowlClicked = { props.onBeanBowlSelection }
        title={beanbowl.title}
        author={beanbowl.author}
        content={beanbowl.content}
        timestamp={beanbowl.timestamp}
        amountOfBeans={beanbowl.amountOfBeans}
        id={beanbowl.id}
        key={beanbowl.id}/>
    )}
    </React.Fragment>
  );
}

BeanBowlList.propTypes = {
  beanBowlList: PropTypes.object,
  onBeanBowlSelection: PropTypes.func
}

export default BeanBowlList;