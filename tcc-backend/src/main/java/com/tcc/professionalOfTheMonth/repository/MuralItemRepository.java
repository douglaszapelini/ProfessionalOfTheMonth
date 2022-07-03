package com.tcc.professionalOfTheMonth.repository;

import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.MuralItem;

@Repository
public interface MuralItemRepository extends GenericRepository<MuralItem, Long>{

}
