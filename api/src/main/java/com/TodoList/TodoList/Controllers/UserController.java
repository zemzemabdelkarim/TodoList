package com.TodoList.TodoList.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TodoList.TodoList.DTOs.CreateUserRequest;
import com.TodoList.TodoList.DTOs.UserResponce;
import com.TodoList.TodoList.Models.User;
import com.TodoList.TodoList.Services.UserService;

@RestController
@RequestMapping("api/v1/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }
    
    @GetMapping
    public User getUserByEmailOrUsername(String usernameOrPassword){
        return new User();
    }
    
    @PostMapping
    public ResponseEntity<UserResponce> createUser(@RequestBody CreateUserRequest req){
        User user = userService.createUser(req);

        UserResponce userResponce = new UserResponce(
            user.getId(),
            user.getEmail(),
            user.getUsername()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(userResponce);
    }
}
