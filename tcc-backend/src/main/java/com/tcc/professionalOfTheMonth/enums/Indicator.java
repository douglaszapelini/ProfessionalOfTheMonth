package com.tcc.professionalOfTheMonth.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public enum Indicator {
	SIM(1, "Sim"),
	NAO(2, "Não");
	
	private int code;
	private String description;
	
	public static Indicator toEnum(Integer code) {
		if(code == null) {
			return null;
		}
		
		for(Indicator x : Indicator.values()) {
			if(code.equals(x.getCode())) {
				return x;
			}
		}
		
		throw new IllegalArgumentException("Invalid ID: "+ code);
	}
}
