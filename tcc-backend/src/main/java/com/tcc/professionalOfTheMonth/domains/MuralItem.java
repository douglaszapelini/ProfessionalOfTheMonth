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
public class MuralItem implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="mura_id")
	@NotNull(message="The attribute 'Mural' is required!")
	private Mural mural;
	
	@NotNull(message = "The attribute 'title' is required!")
	@NotBlank(message = "Fill the atributte 'title'!")
	private String title;
	private String description;
	
	@JoinColumn(name="path_image")
	private String pathImage;
	
	@Column(name="seq")
	@NotNull(message="The attribute 'sequence' is required!")
	private int sequence;
	
	public MuralItem(Long id) {
		this.id = id;
	}
}
