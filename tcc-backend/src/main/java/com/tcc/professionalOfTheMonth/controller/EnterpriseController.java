package com.tcc.professionalOfTheMonth.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
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
import com.tcc.professionalOfTheMonth.dto.InsertEnterpriseDTO;
import com.tcc.professionalOfTheMonth.service.EnterpriseService;
import com.tcc.professionalOfTheMonth.service.SendEmailService;
import com.tcc.professionalOfTheMonth.service.UserService;
import com.tcc.professionalOfTheMonth.util.Util;

@RestController
@RequestMapping(value="/enterprise")
public class EnterpriseController extends GenericController<Enterprise, Long, EnterpriseService>{
	
    private final EnterpriseService enterpriseService;
    
    private final UserService useService;
    
    private final SendEmailService sendEmailService;
    
	private final PasswordEncoder encoder;
	
	public EnterpriseController(EnterpriseService enterpriseService, UserService useService, SendEmailService sendEmailService, PasswordEncoder encoder) {
		super(enterpriseService);
		this.enterpriseService = enterpriseService;
		this.useService = useService;
		this.sendEmailService = sendEmailService;
		this.encoder = encoder;
	}
	
	@PostMapping(value="/insert")
	public void insert(@RequestBody @Valid InsertEnterpriseDTO newObj) {
		Enterprise newEnterprise = enterpriseService.save(new Enterprise(null, newObj.getName()));
		
		String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?";
		String pwd = RandomStringUtils.random( 10, characters );
		
		User user = useService.save( new User(null, 				//id
											  "Admin", 				//name
											  encoder.encode(pwd),	//password
											  newObj.getEmail(),	//email
											  "Administrator",		//office
											  "", 					//pathProfilePicture
											  newEnterprise, 		//Enterprise
											  true, 				//icAdmin
											  true, 				//icUse
											  false, 				//icEligible
											  false,  				//icElection
											  true)); 				//icFirstAcess
		try {
			sendEmailService.sendHtmlEmail(user.getEmail(), 
										   "Profissional Of The Month - New Enterprise", 
										   Util.assembleHtmlEmail(user.getName(), user.getEmail(), pwd));
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping(value="/test")
	public void teste () {
		Util.savePicture("", "teste.png");
	}
	
	@PutMapping(path = "{id}")
    public ResponseEntity<Enterprise> update(@RequestBody @Valid Enterprise newObj , @PathVariable Long id) {
		
		Optional<Enterprise> opt = enterpriseService.findById(id);
    	
    	if(opt.isPresent()) {
    		Enterprise enterprise = opt.get();
    		enterprise.setName(newObj.getName());
    		enterpriseService.save(enterprise);
    		return new ResponseEntity<>(enterprise, HttpStatus.OK);
    	} else if(opt.isPresent()) {
    		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    	} else {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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
