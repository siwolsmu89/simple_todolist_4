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
import TodoForm from "./components/todo-form/TodoForm";
import Palette from "./components/palette/Palette";
import TodoItemList from "./components/todo-item-list/TodoItemList";
import Spinner from "./components/spinner/Spinner";
import FilterTemplate from "./components/filter-template/FilterTemplate";
import FilterSelector from "./components/filter-selector/FilterSelector";

class App extends Component {
    render() {
        const { dispatch, todos, colors, fetching } = this.props;
        return (
            <div>
                <TodoTemplate
                    spinner={(
                        <Spinner
                            fetching={ fetching }
                            colors={ colors }
                        />
                    )}
                    form={(
                        <TodoForm
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
                <FilterTemplate
                    palette={(
                        <Palette
                            colors={ colors }
                            onSelect={ colorValue => dispatch(selectColorAction(colorValue)) }
                        />
                    )}
                    filterSelector={(
                        <FilterSelector />
                    )}
                />
            </div>
        );
    }
}

function selector(state) {
    const { todos, colors, fetching } = state;
    return { todos, colors, fetching };
}

export default connect(selector)(App);