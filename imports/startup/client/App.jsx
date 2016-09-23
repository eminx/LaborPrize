import React, { Component } from 'react';
import {mount} from 'react-mounter'
import Emin from '../../ui/pages/emin.jsx';
import Ranking from '../../ui/pages/ranking.jsx'; 

// App component - represents the whole app
const MainLayout = ({content}) => (
  <div className="container">
      <h1>What</h1>
    <main>
    {content}
    </main>
  </div>
);

const Layout2 = ({content}) => (
  <div className="container">
      <h1>Rankings</h1>
    <main>
    {content}
    </main>
  </div>
);

FlowRouter.route('/emin',{
  action(){
    mount(MainLayout, {content: (<Emin />)})
  }
});

FlowRouter.route('/ranking',{

  action(){
    mount(Layout2, {content:(<Ranking/>)})
  }
});
