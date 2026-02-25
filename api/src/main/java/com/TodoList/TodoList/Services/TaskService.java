package com.TodoList.TodoList.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.TodoList.TodoList.Models.Task;
import com.TodoList.TodoList.Repositories.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    };

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public void createTask(Task task) {
        taskRepository.save(task);
    }
    
}
