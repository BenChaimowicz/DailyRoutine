import * as React from 'react';
import './App.css';
import NewDailyInterface from './components/NewDailyInterface/NewDailyInterface';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NewDailyInterface />
      </div>
    );
  }
}

export default App;
