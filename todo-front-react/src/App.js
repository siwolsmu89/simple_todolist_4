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
import {closeModalAction, openModalAction} from "./actions/modalActions";

class App extends Component {

    render() {
        const { dispatch, todos, colors, filters, fetching, modalState } = this.props;
        return (
            <div>
                <TodoTemplate
                    filters={ filters }
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
                            modalState={ modalState }
                            openModal={ (todo) => dispatch(openModalAction(todo))}
                            closeModal={ () => dispatch(closeModalAction()) }
                            onToggle={ id => dispatch(checkTodo(id)) }
                            onRemove={ id => dispatch(removeTodo(id)) }
                        />
                    )}
                    getList={ filters => dispatch(getTodoList(filters)) }
                />
                <FilterTemplate
                    palette={(
                        <Palette
                            colors={ colors }
                            onSelect={ colorValue => dispatch(selectColorAction(colorValue)) }
                        />
                    )}
                    filterSelector={(
                        <FilterSelector
                            filters={ filters }
                            refreshFilter={ filters => dispatch(getTodoList(filters)) }
                        />
                    )}
                />
            </div>
        );
    }
}

function selector(state) {
    const { todos, colors, filters, fetching, modalState } = state;
    return { todos, colors, filters, fetching, modalState };
}

export default connect(selector)(App);