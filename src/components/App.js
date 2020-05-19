import React from 'react';
import '../scss/App.scss';
import Characters from './characters';
import Header from './header';
import Body from './body';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = Characters;
  }

    render() {
      return (
       <div className="App">
        <Header></Header>
        <Body data={Characters}></Body>
       </div>
    );
  }
}

export default App;
