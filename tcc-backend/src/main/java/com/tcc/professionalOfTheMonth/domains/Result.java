package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.tcc.professionalOfTheMonth.enums.Indicator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Result implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name="usur_id")
	private User userWinner;
	private Integer yearMonth;
	@OneToOne
	@JoinColumn(name = "voti_id", referencedColumnName = "voti_id")
	private Voting voting;
	private Integer icYear;
	
	public Result(Long id, User userWinner, Integer yearMonth, Voting voting,
			Indicator icYear) {
		super();
		this.id = id;
		this.userWinner = userWinner;
		this.yearMonth = yearMonth;
		this.voting = voting;
		this.icYear = icYear.getCode();
	}
}
