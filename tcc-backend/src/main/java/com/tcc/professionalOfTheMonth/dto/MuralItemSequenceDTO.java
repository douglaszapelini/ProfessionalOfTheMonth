package com.tcc.professionalOfTheMonth.dto;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MuralItemSequenceDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@NotNull(message = "The attribute 'id' is required!")
	private Long id;
	
	@NotNull(message = "The attribute 'sequence' is required!")
	private int sequence;

}
