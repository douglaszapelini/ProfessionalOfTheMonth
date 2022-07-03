package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "user_name")
	private String name;
	
	@Column(name = "user_password")
	private String password;
	
	private String email;
	private String office;
	
	@ManyToOne
	@JoinColumn(name = "entp_id")
	private Enterprise enterprise;
	
	@Column(name = "ic_admin")
	private boolean icAdmin;
	
	@Column(name = "ic_use")
	private boolean icUse;
	
	@Column(name = "ic_eligible")
	private boolean icEligible;
	
	@Column(name = "ic_election")
	private boolean icElection;
	
	@Column(name = "ic_first_access")
	private boolean icFirstAccess;
}
