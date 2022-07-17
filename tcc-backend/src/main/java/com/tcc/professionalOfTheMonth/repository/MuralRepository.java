package com.tcc.professionalOfTheMonth.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.Mural;

@Repository
public interface MuralRepository extends GenericRepository<Mural, Long>{
	
	@Modifying
	@Transactional
	@Query("UPDATE Mural m SET m.icUse = true WHERE m.id = :id")
	void activeMural(@Param("id") Long id);
	
	@Modifying
	@Transactional
	@Query("UPDATE Mural m SET m.icUse = false WHERE m.id <> :muralActiveId")
	void desactiveMurals(@Param("muralActiveId") Long muralActiveId);
}
