package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Mural;
import com.tcc.professionalOfTheMonth.repository.MuralRepository;

@Service
public class MuralService extends GenericService<Mural, Long, MuralRepository>{
	public MuralService(MuralRepository muralRepository) {
		super(muralRepository);
	}
}
