package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Vote implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="voti_id")
	@NotNull(message = "The attribute 'voting' is required!")
	private Voting voting;
	
	@ManyToOne
	@JoinColumn(name="user_selected")
	@NotNull(message = "The attribute 'userSelected' is required!")
	private User userSelected;
}
