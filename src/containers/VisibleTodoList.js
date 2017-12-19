import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.completed);
		case 'SHOW_ALL':
			return todos;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		todos: getVisibleTodos(state.todos, ownProps.filter)
	};
}

const mapsDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapsDispatchToProps
)(TodoList)

export default VisibleTodoList