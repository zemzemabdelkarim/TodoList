package com.TodoList.TodoList.Services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.TodoList.TodoList.DTOs.requests.LoginRequest;
import com.TodoList.TodoList.DTOs.responses.LoginResponse;
import com.TodoList.TodoList.DTOs.responses.UserResponse;
import com.TodoList.TodoList.Exceptions.UserNotFoundException;
import com.TodoList.TodoList.Exceptions.WrongPasswordException;
import com.TodoList.TodoList.Models.User;
import com.TodoList.TodoList.Repositories.UserRepository;
import com.TodoList.TodoList.utils.JwtUtil;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(
        // props
        UserRepository userRepository,
        PasswordEncoder passwordEncoder,
        JwtUtil jwtUtil)
    {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public LoginResponse login(LoginRequest req){
        User user = userRepository.findByEmailOrUsername(req.getEmailOrUsername(), req.getEmailOrUsername())
        .orElseThrow(() -> new UserNotFoundException());
        
        if(!passwordEncoder.matches(req.getPassword(), user.getPassword()))
            throw new WrongPasswordException();

        String token = jwtUtil.generateToken(user.getId());
        
        UserResponse userResponce = new UserResponse(
            user.getId(),
            user.getEmail(),
            user.getUsername()
        );
        
        return new LoginResponse(token, userResponce );
    }
    
}
