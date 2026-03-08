package com.TodoList.TodoList.Exceptions;

public class EmailAlreadyExistsException extends RuntimeException {
    public EmailAlreadyExistsException(){
        super("This Email is already in use!");
    }
    public EmailAlreadyExistsException(String email){
        super("This Email '"+ email +"' is already in use!");
    }
}
