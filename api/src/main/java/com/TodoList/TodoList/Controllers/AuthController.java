package com.TodoList.TodoList.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TodoList.TodoList.DTOs.requests.LoginRequest;
import com.TodoList.TodoList.DTOs.responses.LoginResponse;
import com.TodoList.TodoList.Services.AuthService;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    
    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req){
        LoginResponse res = authService.login(req);

        return ResponseEntity.ok(res);
    }
}
