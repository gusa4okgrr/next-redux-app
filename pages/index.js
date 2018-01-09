import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Page from '../components/Page';

const App = () => (<Page />);

export default withRedux(initStore)(App);
