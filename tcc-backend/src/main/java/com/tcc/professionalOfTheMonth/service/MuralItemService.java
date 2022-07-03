package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.MuralItem;
import com.tcc.professionalOfTheMonth.repository.MuralItemRepository;

@Service
public class MuralItemService extends GenericService<MuralItem, Long, MuralItemRepository>{
	public MuralItemService(MuralItemRepository muralItemRepository) {
		super(muralItemRepository);
	}
}
