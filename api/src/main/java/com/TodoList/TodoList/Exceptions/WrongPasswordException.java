package com.TodoList.TodoList.Exceptions;

public class WrongPasswordException extends RuntimeException {
    public WrongPasswordException(){
        super("Wrong password!");
    }
}
