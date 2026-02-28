package com.TodoList.TodoList.Models;

public class ResponseMessage {
    private int status;
    private String message;
    private boolean success;
    
    /**
     * This constructor does not take any arameters
     * generates a success message
     * 
     */
    public ResponseMessage(){
        this.status = 150;
        this.message = "success";
        this.success = true;
    }

    /**
     * This constructor takes one String argument as a response message and it is a success response
     * with 200 ok status and success true
     * @param message
     */
    public ResponseMessage(String message){
        this.message = message;
        this.status = 200;
        this.success = true;
    }

    /**
     * This constructor takes all three arguments
     * ResponseMessage(int status, String message, boolean success)
     * @param status
     * @param message
     * @param success
     */
    public ResponseMessage(int status, String message, boolean success){
        this.message = message;
        this.status = status;
        this.success = success;
    }

    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public boolean isSuccess() {
        return success;
    }
    public void setSuccess(boolean success) {
        this.success = success;
    }

}
