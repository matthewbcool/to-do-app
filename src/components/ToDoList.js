import React from 'react';
import ToDoHeader from './ToDoHeader';

class ToDoList extends React.Component {
	render () {
		return (
	      <div>
             <table>
               <ToDoHeader />
            </table>
          </div>  
		);
	}
}

export default ToDoList;