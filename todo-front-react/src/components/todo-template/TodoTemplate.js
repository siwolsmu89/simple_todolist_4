import {Component} from "react";
import './TodoTemplate.css';

class TodoTemplate extends Component {
    componentDidMount() {
        const { getList } = this.props;
        getList();
    }

    render() {
        const { spinner, form, todoList } = this.props;
        return (
            <main className="todo-list-template">
                <div className="title">
                    Simple TodoList 3
                </div>
                <section className="spinner-wrapper">
                    { spinner }
                </section>
                <section className="form-wrapper">
                    { form }
                </section>
                <section className="todos-wrapper">
                    { todoList }
                </section>
            </main>
        );
    }
}

export default TodoTemplate;