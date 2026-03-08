package com.TodoList.TodoList.DTOs;

public class UserResponce {
    private String username;
    private String email;
    private Integer id;

    public UserResponce(){}

    public UserResponce(Integer id,String email, String username){
        this.id = id;
        this.email = email;
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return this.id;
    }

}
