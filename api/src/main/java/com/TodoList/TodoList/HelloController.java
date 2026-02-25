package com.TodoList.TodoList;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {
	@RequestMapping("/")
	String hello(){
		return "Hello, World! this changed";
	}
}
