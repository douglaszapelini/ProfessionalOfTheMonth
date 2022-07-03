package com.tcc.professionalOfTheMonth.repository;

import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.Mural;

@Repository
public interface MuralRepository extends GenericRepository<Mural, Long>{

}
