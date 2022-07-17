package com.tcc.professionalOfTheMonth.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.Mural;
import com.tcc.professionalOfTheMonth.domains.MuralItem;

@Repository
public interface MuralItemRepository extends GenericRepository<MuralItem, Long>{

	public Optional<List<MuralItem>> findByMural(Mural mural);
}
