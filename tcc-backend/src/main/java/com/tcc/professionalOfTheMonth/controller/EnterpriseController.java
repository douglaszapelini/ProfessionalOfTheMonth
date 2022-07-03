package com.tcc.professionalOfTheMonth.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Enterprise;
import com.tcc.professionalOfTheMonth.service.EnterpriseService;

@RestController
@RequestMapping(value="/enterprise")
public class EnterpriseController extends GenericController<Enterprise, Long, EnterpriseService>{
	
    private final EnterpriseService enterpriseService;
	
	public EnterpriseController(EnterpriseService enterpriseService) {
		super(enterpriseService);
		this.enterpriseService = enterpriseService;
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
