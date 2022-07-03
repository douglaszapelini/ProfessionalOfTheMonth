package com.tcc.professionalOfTheMonth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Participant;
import com.tcc.professionalOfTheMonth.service.ParticipantService;

@RestController
@RequestMapping(value="/participant")
public class ParticipantController extends GenericController<Participant, Long, ParticipantService>{
	
	public ParticipantController(ParticipantService participantService) {
		super(participantService);
	}
}
