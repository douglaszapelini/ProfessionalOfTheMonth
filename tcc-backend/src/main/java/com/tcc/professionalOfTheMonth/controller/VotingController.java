package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Voting;
import com.tcc.professionalOfTheMonth.service.VotingService;

@RestController
@RequestMapping(value="/voting")
public class VotingController extends GenericController<Voting, Long, VotingService>{
	
	public VotingController(VotingService votingService) {
		super(votingService);
	}
}
