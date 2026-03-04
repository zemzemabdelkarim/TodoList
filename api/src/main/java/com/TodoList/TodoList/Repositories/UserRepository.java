package com.TodoList.TodoList.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TodoList.TodoList.Models.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmailOrUsername(String email, String username);
    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
}