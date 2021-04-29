package ms.kwon.simple.todolist.mapper;

import ms.kwon.simple.todolist.vo.Todo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface TodoMapper {
    void addTodo(Todo todo);
    Todo getTodoById(int id);
    List<Todo> getTodolist(Map<String,Object> params);
    void toggleTodoCheck(Todo todo);
    void removeTodo(Todo todo);
}
