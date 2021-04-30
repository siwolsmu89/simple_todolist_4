import {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component {

    render() {
        const { todo, onToggle, onRemove, openModal } = this.props;
        const {  id, text, colorValue, isChecked, isRemoved } = todo;

        return (
            <div className={ `todo-item ${isRemoved ? 'removed' : '' }` }
                 id={ id }>
                <div className="remove"
                     onClick={ (e) => {
                        e.stopPropagation();
                        if (!isChecked && !isRemoved) {
                            onRemove(id);
                        }
                     } }
                >&times;</div>
                <div className={`todo-text ${isChecked ? 'checked' : '' }`}
                     onClick={ () => openModal(todo) }
                >
                    <div style={ { color: colorValue } }> { text } </div>
                </div>
                <div>
                   <input type="checkbox"
                          readOnly
                          className="finished-checkbox"
                          onClick={ () => {
                               if (!isRemoved) {
                                   onToggle(id);
                               }
                          } }
                          checked={`${isChecked ? 'checked' : ''}`}
                   />
                </div>
            </div>
        );
    }
}

export default TodoItem;