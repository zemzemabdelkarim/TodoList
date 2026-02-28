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
    private String title;
    private boolean isDone;

    public Task(){}
    public Task(Integer id, String title, boolean isDone){
        this.id = id;
        this.title= title;
        this.isDone = isDone;
    }
    public Task(String title){
        this.title= title;
        this.isDone = false;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title= title;
    }
    public boolean isDone() {
        return isDone;
    }
    public void setIsDone(boolean isDone) {
        this.isDone = isDone;
    }

    //getters and setters
    
}
