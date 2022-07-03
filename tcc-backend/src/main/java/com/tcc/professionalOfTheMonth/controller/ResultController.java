package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Result;
import com.tcc.professionalOfTheMonth.service.ResultService;

@RestController
@RequestMapping(value="/result")
public class ResultController extends GenericController<Result, Long, ResultService>{
	
	public ResultController(ResultService resultService) {
		super(resultService);
	}
}
