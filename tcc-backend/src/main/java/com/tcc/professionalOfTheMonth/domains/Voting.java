package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Voting implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="month_year")
	private Integer monthYear;
	
	@OneToOne
	@JoinColumn(name="resu_id")
	private Result result;
	
	@OneToOne
	@JoinColumn(name="entp_id")
	private Enterprise enterprise;
	
	@Column(name="date_oppened")
	private Date dataAbertura;
	
	@Column(name="date_planned_closure")
	private Date dataPrevistaEncerramento;
	
	@Column(name="date_closure")
	private Date dataEncerramento;
	
}
