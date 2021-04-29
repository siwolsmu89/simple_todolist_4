import {Component} from "react";
import TodoItem from "./todo-item/TodoItem";
import TodoModal from "./todo-modal/TodoModal";

class  TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const modalState = {
            todo: { ...todos[0] }
        }

        const todoList = todos.map(
            ({ id, text, colorValue, isChecked, isRemoved }) => (
                <TodoItem
                    key={ id }
                    id={ id }
                    text={ text }
                    colorValue={ colorValue }
                    isChecked={ isChecked }
                    isRemoved={ isRemoved }
                    onToggle={ onToggle }
                    onRemove={ onRemove }
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
                        modalState={ modalState }
                    />
                </section>
            </div>
        );
    }
}

export default TodoItemList;