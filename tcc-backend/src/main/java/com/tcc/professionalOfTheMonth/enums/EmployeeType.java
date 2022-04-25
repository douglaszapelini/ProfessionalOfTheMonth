package com.tcc.professionalOfTheMonth.enums;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public enum EmployeeType{
	
	DEFAULT(1, "Default"),
	ADMINISTRATOR(2, "Administrator");
	
	private int code;
	private String description;
	
	public static EmployeeType toEnum(Integer code) {
		if(code == null) {
			return null;
		}
		
		for(EmployeeType x : EmployeeType.values()) {
			if(code.equals(x.getCode())) {
				return x;
			}
		}
		
		throw new IllegalArgumentException("Id inválido: "+ code);
	}
}
