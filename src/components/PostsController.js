import React from 'react';

class PostsController extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedPost: null,
      //postsdata - from redux store
    }
  }
  currentlyVisible = () => {
    if(selectedPost)
  }

  render(){
    currentView = currentlyVisible()
    return(
      <React.Fragment>
        {currentView.component}
        <button onClick={handleClick}>{currentView.buttontext}</button>
      </React.Fragment>
    );
  }
}