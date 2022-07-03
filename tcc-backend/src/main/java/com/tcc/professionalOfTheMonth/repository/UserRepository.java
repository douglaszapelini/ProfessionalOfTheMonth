package com.tcc.professionalOfTheMonth.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.User;

@Repository
public interface UserRepository extends GenericRepository<User, Long>{
	
	public Optional<User> findByEmail(String email);
}
