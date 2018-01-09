import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateReport } from '../redux-base/actionCreators';

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

const mapDispatchToProps = {
  updateReport
};

class Buttons extends Component {
  handleBlock = (e) => {
    this.props.updateReport({
      id: e.target.id,
      type: 'block'
    });
  }

  handleResolve = (e) => {
    this.props.updateReport({
      id: e.target.id,
      type: 'resolve'
    });
  }

  render() {
    const { id } = this.props;

    return (
      <Container>
        <button
          id={id}
          onClick={this.handleBlock}
        >
          Block
        </button>
        <button
          id={id}
          onClick={this.handleResolve}
        >
          Resolve
        </button>
      </Container>
    );
  }
}

Buttons.propTypes = {
  // data
  id: PropTypes.string.isRequired,
  // redux-base
  updateReport: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Buttons);
