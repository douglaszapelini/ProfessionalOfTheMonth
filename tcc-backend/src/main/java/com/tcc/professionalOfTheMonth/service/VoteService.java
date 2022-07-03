package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Vote;
import com.tcc.professionalOfTheMonth.repository.VoteRepository;

@Service
public class VoteService extends GenericService<Vote, Long, VoteRepository>{
	public VoteService(VoteRepository voteRepository) {
		super(voteRepository);
	}
}
