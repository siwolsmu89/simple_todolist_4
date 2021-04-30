import {Component} from "react";
import "./TodoModal.css";

class TodoModal extends Component {

    toggleCheck () {

    }

    render () {
        const { modalState, updateTodo, closeModal } = this.props;
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
                            <label className="todo-checkbox-control">
                                <input
                                    id="check-removed"
                                    className="hidden-checkbox"
                                    type="checkbox"
                                    checked={ todo.isRemoved ? 'checked' : '' }
                                />
                                <div
                                    className="control-box"
                                    onClick={ (e) => {
                                        updatedTodo.isRemoved = document.querySelector("#check-removed").checked;
                                    } }
                                />
                                <div>DELETED</div>
                            </label>
                            <input type="checkbox"
                                   checked={ todo.isChecked ? 'checked' : '' }
                                   onChange={ (e) => {
                                       updatedTodo.isChecked = e.target.checked;
                                   } }
                            /> FINISHED
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
                                <button className="close-save" onClick={ () => {
                                    if (updatedTodo !== todo) {
                                        updateTodo(updatedTodo);
                                    }
                                    closeModal();
                                } }>SAVE</button>
                                <button className="close-cancel" onClick={ () => { closeModal(); } }>CANCEL</button>
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