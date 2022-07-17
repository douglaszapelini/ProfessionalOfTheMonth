package com.tcc.professionalOfTheMonth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Mural;
import com.tcc.professionalOfTheMonth.domains.MuralItem;
import com.tcc.professionalOfTheMonth.repository.MuralItemRepository;

@Service
public class MuralItemService extends GenericService<MuralItem, Long, MuralItemRepository>{
	
	private MuralItemRepository muralItemRepository;
	
	public MuralItemService(MuralItemRepository muralItemRepository) {
		super(muralItemRepository);
		this.muralItemRepository = muralItemRepository;
	}
	
	public void updateList(List<MuralItem> list) {
		for(MuralItem muralItem : list){
			muralItemRepository.save(muralItem);
		}
	}
	
	public Optional<List<MuralItem>> findByMural(Mural mural){
		return muralItemRepository.findByMural(mural);
	}
}
