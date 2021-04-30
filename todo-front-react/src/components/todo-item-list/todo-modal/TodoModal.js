import {Component} from "react";
import "./TodoModal.css";

class TodoModal extends Component {

    render () {
        const { modalState, closeModal } = this.props;
        const { todo } = modalState;
        let updatedTodo = { ...todo };

        if (todo != null) {
            return(
                <div className="modal">
                    <div className="todo-modal">
                        <div className="todo-text">
                            <input
                                type="text"
                                defaultValue={ todo.text }
                                onChange={ (e) => {
                                    if (e.target.value !== todo.text) {
                                        e.target.className = "updated";
                                        updatedTodo.text = e.target.value;
                                    } else {
                                        e.target.className= "";
                                    }
                                } }
                            />
                        </div>
                        <div className="todo-status">
                            <div>TODO STATUS</div>
                            <input type="checkbox" checked={ `${todo.isRemoved ? 'checked' : '' }` } /> DELETED
                            <input type="checkbox" checked={ `${todo.isChecked ? 'checked' : '' }` } /> FINISHED
                        </div>
                        <div className="todo-info">
                            <div className="created-date">
                                CREATED AT : { todo.created }
                            </div>
                            <div className="updated-date">
                                UPDATED AT : { todo.lastUpdated }
                            </div>
                        </div>
                        <div className="modal-close">
                            <div className="close-buttons">
                                <button onClick={ () => { closeModal(); } }>SAVE</button>
                                <button onClick={ () => { closeModal(); } }>CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>

            );
        } else {
            return (<div/>);
        }
    }
}

export default TodoModal;