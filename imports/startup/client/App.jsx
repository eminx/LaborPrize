import React, { Component } from 'react';
import {mount} from 'react-mounter'
import CurrentJobs from '../../ui/pages/CurrentJobs.jsx';
import MyTasks from '../../ui/pages/MyTasks.jsx';
import CreateTask from '../../ui/pages/CreateTask.jsx'; 

// App component - represents the whole app
const MainLayout = ({content}) => (
  <div className="container">
      <h1>What</h1>
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
