import React from 'react';
import Drum from './Drum';

class App extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {

    }
  }

  render(){
    return(
      <div> 
        <Drum />
      </div>
    )
  }
}

export default App;