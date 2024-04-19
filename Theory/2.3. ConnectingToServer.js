HTTP: GET,POST,UPDATE,DELETE
Para hacer que la llamada sea asíncrona puedes usar promesas. 

Promise server call

import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: "None Logged In"
  }

  componentDidMount(){
    const req = axios.get("<external-server-url>");
    req.then(resp => {
      this.setState({ user: resp.data.name });
    })
    .catch(err => {
      this.setState({ user: "Invalid user" });
    });
  }

  render(){
    return(
      <div>
        Current user - {this.state.user}
      </div>
    );
  }
}

export default App;

