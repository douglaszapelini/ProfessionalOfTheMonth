package com.tcc.professionalOfTheMonth.dto;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.tcc.professionalOfTheMonth.domains.Enterprise;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InsertEnterpriseDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@NotNull(message = "The attribute 'name' is required!")
	@NotBlank(message = "Fill the atributte 'name'!")
	private String name;
	
	@NotNull(message = "The attribute 'email' is required!")
	@NotBlank(message = "Fill the atributte 'email'!")
	@Email(message = "The attribute 'email' is invalid")
	private String email;
}
