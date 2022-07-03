package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Enterprise;
import com.tcc.professionalOfTheMonth.repository.EnterpriseRepository;

@Service
public class EnterpriseService extends GenericService<Enterprise, Long, EnterpriseRepository>{
	public EnterpriseService(EnterpriseRepository enterpriseRepository) {
		super(enterpriseRepository);
	}
}
