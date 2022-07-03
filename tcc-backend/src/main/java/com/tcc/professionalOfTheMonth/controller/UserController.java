package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.User;
import com.tcc.professionalOfTheMonth.service.UserService;

@RestController
@RequestMapping(value="/user")
public class UserController extends GenericController<User, Long, UserService>{
	
	public UserController(UserService userService) {
		super(userService);
	}
}
