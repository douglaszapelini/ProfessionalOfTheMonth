package com.tcc.professionalOfTheMonth.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Enterprise;
import com.tcc.professionalOfTheMonth.domains.User;
import com.tcc.professionalOfTheMonth.service.EnterpriseService;
import com.tcc.professionalOfTheMonth.service.SendEmailService;
import com.tcc.professionalOfTheMonth.service.UserService;

@RestController
@RequestMapping(value="/user")
public class UserController extends GenericController<User, Long, UserService>{
	
	private final UserService userService;
	
	private final SendEmailService sendEmailService;
	
	private final PasswordEncoder encoder;
	
	private final EnterpriseService enterpriseService;
	
	public UserController(UserService userService, PasswordEncoder encoder, EnterpriseService enterpriseService, SendEmailService sendEmailService) {
		super(userService);
		this.userService = userService;
		this.encoder = encoder;
		this.enterpriseService = enterpriseService;
		this.sendEmailService = sendEmailService;
	}
	
	@Override
	@PostMapping
    public ResponseEntity save(@Valid @RequestBody User user) {
		
		Optional<Enterprise> opt = enterpriseService.findById(user.getEnterprise().getId());
		
		if(opt.isPresent()) {
			user.setPassword(encoder.encode(user.getPassword()));
	        return ResponseEntity.status(HttpStatus.OK).body(user);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Enterprise not found");
		}
		
    }

	
	@PutMapping(path = "{id}")
    public ResponseEntity<?> update(@RequestBody @Valid User newObj , @PathVariable Long id) {
		
		try {
			sendEmailService.sendHtmlEmail("zapelini.douglas@gmail.com", "Teste", "<h1> TESTE HTML </h1> <p>teste</p>");
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		
		Optional<User> opt = userService.findById(id);
    	
    	if(opt.isPresent()
    			&& newObj.getEnterprise() != null
    			&& newObj.getEnterprise().getId() != null
    			&& newObj.getEnterprise().getId().equals(opt.get().getEnterprise().getId())) {
    		
    		User user = opt.get();
    		user.setName(newObj.getName());
    		user.setEmail(newObj.getEmail());
    		user.setOffice(newObj.getOffice());
    		user.setIcAdmin(newObj.getIcAdmin());
    		user.setIcUse(newObj.getIcUse());
    		user.setIcEligible(newObj.getIcEligible());
    		user.setIcElection(newObj.getIcElection());
    		
    		userService.save(user);
    		return new ResponseEntity<>(user, HttpStatus.OK);
    	} else if(opt.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Enterprise not found");
    	} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    	}
    }
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler
	public Map<String, String> hundleValidationException(MethodArgumentNotValidException ex){
		
		Map<String, String> errors = new HashMap<>();
		
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError)error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		
		return errors;
	}
}
