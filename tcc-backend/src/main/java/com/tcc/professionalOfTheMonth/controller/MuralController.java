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
import com.tcc.professionalOfTheMonth.domains.Mural;
import com.tcc.professionalOfTheMonth.service.MuralService;

@RestController
@RequestMapping(value="/mural")
public class MuralController extends GenericController<Mural, Long, MuralService>{
	
	private MuralService muralService;
	
	public MuralController(MuralService muralService) {
		super(muralService);
		this.muralService = muralService;
	}
	
	@PutMapping(path = "{id}")
    public ResponseEntity<Mural> update(@RequestBody @Valid Mural newObj , @PathVariable Long id) {
		
		Optional<Mural> opt = muralService.findById(id);
    	
		
    	if(opt.isPresent()
    			&& newObj.getEnterprise() != null
    			&& newObj.getEnterprise().getId() != null
    			&& newObj.getEnterprise().getId().equals(opt.get().getEnterprise().getId())) {
    		
    		Mural mural = opt.get();
    		mural.setName(newObj.getName());
    		muralService.save(mural);
    		return new ResponseEntity<>(mural, HttpStatus.OK);
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
