// import logo from './logo.svg';
import './App.css';
import (useState) from 'react';
// import ReactDOM from 'react-dom';
import Section from './components/Section';

export default function App () {
const appState = useState ('');
console.log(appState);

}

    return (
      <Section
        title="Please leave feedback"
        handleIncrement={this.handleIncrement}
        state={this.state}
        total={this.countTotalFeedback(this.state)}
        positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
      />
    );

// export default App;
