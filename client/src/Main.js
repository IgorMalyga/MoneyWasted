import React from 'react';

import Header from './components/Header';

import { withAuth } from './hocs/index';

const Main = ({ children, props }) => (
  <div className="flexible-content" style={{ height: '100%' }}>
    <div className="main-container" style={{ height: '100%' }}>
      <main id="content" className="p-3" style={{ height: '100%' }}>
        <Header props={props} />
        {children}
      </main>
    </div>
  </div>
);

export default withAuth(Main);
