import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex: 0 1 auto;
  align-items: center;
  > button {
    display: block;
    width: 100px;
    text-align: center;
    padding: 8px 10px;
    &:first-child {
      margin-bottom: 10px;
    }
  }
`;

class Buttons extends Component {
  handleBlock = () => {
    this.props.onClick(this.props.id, 'BLOCKED');
  }

  handleResolve = () => {
    this.props.onClick(this.props.id, 'RESOLVED');
  }

  render() {
    return (
      <Container>
        <button onClick={this.handleBlock}>
          Block
        </button>
        <button onClick={this.handleResolve}>
          Resolve
        </button>
      </Container>
    );
  }
}

Buttons.propTypes = {
  // data
  id: PropTypes.string.isRequired,
  // func
  onClick: PropTypes.func.isRequired
};

export default Buttons;
