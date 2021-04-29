package ms.kwon.simple.todolist.controller;

import com.google.gson.Gson;
import ms.kwon.simple.todolist.service.TodoService;
import ms.kwon.simple.todolist.vo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    TodoService todoService;

    @PostConstruct
    public void init() {
        System.out.println("@@@ TodoController Activated @@@");
    }

    @RequestMapping("/add.do")
    public void addTodo(@RequestBody Todo todo){
        System.out.println("@@@ TodoController :: add.do start");

        String text = todo.getText();
        String colorValue = todo.getColorValue();

        System.out.println("text: " + text);
        System.out.println("color: " +colorValue);

        todoService.addTodo(todo);
        System.out.println("@@@ TodoController :: add.do end");
    }

    @RequestMapping("/getList.do")
    public String getTodolist(@RequestBody Map<String,Object> filters) {
        System.out.println("@@@ TodoController :: getTodolist.do start");

        List<Todo> todolist = todoService.getTodolist(filters);

        Gson gson = new Gson();
        String result = gson.toJson(todolist);

        System.out.println("@@@ TodoController :: result = " + result);
        System.out.println("@@@ TodoController :: getTodolist.do end");
        return result;
    }

    @RequestMapping("/check.do")
    public void toggleTodoCheck(@RequestBody Todo todo) {
        System.out.println("@@@ TodoController :: check.do start");
        todoService.toggleTodoCheck(todo.getId());
        System.out.println("@@@ TodoController :: check.do end");
    }

    @RequestMapping("/remove.do")
    public void removeTodo(@RequestBody Todo todo) {
        System.out.println("@@@ TodoController :: remove.do start");
        todoService.removeTodo(todo.getId());
        System.out.println("@@@ TodoController :: remove.do end");
    }

}
