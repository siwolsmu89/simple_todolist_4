import { Component } from "react";
import { connect } from "react-redux";
import {
    addTodoAction,
    checkTodoAction,
    fetchTodos,
    removeTodos,
    selectColorAction
} from "./actions/actions";
import TodoTemplate from "./components/todo-template/TodoTemplate";
import Form from "./components/form/Form";
import Palette from "./components/palette/Palette";
import TodoItemList from "./components/todo-item-list/TodoItemList";

class App extends Component {
    render() {
        const { dispatch, todos, colors } = this.props;
        return (
            <div>
                <TodoTemplate
                    palette={(
                        <Palette
                            colors={ colors }
                            onSelect={ colorValue => dispatch(selectColorAction(colorValue)) }
                        />
                    )}
                    form={(
                        <Form
                            todos={ todos }
                            colors={ colors }
                            onCreate={ (nextId, text, colorValue) => dispatch(addTodoAction(nextId, text, colorValue)) }
                        />
                    )}
                    todoList={(
                        <TodoItemList
                            todos={ todos }
                            onToggle={ id => dispatch(checkTodoAction(id)) }
                            onRemove={ id => dispatch(removeTodos(id)) }
                        />
                    )}
                    getList={ () => dispatch(fetchTodos()) }
                />
            </div>
        );
    }
}

function selector(state) {
    const { todos, colors } = state;
    return { todos, colors };
}

export default connect(selector)(App);