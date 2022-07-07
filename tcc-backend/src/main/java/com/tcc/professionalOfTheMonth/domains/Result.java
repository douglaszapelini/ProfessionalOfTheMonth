package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Result implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="usur_id")
	@NotNull(message = "The attribute 'userWinner' is required!")
	private User userWinner;
	
	@Column(name="ic_year")
	@NotNull(message = "The attribute 'icYear' is required!")
	private Boolean icYear;
	
	@Column(name="ic_use")
	@NotNull(message = "The attribute 'ic_use' is required!")
	private Boolean icUse;
}
