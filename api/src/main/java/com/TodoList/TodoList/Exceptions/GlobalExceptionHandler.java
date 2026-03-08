package com.TodoList.TodoList.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.TodoList.TodoList.DTOs.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
   
    @ExceptionHandler(PasswordMismatchException.class)
    public ResponseEntity<ErrorResponse> handlePasswordMismatch(
        // properties
        PasswordMismatchException ex
    ) {
        return new ResponseEntity<>(
            // attributes
            new ErrorResponse(ex.getMessage(),400),
            HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleEmailAlreadyExistsException(
        // props
        EmailAlreadyExistsException ex
    ){    
        return new ResponseEntity<>(
            // attrs
            new ErrorResponse(ex.getMessage(), 409),
            HttpStatus.CONFLICT
        );
    }

    @ExceptionHandler(UsernameAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleUsernameAlreadyExistsException(
        // props
        UsernameAlreadyExistsException ex
    ){
        return new ResponseEntity<>(
            // attrs
            new ErrorResponse(ex.getMessage(), 409),
            HttpStatus.CONFLICT
        );
    }
}
