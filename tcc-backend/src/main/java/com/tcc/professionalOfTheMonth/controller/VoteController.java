package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Vote;
import com.tcc.professionalOfTheMonth.service.VoteService;

@RestController
@RequestMapping(value="/vote")
public class VoteController extends GenericController<Vote, Long, VoteService>{
	
	public VoteController(VoteService voteService) {
		super(voteService);
	}
}
