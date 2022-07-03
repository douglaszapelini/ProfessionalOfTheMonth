package com.tcc.professionalOfTheMonth.service;

import org.springframework.stereotype.Service;

import com.tcc.professionalOfTheMonth.commons.GenericService;
import com.tcc.professionalOfTheMonth.domains.Participant;
import com.tcc.professionalOfTheMonth.repository.ParticipantRepository;

@Service
public class ParticipantService extends GenericService<Participant, Long, ParticipantRepository>{
	public ParticipantService(ParticipantRepository participantRepository) {
		super(participantRepository);
	}
}
