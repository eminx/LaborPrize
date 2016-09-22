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
    <header>
      <h1>Ranking</h1>
    </header> 
    <main>
    {content}
    </main>
  </div>
);

FlowRouter.route(`/jobs`,{
  action(){
    mount(MainLayout, {
      content: (<CurrentJobs />)   
    })
  }
});

FlowRouter.route(`/my-tasks`,{
  action(){
    mount(MainLayout, {
      content: (<MyTasks />)   
    })
  }
});

FlowRouter.route(`/create-task`,{
  action(){
    mount(MainLayout, {
      content: (<CreateTask />)   
    })
  }
});

FlowRouter.route('/rankings',{
  action(){
    mount(Layout2, {
      content:(<Ranking/>)
    })
  }
});
