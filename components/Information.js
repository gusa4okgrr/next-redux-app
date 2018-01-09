/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const LeftInfo = styled.div`
  flex: 0 0 400px;
  > div {
    margin-bottom: 10px;
  }
`;

const RightInfo = styled.div`
  > div {
    margin-right: 15px;
    margin-bottom: 10px;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

const Information = ({
  reportId,
  state,
  payload
}) => (
  <Container>
    <LeftInfo>
      <div>ID: { reportId }</div>
      <div>State: { state }</div>
      <Link>Details</Link>
    </LeftInfo>
    <RightInfo>
      <div>Type: { payload.reportType }</div>
      <div>Message: { payload.message }</div>
    </RightInfo>
  </Container>
);

Information.propTypes = {
  // data
  reportId: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  payload: PropTypes.object.isRequired,
};

export default Information;
