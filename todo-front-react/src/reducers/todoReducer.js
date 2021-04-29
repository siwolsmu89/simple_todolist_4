import {ADD_TODO, CHECK_TODO, GET_TODO, RECEIVE_TODO, REMOVE_TODO} from "../actions/todoActions";

export default function todos(state, action) {
    const { todos } = state;
    switch(action.type) {
        case ADD_TODO:
            const newTodo = {
                id: action.id,
                text: action.text,
                isChecked: false,
                colorValue: action.colorValue
            };

            return [...todos, newTodo];
        case CHECK_TODO:
            const todosAfterCheck = [...todos];

            const checkIndex = todosAfterCheck.findIndex(todo => todo.id === action.id);
            todosAfterCheck[checkIndex].isChecked = !todosAfterCheck[checkIndex].isChecked;

            return todosAfterCheck;
        case REMOVE_TODO:
            // filter 함수는 기존 배열에서 신규 배열을 만들어 반환하므로 todos 객체를 수정하는 것이 아님
            return todos.filter(todo => todo.id !== action.id);
        case GET_TODO:
            return todos;
        case RECEIVE_TODO:
            return action.todos;
        default:
            return todos;
    }
}
