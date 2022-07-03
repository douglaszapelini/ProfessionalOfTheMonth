package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Participant implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name="voti_id")
	@NotNull(message = "The attribute 'voting' is required!")
	private Voting voting;
	
	@OneToOne
	@JoinColumn(name="user_id")
	@NotNull(message = "The attribute 'user' is required!")
	private User user;
	
	@Column(name="ic_voted")
	@NotNull(message = "The attribute 'voted' is required!")
	private Boolean voted;
	
}
