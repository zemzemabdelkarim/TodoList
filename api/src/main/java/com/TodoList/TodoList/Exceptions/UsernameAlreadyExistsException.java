package com.TodoList.TodoList.Exceptions;

public class UsernameAlreadyExistsException extends RuntimeException {
    public UsernameAlreadyExistsException() {
        super("This Username is already in use!");
    }

    public UsernameAlreadyExistsException(String username) {
        super("This Username '" + username + "' is already in use!");
    }

}
