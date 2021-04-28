package ms.kwon.simple.todolist.service;

import ms.kwon.simple.todolist.mapper.TodoMapper;
import ms.kwon.simple.todolist.vo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("TodoService")
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public void addTodo(Todo todo) {
        System.out.println("### TodoService :: addTodo");
        List<Todo> currentTodos = todoMapper.getTodolist();
        for (Todo currentTodo : currentTodos) {
            if (todo.getId() == currentTodo.getId()) {
                System.out.println("### TodoService :: addTodo Error - Duplicated ID");
                return;
            }
        }

        todoMapper.addTodo(todo);
    }

    public List<Todo> getTodolist() {
        System.out.println("### TodoService :: getTodolist");
        List<Todo> result = todoMapper.getTodolist();
        System.out.println(result.toString());
        return result;
    }

    public void toggleTodoCheck(int id) {
        System.out.println("### TodoService :: toggleTodoCheck");
        Todo todo = todoMapper.getTodoById(id);
        if (todo == null) {
            System.out.println("### TodoService :: toggleTodoCheck Error - No Such ID exists");
            return;
        }

        todo.setChecked(!todo.isChecked());
        todoMapper.toggleTodoCheck(todo);
    }

    public void removeTodo(int id) {
        System.out.println("### TodoService :: removeTodo");
        Todo todo = todoMapper.getTodoById(id);
        if (todo == null) {
            System.out.println("### TodoService :: removeTodo Error - No Such ID exists");
            return;
        }

        todo.setRemoved(true);
        todoMapper.removeTodo(todo);
    }


}
