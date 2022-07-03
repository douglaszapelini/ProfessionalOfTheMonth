package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.MuralItem;
import com.tcc.professionalOfTheMonth.service.MuralItemService;

@RestController
@RequestMapping(value="/muralItem")
public class MuralItemController extends GenericController<MuralItem, Long, MuralItemService>{
	
	public MuralItemController(MuralItemService muralItemService) {
		super(muralItemService);
	}
}
