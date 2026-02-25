package com.TodoList.TodoList.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String task;
    private boolean isDone;

    public Task(){}
    public Task(Integer id, String task, boolean isDone){
        this.id = id;
        this.task = task;
        this.isDone = isDone;
    }
    public Task(String task){
        this.task = task;
        this.isDone = false;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getTask() {
        return task;
    }
    public void setTask(String task) {
        this.task = task;
    }
    public boolean isDone() {
        return isDone;
    }
    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    //getters and setters
    
}
