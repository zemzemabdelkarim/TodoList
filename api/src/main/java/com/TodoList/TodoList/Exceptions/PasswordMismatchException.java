package com.TodoList.TodoList.Exceptions;

public class PasswordMismatchException extends RuntimeException {
    public PasswordMismatchException(){
        super("Passwords does not match!");
    }
}
