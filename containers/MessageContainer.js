import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Information from '../components/Information';
import Buttons from '../components/Buttons';
import {
  fetchReports,
  updateReport
} from '../redux-base/actionCreators';

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
  fetchReports,
  updateReport
};

const Container = styled.div`
  display: flex;
  width: 800px;
  border: 1px solid black;
  border-bottom: none;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => {
    switch (props.status) {
      case 'BLOCKED': return 'lightpink';
      case 'RESOLVED': return 'lightgreen';
      default: return '';
    }
  }}
`;

const GreenText = styled.h2`
  color: green;
`;

class MessageContainer extends Component {
  componentWillMount() {
    this.props.fetchReports();
  }

  handleButtonClick = (id, type) => {
    this.props.updateReport({
      id,
      type
    });
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
          <Container
            status={report.status}
            key={report.id}
          >
            <Information
              reportId={report.id}
              state={report.state}
              payload={report.payload}
            />
            <Buttons
              id={report.id}
              onClick={this.handleButtonClick}
              status={report.status}
            />
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
  updateReport: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
