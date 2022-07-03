package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Voting;
import com.tcc.professionalOfTheMonth.repository.VotingRepository;

@Service
public class VotingService extends GenericService<Voting, Long, VotingRepository>{
	public VotingService(VotingRepository votingRepository) {
		super(votingRepository);
	}
}
