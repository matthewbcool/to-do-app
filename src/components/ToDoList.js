import React from 'react';
import ToDoHeader from './ToDoHeader';

class ToDoList extends React.Component {
    renderItems() {
      let tasks = this.props.todos;
      let taskList = [];
      let i = 0;
      for (i=0; i < tasks.length; i++){
        taskList.push(tasks[i].task);
        };
      return taskList; 
    }


	render () {
		return (
             <li>
               <ToDoHeader />
               		{this.renderItems()}
            </li> 
		);
	}
}

export default ToDoList;