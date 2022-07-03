package com.tcc.professionalOfTheMonth.commons;

import lombok.Getter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public abstract class GenericController <E, ID extends Serializable, S extends GenericService<E, ID, ?>> {

    @Getter
    private final S service;

    public GenericController(S service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<E>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<E> findById(@PathVariable ID id) throws EntityNotFoundException {
    	
    	Optional<E> opt = service.findById(id);
    	
    	if(opt.isPresent()) {
    		return new ResponseEntity<>(opt.get(), HttpStatus.OK);
    	}else {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
    }

    @PostMapping
    public ResponseEntity<E> save(@Valid @RequestBody E body) {
        return ResponseEntity.ok(service.save(body));
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<E> delete(@PathVariable ID id) {
    	
    	Optional<E> opt = service.findById(id);
    	
    	if(opt.isPresent()) {
    		service.deleteById(id);
    		return new ResponseEntity<>(opt.get(), HttpStatus.OK);
    	}else {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
    }

}
