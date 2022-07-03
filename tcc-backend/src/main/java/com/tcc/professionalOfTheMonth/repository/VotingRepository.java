package com.tcc.professionalOfTheMonth.repository;

import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.Voting;

@Repository
public interface VotingRepository extends GenericRepository<Voting, Long>{

}
