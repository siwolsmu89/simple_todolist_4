import {Component} from "react";
import TodoItem from "./todo-item/TodoItem";
import TodoModal from "./todo-modal/TodoModal";

class  TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos || this.props.modalState !== nextProps.modalState;
    }

    render() {
        const { todos, onToggle, modalState, onRemove, updateTodo, openModal, closeModal } = this.props;

        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    key={ todo.id }
                    todo={ todo }
                    onToggle={ onToggle }
                    onRemove={ onRemove }
                    openModal={ openModal }
                />
            )
        );

        return (
            <div>
                <section className="todo-list-wrapper">
                    { todoList }
                </section>
                <section className="todo-modal-wrapper">
                    <TodoModal
                        updateTodo={ updateTodo }
                        closeModal={ closeModal }
                        modalState={ modalState }
                    />
                </section>
            </div>
        );
    }
}

export default TodoItemList;