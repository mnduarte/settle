import React, { Fragment } from 'react';
import { Router }  from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Layout } from './components/Layout';
import { Pair } from './pages/Pair';

export const App = () => (
    <Fragment>
        <GlobalStyle />
        <Layout>
          <Router primary={false}>
              <Pair path='/' />
          </Router>
        </Layout>
    </Fragment>
)