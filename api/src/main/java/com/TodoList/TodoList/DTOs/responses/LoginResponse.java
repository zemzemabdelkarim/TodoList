package com.TodoList.TodoList.DTOs.responses;

public class LoginResponse {
    private String token;
    private UserResponce userResponce;

    public LoginResponse(String token, UserResponce userResponce) {
        this.token = token;
        this.userResponce = userResponce;
    }

    public LoginResponse() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserResponce getUserResponce() {
        return userResponce;
    }

    public void setUserResponce(UserResponce userResponce) {
        this.userResponce = userResponce;
    }

}
