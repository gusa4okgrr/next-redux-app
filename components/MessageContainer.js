import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Information from './Information';
import Buttons from './Buttons';
import { fetchReports } from '../redux-base/actionCreators';

const mapStateToProps = ({
  reports,
  message,
  loadingPage,
  error
}) => ({
  reports,
  message,
  loadingPage,
  error
});

const mapDispatchToProps = {
  fetchReports
};

const Container = styled.div`
  display: flex;
  width: 800px;
  border: 1px solid black;
  border-bottom: none;
  justify-content: center;
  padding: 10px;
`;

const GreenText = styled.h2`
  color: green;
`;

class MessageContainer extends Component {
  componentWillMount() {
    this.props.fetchReports();
  }

  render() {
    const {
      reports,
      message,
      loadingPage,
      error
    } = this.props;

    return (
      <Fragment>
        { error && (<h1>Something went wrong { error }</h1>) }
        { loadingPage && (<h1>Loading reports...</h1>) }
        { message && (<GreenText>{ message }</GreenText>) }
        { !error && !loadingPage && reports.map(report => (
          <Container key={report.id}>
            <Information
              state={report.state}
              payload={report.payload}
            />
            <Buttons id={report.payload.reportId} />
          </Container>
        )) }
      </Fragment>
    );
  }
}

MessageContainer.propTypes = {
  // trigger
  loadingPage: PropTypes.bool.isRequired,
  // data
  reports: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  // redux-base
  fetchReports: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
