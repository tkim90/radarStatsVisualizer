import React from 'react';
import Chart from './Chart.jsx';
import Profile from './Profile.jsx';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainWrapper>
        <Profile />
        <Chart />
      </MainWrapper>
    );
  }
};

export default App;
