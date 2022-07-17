package com.tcc.professionalOfTheMonth.domains;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
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
public class Mural implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="mura_name")
	@NotNull(message="The attribute 'Enterprise' is required!")
	@NotBlank(message = "Fill the atributte 'name'!")
	private String name;
	
	@ManyToOne
	@JoinColumn(name = "entp_id")
	@NotNull(message="The attribute 'Enterprise' is required!")
	private Enterprise enterprise;
	
	@Column(name="icuse")
	@NotNull(message="The attribute 'icUse' is required!")
	private Boolean icUse;
	
	public Mural(Long id) {
		this.id = id;
	}
}