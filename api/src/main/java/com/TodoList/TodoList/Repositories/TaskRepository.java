package com.TodoList.TodoList.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TodoList.TodoList.Models.Task;

public interface TaskRepository extends JpaRepository<Task, Integer>{
    
}
