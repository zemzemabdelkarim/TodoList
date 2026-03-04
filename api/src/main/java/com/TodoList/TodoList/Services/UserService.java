package com.TodoList.TodoList.Services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.TodoList.TodoList.DataTransferObjects.CreateUserRequest;
import com.TodoList.TodoList.Models.User;
import com.TodoList.TodoList.Repositories.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(CreateUserRequest req){
        if(!req.getPassword().equals(req.getRetypePassword()))
            throw new RuntimeException("Passwords do not match!");

        if(userRepository.existsByEmail(req.getEmail()))
            throw new RuntimeException("Email already in use!");

        if(userRepository.existsByUsername(req.getUsername()))
            throw new RuntimeException("Username already in use!");

        String hashedPassword = passwordEncoder.encode(req.getPassword());

        User user = new User(req.getEmail(), req.getUsername(), hashedPassword);

        return userRepository.save(user);
    }
}