import React from 'react';
import ToDoList from './components/ToDoList';


const todos = [
{
    task: 'finish this project',
    isCompleted: false
},
{
    task: 'help doreen do things',
    isCompleted: true
}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render(){
    return (
      <div>
        <h1>To Do List</h1>
          <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;