package com.TodoList.TodoList.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TodoList.TodoList.Models.ResponseMessage;
import com.TodoList.TodoList.Models.Task;
import com.TodoList.TodoList.Services.TaskService;

@RestController
@RequestMapping("api/v1/Tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    private final TaskService taskService;
    
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }
    
    @PostMapping
    public ResponseMessage createTask(@RequestBody Task task){
        taskService.createTask(task);
        return new ResponseMessage(200, "Task created successfully!", true);
    }
}
