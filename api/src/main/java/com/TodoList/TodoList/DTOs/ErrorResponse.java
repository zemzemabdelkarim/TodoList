package com.TodoList.TodoList.DTOs;

public class ErrorResponse {
    private String message;
    private int status;

    public ErrorResponse() {
        this.message = "Internal server error!";
        this.status = 500;
    }

    public ErrorResponse(String message, int status) {
        this.message = message;
        this.status = status;
    }

    public ErrorResponse(String message) {
        this.message = message;
        this.status = 500;
    }

    public String getMessage() {
        return this.message;
    }

    public int getStatus() {
        return this.status;
    }
}
