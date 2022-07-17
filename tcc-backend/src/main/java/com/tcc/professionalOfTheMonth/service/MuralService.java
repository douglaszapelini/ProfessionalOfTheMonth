package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Mural;
import com.tcc.professionalOfTheMonth.repository.MuralRepository;

@Service
public class MuralService extends GenericService<Mural, Long, MuralRepository>{
	
	private MuralRepository muralRepository;
	
	public MuralService(MuralRepository muralRepository) {
		super(muralRepository);
		this.muralRepository = muralRepository;
	}
	
	public void activeMural(Long id) {
		muralRepository.activeMural(id);
		muralRepository.desactiveMurals(id);
	}
}
