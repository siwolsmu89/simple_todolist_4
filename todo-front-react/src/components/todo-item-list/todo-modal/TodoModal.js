import {Component} from "react";

class TodoModal extends Component {
    
    render () {
        const { text, colorValue, isChecked, isRemoved, onUpdate } = this.props;

        return(
            <div className="todo-modal">
                <div className="todo-update-box">
                    <div className="todo-text">
                        <input
                            style={ { color: colorValue } }
                            value={ text }
                        />
                    </div>
                    <div className="todo-checkbox">
                        <div className="remove-checkbox">

                        </div>
                        <div className="finish-checkbox">

                        </div>
                    </div>
                </div>
                <div className="todo-info">
                    <div className="created-date">

                    </div>
                    <div className="updated-date">

                    </div>
                </div>
                <div className="modal-close">
                    <div className="update-save">

                    </div>
                    <div className="update-cancel">

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoModal;