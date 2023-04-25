import React from 'react';
import styled from 'styled-components';
import { platformColors } from '../constants/colors'

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
  border: 1px solid ${platformColors.darkGrey};
  padding: 10px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  background-color: ${platformColors.lila};
`;

const AlbumName = styled(Column)`
  flex-basis: 40%;
`;

const AlbumID = styled(Column)`
  flex-basis: 10%;
`;

const UserName = styled(Column)`
  flex-basis: 20%;
`;

const UserEmail = styled(Column)`
  flex-basis: 20%;
`;

const ExpandCollapse = styled(Column)`
  flex-basis: 10%;
`;

function Header() {
    return (
        <Row>
            <AlbumName>Album Name</AlbumName>
            <AlbumID>Album ID</AlbumID>
            <UserName>User Name</UserName>
            <UserEmail>User Email</UserEmail>
            <ExpandCollapse>Expand/Collapse</ExpandCollapse>
        </Row>    );
}

export default Header;
