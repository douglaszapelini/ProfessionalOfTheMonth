package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Enterprise;
import com.tcc.professionalOfTheMonth.service.EnterpriseService;

@RestController
@RequestMapping(value="/enterprise")
public class EnterpriseController extends GenericController<Enterprise, Long, EnterpriseService>{
	
	public EnterpriseController(EnterpriseService enterpriseService) {
		super(enterpriseService);
	}
}
