import {Component} from "react";
import "./TodoModal.css";

class TodoModal extends Component {

    toggleCheck (target, isUpdated) {
        const targetId = target.id;
        const controlBox = document.querySelector("#" + targetId + " + .control-box");
        if (controlBox.classList && isUpdated) {
            controlBox.classList.add("updated");
        } else {
            controlBox.classList.remove("updated");
        }
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
                            <label
                                className="todo-checkbox-control"
                            >
                                <input
                                    id="check-removed"
                                    className="hidden-checkbox"
                                    type="checkbox"
                                    defaultChecked={ todo.isRemoved ? 'checked' : '' }
                                    onChange={ (e) => {
                                        updatedTodo.isRemoved = e.target.checked;
                                        const isUpdated = updatedTodo.isRemoved !== todo.isRemoved;
                                        this.toggleCheck(e.target, isUpdated);
                                    } }
                                />
                                <div
                                    className="control-box"
                                />
                                <div>DELETED</div>
                            </label>
                            <label
                                className="todo-checkbox-control"
                            >
                                <input
                                    id="check-finished"
                                    className="hidden-checkbox"
                                    type="checkbox"
                                    defaultChecked={ todo.isChecked ? 'checked' : '' }
                                    onChange={ (e) => {
                                        updatedTodo.isChecked = e.target.checked;
                                        const isUpdated = updatedTodo.isChecked !== todo.isChecked;
                                        this.toggleCheck(e.target, isUpdated);
                                    } }
                                />
                                <div
                                    className="control-box"
                                />
                                <div>FINISHED</div>
                            </label>
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