package com.tcc.professionalOfTheMonth.repository;

import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.Participant;

@Repository
public interface ParticipantRepository extends GenericRepository<Participant, Long>{

}
