package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Result;
import com.tcc.professionalOfTheMonth.repository.ResultRepository;

@Service
public class ResultService extends GenericService<Result, Long, ResultRepository>{
	public ResultService(ResultRepository resultRepository) {
		super(resultRepository);
	}
}
