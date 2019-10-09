import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid red;
  text-align: left;
  display: inline-block;
`;
  // float: left;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 100px;
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProfileWrapper>
        <ProfileContent>🤓</ProfileContent>
      </ProfileWrapper>
      );
  }
};

export default Profile;