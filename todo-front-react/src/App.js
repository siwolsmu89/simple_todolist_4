import { Component } from "react";
import { connect } from "react-redux";
import TodoTemplate from "./components/todo-template/TodoTemplate";
import TodoForm from "./components/todo-form/TodoForm";
import Palette from "./components/palette/Palette";
import TodoItemList from "./components/todo-item-list/TodoItemList";
import Spinner from "./components/spinner/Spinner";
import FilterTemplate from "./components/filter-template/FilterTemplate";
import FilterSelector from "./components/filter-selector/FilterSelector";
import {addTodo, checkTodo, getTodoList, removeTodo} from "./actions/axiosActions";
import {selectColorAction} from "./actions/colorActions";

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
                            onCreate={ (nextId, text, colorValue) => dispatch(addTodo(nextId, text, colorValue)) }
                        />
                    )}
                    todoList={(
                        <TodoItemList
                            todos={ todos }
                            onToggle={ id => dispatch(checkTodo(id)) }
                            onRemove={ id => dispatch(removeTodo(id)) }
                        />
                    )}
                    getList={ () => dispatch(getTodoList()) }
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