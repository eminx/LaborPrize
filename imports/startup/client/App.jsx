import React, { Component } from 'react';
import {mount} from 'react-mounter';
import Emin from '../../ui/pages/emin.jsx';
import FlowRouter from 'flow-router';
 
// App component - represents the whole app
const MainLayout = ({content}) => (
  <div className="container">
    <header>
      <h1>Labor Prize</h1>
    </header> 
    <main>
      {content}
    </main>
  </div>
);

FlowRouter.route('/emin',{
  action(){
    mount(MainLayout, {
      content: (<Emin />)   
    })
  }
});