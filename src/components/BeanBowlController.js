import React from 'react';

class BeanBowlController extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedBeanBowl: null,
      //beanbowlData - from redux store
    }
  }
  handleClick = () => {
    if (selectedBeanBowl !== null) {
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

  currentlyVisible = () => {
    if(selectedPost !== null){
      return {
        component: <BeanBowl selectedBeanBowl={this.state.selectedBeanBowl}/>,
        buttontext: "Back to bean bowls"
      }
    } else if (formVisible === true) {
      return{
      component: <BeanBowlForm addingBeanBowl={this.handleAddingBeanBowl}/>,
      buttontext: "Back to bean bowls"
      }
    } else {
      return {
      component = <BeanBowlList list={this.props.masterBeanBowl} />,
      buttontext = "Add bean bowl"
      }
    }
  }

  render(){
    currentView = currentlyVisible()
    return(
      <React.Fragment>
        {currentView.component}
        <button onClick={this.handleClick}>{currentView.buttontext}</button>
      </React.Fragment>
    );
  }
}

export default BeanBowlController;