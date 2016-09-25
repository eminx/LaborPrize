import React, { Component } from 'react';
import {mount} from 'react-mounter'
import CreateTask from '../../ui/pages/CreateTask.jsx';
import CurrentJobs from '../../ui/pages/CurrentJobs.jsx';
import JoinLaborPrize from '../../ui/pages/JoinLaborPrize.jsx';
import MyTasks from '../../ui/pages/MyTasks.jsx';

// App component - represents the whole app
const MainLayout = ({content}) => (
  <div className="container">
    
    <main>
    {content}
    </main>
  </div>
);

FlowRouter.route(`/create-task`,{
  action(){
    mount(MainLayout, {
      content: (<CreateTask />)
    })
  }
});


FlowRouter.route(`/jobs`,{
  action(){
    mount(MainLayout, {
      content: (<CurrentJobs />)
    })
  }
});

FlowRouter.route(`/join-labor-prize`,{
  action(){
    mount(MainLayout, {
      content: (<JoinLaborPrize />)
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

FlowRouter.route('/rankings',{
  action(){
    mount(Layout2, {
      content:(<Ranking/>)
    })
  }
});
