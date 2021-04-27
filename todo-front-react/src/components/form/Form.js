import {Component} from "react";
import './Form.css';

class Form extends Component {

    render() {
        const { todos, colors, onCreate } = this.props;
        let input;
        const activeColorIndex = colors.findIndex(color => color.active === true );
        const activeColorValue = colors[activeColorIndex].colorValue;

        let nextId = -1;
        for (const todo of todos) {
            nextId = nextId <= todo.id ? todo.id : nextId;
        }
        nextId++;

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                const text = input.value;
                onCreate(nextId, text, activeColorValue);
                input.value = '';
            }
        };

        return (
            <div className="form">
                <input ref={ node => { input = node } } onKeyPress={ handleKeyPress }/>
                <div className="create-button"
                    onClick={ () => {
                        const text = input.value;
                        onCreate(nextId, text, activeColorValue);
                        input.value = '';
                } }>
                    추가
                </div>
            </div>
        );
    }
}

export default Form;