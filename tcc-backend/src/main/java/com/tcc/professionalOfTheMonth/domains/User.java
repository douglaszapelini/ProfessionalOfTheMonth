package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.tcc.professionalOfTheMonth.enums.EmployeeType;
import com.tcc.professionalOfTheMonth.enums.Indicator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String password;
	private String office;
	private Integer employeeType;
	private Integer icUse;
	private Integer icEligible;
	private Integer icElection;
	private Integer icFirstAccess;
	
	public User(Long id, String name, String password, String office, EmployeeType employeeType,
			Indicator icUse, Indicator icEligible, Indicator icElection, Indicator icFirstAccess) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.office = office;
		this.employeeType = employeeType.getCode();
		this.icUse = icUse.getCode();
		this.icEligible = icEligible.getCode();
		this.icElection = icElection.getCode();
		this.icFirstAccess = icFirstAccess.getCode();
	}
}
