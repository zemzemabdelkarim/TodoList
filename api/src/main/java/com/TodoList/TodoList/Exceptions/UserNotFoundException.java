package com.TodoList.TodoList.Exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(){
        super("User not found!");
    }
}
