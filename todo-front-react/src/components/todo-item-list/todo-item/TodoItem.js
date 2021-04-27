import {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isChecked !== nextProps.isChecked;
    }

    render() {
        const { id, text, colorValue, isChecked, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" id={ id } onClick={ () => onToggle(id) }>
                <div className="remove" onClick={ (e) => {
                e.stopPropagation();
                onRemove(id); } }
                >&times;</div>
                <div className={`todo-text ${isChecked ? 'checked' : '' }`}>
                    <div style={ { color: colorValue } }> { text } </div>
                </div>
                <div>
                    {
                        isChecked && (<div className="check-mark">&#x2713;</div>)
                    }
                </div>
            </div>
        );
    }
}

export default TodoItem;