package ms.kwon.simple.todolist.service;

import ms.kwon.simple.todolist.mapper.TodoMapper;
import ms.kwon.simple.todolist.vo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("TodoService")
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public void addTodo(Todo todo) {
        System.out.println("### TodoService :: addTodo");
        todoMapper.addTodo(todo);
    }

    public List<Todo> getTodolist(Map<String,Object> filters) {
        System.out.println("### TodoService :: getTodolist");

        if (filters != null) {
            System.out.println(filters.get("isDisplayFinishedTodo"));
            System.out.println(filters.get("isDisplayRemovedTodo"));
            System.out.println(filters.get("orderCondition"));
        }

        List<Todo> result = todoMapper.getTodolist(filters);
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
