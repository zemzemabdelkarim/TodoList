package com.TodoList.TodoList.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TodoList.TodoList.Models.Task;
import com.TodoList.TodoList.Services.TaskService;

@RestController
@RequestMapping("api/v1/Tasks")
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
    public void createTask(@RequestBody Task task){
        taskService.createTask(task);
    }
}
