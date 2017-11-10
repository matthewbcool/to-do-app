import _ from 'lodash';
import React from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoListItem from './ToDoListItem';

class ToDoList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <ToDoListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <table>
                <ToDoHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
		);
	}
}

export default ToDoList;