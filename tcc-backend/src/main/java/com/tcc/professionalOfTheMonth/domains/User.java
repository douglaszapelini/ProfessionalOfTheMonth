package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user_system")
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "user_name")
	@NotNull(message = "The attribute 'name' is required!")
	@NotBlank(message = "Fill the atributte 'name'!")
	private String name;
	
	@Column(name = "user_password")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	
	@NotNull(message = "The attribute 'email' is required!")
	@NotBlank(message = "Fill the atributte 'email'!")
	@Email(message = "The attribute 'email' is invalid")
	private String email;
	
	private String office;
	
	@Column(name="path_profile_picture")
	private String pathProfileImage;
	
	@ManyToOne
	@JoinColumn(name = "entp_id")
	@NotNull(message = "The attribute 'enterprise' is required!")
	private Enterprise enterprise;
	
	@Column(name = "ic_admin")
	@NotNull(message = "The attribute 'icAdmin' is required!")
	private Boolean icAdmin;
	
	@Column(name = "ic_use")
	@NotNull(message = "The attribute 'icUse' is required!")
	private Boolean icUse;
	
	@Column(name = "ic_eligible")
	@NotNull(message = "The attribute 'icEligible' is required!")
	private Boolean icEligible;
	
	@Column(name = "ic_election")
	@NotNull(message = "The attribute 'icElection' is required!")
	private Boolean icElection;
	
	@Column(name = "ic_first_access")
	@NotNull(message = "The attribute 'icFirstAccess' is required!")
	private Boolean icFirstAccess;
}
