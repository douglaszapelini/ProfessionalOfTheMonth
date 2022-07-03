package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.User;
import com.tcc.professionalOfTheMonth.repository.UserRepository;

@Service
public class UserService extends GenericService<User, Long, UserRepository>{
	public UserService(UserRepository userRepository) {
		super(userRepository);
	}
}
