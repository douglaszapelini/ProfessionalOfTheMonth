package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
	private Voting voting;
	@ManyToOne
	@JoinColumn(name="vter_id")
	private User voter;
	@ManyToOne
	@JoinColumn(name="elec_id")
	private User elected;
	private Date dateVote;
}
