package com.tcc.professionalOfTheMonth.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.tcc.professionalOfTheMonth.data.DetailUserData;
import com.tcc.professionalOfTheMonth.domains.User;
import com.tcc.professionalOfTheMonth.repository.UserRepository;

@Component
public class DetailUserServiceImpl implements UserDetailsService{

	private final UserRepository userRepository;
	
	public DetailUserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		Optional<User> user = userRepository.findByEmail(email);
		
		if(user.isEmpty()) {
			throw new UsernameNotFoundException("Email [" + email+ "] not found or not registred");
		}
		
		return new DetailUserData(user);
	}

}
