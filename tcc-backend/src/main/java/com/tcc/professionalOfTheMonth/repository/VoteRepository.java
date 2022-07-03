package com.tcc.professionalOfTheMonth.repository;

import org.springframework.stereotype.Repository;

import com.tcc.professionalOfTheMonth.commons.GenericRepository;
import com.tcc.professionalOfTheMonth.domains.Vote;

@Repository
public interface VoteRepository extends GenericRepository<Vote, Long>{

}
