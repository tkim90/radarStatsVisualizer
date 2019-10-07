import React from 'react';
import Chart from './Chart.jsx';
import Profile from './Profile.jsx';

const color = 'rgba(33, 200, 81, 0.2)';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile />
        <Chart />
      </div>
    );
  }
};

export default App;