package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Mural;
import com.tcc.professionalOfTheMonth.service.MuralService;

@RestController
@RequestMapping(value="/mural")
public class MuralController extends GenericController<Mural, Long, MuralService>{
	
	public MuralController(MuralService muralService) {
		super(muralService);
	}
}
