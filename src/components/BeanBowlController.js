import React from 'react';
import BeanBowlDetail from "./BeanBowlDetail";
import BeanBowlForm from "./BeanBowlForm";
import BeanBowlList from "./BeanBowlList";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class BeanBowlController extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedBeanBowl: null,
    }
  }
  handleClick = () => {
    if (this.state.selectedBeanBowl !== null) {
      this.setState({
        formVisible: false,
        selectedBeanBowl: null
      })
    } else {
      this.setState(prevstate => ({
        formVisible: !prevstate.formVisible
      }));
    }
  }
  
  handleAddingBeanBowl = (beanBowl) => {
    const {dispatch} = this.props
    const {title, author, content, timeStamp, amountOfBeans ,id} = beanBowl
    const action = {
      type: "ADD_BEAN_BOWL",
      title: title,
      author: author,
      content: content,
      timeStamp: timeStamp,
      amountOfBeans: amountOfBeans,
      id: id
    }
    dispatch(action)
    this.setState({ formVisible: false })
  }

  handleSelectedBeanBowl = (id) => {
    const selectedBeanBowl = this.props.masterBeanBowl[id];
    this.setState({selectedBeanBowl: selectedBeanBowl});
    console.log(selectedBeanBowl)
  }

  currentlyVisible = () => {
    if(this.state.selectedBeanBowl !== null){
      return {
        component: <BeanBowlDetail selectedBeanBowl={this.state.selectedBeanBowl}/>,
        buttontext: "Back to bean bowls"
      }
    } else if (this.state.formVisible === true) {
      return{
      component: <BeanBowlForm addingBeanBowl={this.handleAddingBeanBowl}/>,
      buttontext: "Back to bean bowls"
      }
    } else {
      return {
      component: <BeanBowlList list={this.props.masterBeanBowl} onBeanBowlSelection={this.handleSelectedBeanBowl} />,
      buttontext: "Add bean bowl"
      }
    }
  }

  render(){
    const currentView = this.currentlyVisible()
    return(
      <React.Fragment>
        {currentView.component}
        <button onClick={this.handleClick}>{currentView.buttontext}</button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterBeanBowl : state
  }
}
BeanBowlController = connect(mapStateToProps)(BeanBowlController)
export default BeanBowlController;