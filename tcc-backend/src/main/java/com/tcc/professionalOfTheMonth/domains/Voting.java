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
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
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
public class Voting implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="year_month")
	@Min(value=200001, message= "The attribute 'yearMonth' is invalid!")
	@Max(value=210012, message= "The attribute 'yearMonth' is invalid!")
	@NotNull(message = "The attribute 'yearMonth' is required!")
	private Integer yearMonth;
	
	@OneToOne
	@JoinColumn(name="resu_id")
	@NotNull(message = "The attribute 'result' is required!")
	private Result result;
	
	@OneToOne
	@JoinColumn(name="entp_id")
	@NotNull(message = "The attribute 'enterprise' is required!")
	private Enterprise enterprise;
	
	@Column(name="date_oppened")
	private Date dataAbertura;
	
	@Column(name="date_planned_closure")
	private Date dataPrevistaEncerramento;
	
	@Column(name="date_closure")
	private Date dataEncerramento;
	
}
